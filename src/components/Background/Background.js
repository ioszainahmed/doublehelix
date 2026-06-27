class Background extends Component {
    constructor(containerId, props = {}) {
        super(containerId, {
            strandColorA: '#60A5FA',   // blue-400
            strandColorB: '#A78BFA',   // violet-400
            amplitude: 0,              // computed on mount from canvas width
            frequency: 0.018,
            speed: 0.004,
            rungSpacing: 36,
            ...props
        });

        this._raf = null;
        this._time = 0;
        this._resizeHandler = null;
    }

    render() {
        return `
            <canvas
                id="helix-canvas"
                style="position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:0;opacity:0.18;"
                aria-hidden="true"
            ></canvas>
        `;
    }

    onMount() {
        const canvas = document.getElementById('helix-canvas');
        if (!canvas) return;

        const ctx = canvas.getContext('2d');

        const resize = () => {
            canvas.width  = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resize();

        this._resizeHandler = resize;
        window.addEventListener('resize', resize, { passive: true });

        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        const { strandColorA, strandColorB, frequency, speed, rungSpacing } = this.props;

        const hexToRgb = hex => {
            const r = parseInt(hex.slice(1, 3), 16);
            const g = parseInt(hex.slice(3, 5), 16);
            const b = parseInt(hex.slice(5, 7), 16);
            return { r, g, b };
        };

        const rgbA = hexToRgb(strandColorA);
        const rgbB = hexToRgb(strandColorB);

        const draw = () => {
            const W = canvas.width;
            const H = canvas.height;

            ctx.clearRect(0, 0, W, H);

            // Amplitude scales with viewport so helix feels proportional
            const amplitude = Math.min(W * 0.13, 110);
            const cx = W / 2;

            // Pre-compute both strands along the Y axis
            // Strand A: x = cx + A·cos(y·freq + time)
            // Strand B: x = cx + A·cos(y·freq + time + π)  — perfect antiphase
            // cos(phase) > 0  → strand is to the right  → "back" when viewed from the right
            // cos(phase) < 0  → strand is to the left   → "front"
            // We depth-sort at each segment so the front strand always overlaps rungs & back strand

            const step = 2; // px resolution
            const nPts = Math.ceil(H / step) + 1;

            const ptA = new Float32Array(nPts);
            const ptB = new Float32Array(nPts);
            for (let i = 0; i < nPts; i++) {
                const y   = i * step;
                const phi = y * frequency + this._time;
                ptA[i] = cx + amplitude * Math.cos(phi);
                ptB[i] = cx + amplitude * Math.cos(phi + Math.PI);
            }

            // --- 1. Draw rungs (always behind both strands) ---
            const nRungs = Math.ceil(H / rungSpacing) + 1;
            for (let r = 0; r < nRungs; r++) {
                const y   = r * rungSpacing;
                const phi = y * frequency + this._time;
                const xA  = cx + amplitude * Math.cos(phi);
                const xB  = cx + amplitude * Math.cos(phi + Math.PI);

                // depth: cosine value tells us which strand is in front
                // front strand: the one where cos is most negative (leftmost)
                const cosVal  = Math.cos(phi); // strand A cosine
                const depth   = Math.abs(cosVal); // 1 at side (most depth contrast), 0 at front/back

                // rung alpha dims when strands are crossing (depth ≈ 0)
                const alpha   = 0.15 + 0.45 * depth;

                // gradient rung from color A to color B
                const grad = ctx.createLinearGradient(xA, y, xB, y);
                grad.addColorStop(0, `rgba(${rgbA.r},${rgbA.g},${rgbA.b},${alpha})`);
                grad.addColorStop(1, `rgba(${rgbB.r},${rgbB.g},${rgbB.b},${alpha})`);

                ctx.beginPath();
                ctx.moveTo(xA, y);
                ctx.lineTo(xB, y);
                ctx.strokeStyle  = grad;
                ctx.lineWidth    = 1.5;
                ctx.lineCap      = 'round';
                ctx.stroke();

                // small node circles at rung ends
                const nodeR = 2.2;
                ctx.beginPath();
                ctx.arc(xA, y, nodeR, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(${rgbA.r},${rgbA.g},${rgbA.b},${alpha + 0.1})`;
                ctx.fill();

                ctx.beginPath();
                ctx.arc(xB, y, nodeR, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(${rgbB.r},${rgbB.g},${rgbB.b},${alpha + 0.1})`;
                ctx.fill();
            }

            // --- Helper: draw a strand path from pre-computed point array ---
            const drawStrand = (pts, rgb, isBack) => {
                // Back strand: no glow, dimmer.  Front strand: glow, brighter.
                const alpha     = isBack ? 0.40 : 0.90;
                const lineW     = isBack ? 1.5  : 2.5;
                const glowBlur  = isBack ? 0    : 14;
                const glowAlpha = isBack ? 0    : 0.5;

                if (!isBack && glowBlur > 0) {
                    // Glow pass — wider, blurred stroke behind
                    ctx.save();
                    ctx.beginPath();
                    for (let i = 0; i < nPts; i++) {
                        const y = i * step;
                        if (i === 0) ctx.moveTo(pts[i], y);
                        else          ctx.lineTo(pts[i], y);
                    }
                    ctx.strokeStyle = `rgba(${rgb.r},${rgb.g},${rgb.b},${glowAlpha})`;
                    ctx.lineWidth   = lineW + glowBlur;
                    ctx.lineCap     = 'round';
                    ctx.lineJoin    = 'round';
                    ctx.filter      = `blur(${Math.round(glowBlur * 0.6)}px)`;
                    ctx.stroke();
                    ctx.filter      = 'none';
                    ctx.restore();
                }

                ctx.beginPath();
                for (let i = 0; i < nPts; i++) {
                    const y = i * step;
                    if (i === 0) ctx.moveTo(pts[i], y);
                    else          ctx.lineTo(pts[i], y);
                }
                ctx.strokeStyle = `rgba(${rgb.r},${rgb.g},${rgb.b},${alpha})`;
                ctx.lineWidth   = lineW;
                ctx.lineCap     = 'round';
                ctx.lineJoin    = 'round';
                ctx.stroke();
            };

            // --- 2. Determine which strand is globally "behind" at top of frame ---
            // We split the helix into segments between crossing points and depth-sort per segment.
            // Crossings occur every half-period: deltaY = π / frequency
            const halfPeriod = Math.PI / frequency;

            // Find which strand is in back for the first segment (y = 0)
            const phi0 = this._time;
            // cos(phi0) > 0 → strand A is to the right.  We treat "right" as behind.
            let aIsBack0 = Math.cos(phi0) > 0;

            // Walk through the full height, swapping at each crossing
            let segStart = 0;
            // First crossing Y where cos(y·freq + time) = 0 → y·freq + time = ±π/2
            // → y = (π/2 - time%π) / freq  ...but easier to iterate
            let nextCrossY = halfPeriod - ((this._time % halfPeriod + halfPeriod) % halfPeriod) / 1;
            // Compute properly:
            // cos(y·freq + time) = 0 when y·freq + time = π/2 + n·π
            // First n such that y ≥ 0:
            const t0 = this._time;
            let n0   = Math.ceil((- t0) / Math.PI - 0.5); // first zero crossing index
            let nextCross = ((n0 + 0.5) * Math.PI - t0) / frequency;
            if (nextCross < 0) nextCross += halfPeriod;

            // We'll render in segments between crossings, alternating which strand is in back
            let aIsBack = Math.cos(t0) > 0;

            const drawSegment = (y0, y1, aBack) => {
                const i0 = Math.round(y0 / step);
                const i1 = Math.min(Math.round(y1 / step), nPts - 1);
                if (i1 <= i0) return;

                const subA = ptA.subarray(i0, i1 + 1);
                const subB = ptB.subarray(i0, i1 + 1);

                // Reconstruct arrays with proper y offset for drawing
                const drawSubStrand = (pts, startY, rgb, isBack) => {
                    const n = pts.length;
                    const alpha    = isBack ? 0.40 : 0.90;
                    const lineW    = isBack ? 1.5  : 2.5;

                    if (!isBack) {
                        ctx.save();
                        ctx.beginPath();
                        for (let i = 0; i < n; i++) {
                            const y = startY + i * step;
                            if (i === 0) ctx.moveTo(pts[i], y);
                            else          ctx.lineTo(pts[i], y);
                        }
                        ctx.strokeStyle = `rgba(${rgb.r},${rgb.g},${rgb.b},0.35)`;
                        ctx.lineWidth   = lineW + 10;
                        ctx.lineCap     = 'round';
                        ctx.lineJoin    = 'round';
                        ctx.filter      = 'blur(5px)';
                        ctx.stroke();
                        ctx.filter      = 'none';
                        ctx.restore();
                    }

                    ctx.beginPath();
                    for (let i = 0; i < n; i++) {
                        const y = startY + i * step;
                        if (i === 0) ctx.moveTo(pts[i], y);
                        else          ctx.lineTo(pts[i], y);
                    }
                    ctx.strokeStyle = `rgba(${rgb.r},${rgb.g},${rgb.b},${alpha})`;
                    ctx.lineWidth   = lineW;
                    ctx.lineCap     = 'round';
                    ctx.lineJoin    = 'round';
                    ctx.stroke();
                };

                if (aBack) {
                    drawSubStrand(subA, i0 * step, rgbA, true);
                    drawSubStrand(subB, i0 * step, rgbB, false);
                } else {
                    drawSubStrand(subB, i0 * step, rgbB, true);
                    drawSubStrand(subA, i0 * step, rgbA, false);
                }
            };

            // Iterate segments
            let segY = 0;
            let crossY = nextCross;
            let swap = aIsBack;

            while (segY < H) {
                const endY = Math.min(crossY, H);
                drawSegment(segY, endY, swap);
                segY  = crossY;
                crossY += halfPeriod;
                swap   = !swap;
            }

            if (!prefersReducedMotion) {
                this._time += speed;
            }

            this._raf = requestAnimationFrame(draw);
        };

        this._raf = requestAnimationFrame(draw);
    }

    destroy() {
        if (this._raf) {
            cancelAnimationFrame(this._raf);
            this._raf = null;
        }
        if (this._resizeHandler) {
            window.removeEventListener('resize', this._resizeHandler);
        }
    }
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = Background;
} else {
    window.Background = Background;
}
