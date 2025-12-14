/**
 * Hero Section Component
 * 
 * SOLID Principles:
 * - Single Responsibility: Only handles hero section UI
 * - Open/Closed: Content configurable via props
 * - Liskov Substitution: Follows Component interface
 * - Dependency Inversion: Depends on Component abstraction
 * 
 * Features:
 * - Animated heading with interactive text effect
 * - Subtitle with fade animation
 * - Animated CTA button
 * - Background grid curtain animation
 * - Logo carousel integration point
 */
class Hero extends Component {
    /**
     * @param {string} containerId - Container element ID
     * @param {Object} props - Configuration
     */
    constructor(containerId, props = {}) {
        super(containerId, {
            headline: {
                static1: 'Scale',
                interactive: ['your', 'app'],
                static2: ['with', 'smart', 'infrastructure']
            },
            subtitle: 'Engineering a future-proof foundation for your product.<br><br>From solid-core architecture to unified systems that scale without limits, built all into a single cohesive stack.',
            ctaText: 'Start Building',
            trustedByText: 'Trusted by',
            ...props
        });
    }

    /**
     * Render animated letter with hover effect
     * @private
     */
    _renderAnimatedLetter(letter, delay) {
        return `
            <span class="relative inline-block overflow-hidden h-[1.1em]">
                <span class="block transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-full bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/50" style="transition-delay: ${delay}ms">${letter}</span>
                <span class="absolute top-0 left-0 block translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0 text-orange-400" style="transition-delay: ${delay}ms">${letter}</span>
            </span>
        `;
    }

    /**
     * Render animated word
     * @private
     */
    _renderAnimatedWord(word, startDelay = 0) {
        return `
            <span class="inline-flex">
                ${word.split('').map((letter, i) => 
                    this._renderAnimatedLetter(letter, startDelay + (i * 25))
                ).join('')}
            </span>
        `;
    }

    /**
     * Render the headline with interactive effects
     * @private
     */
    _renderHeadline() {
        const { headline } = this.props;
        
        return `
            <h1 class="debug-hero-headline [animation:fadeSlideIn_1s_ease-out_1s_both] animate-on-scroll animate flex flex-wrap justify-center gap-x-[0.25em] gap-y-2 leading-[1.1] md:text-8xl cursor-default text-6xl font-medium tracking-tighter font-manrope mb-16">
                <!-- Static Word -->
                <span class="inline-flex bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/50 opacity-60">${headline.static1}</span>

                <!-- Interactive Group -->
                <span class="group inline-flex flex-wrap justify-center gap-x-[0.25em] cursor-pointer select-none">
                    ${headline.interactive.map((word, idx) => 
                        this._renderAnimatedWord(word, idx * 100)
                    ).join('')}
                </span>

                <!-- Static Words -->
                ${headline.static2.map(word => `
                    <span class="inline-flex bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/50 opacity-60">${word}</span>
                `).join('')}
            </h1>
        `;
    }

    /**
     * Render grid columns for curtain animation
     * @private
     */
    _renderGridColumns() {
        const columns = [
            { height: '75%', delay: 1 },
            { height: '65%', delay: 2 },
            { height: '55%', delay: 3 },
            { height: '45%', delay: 4, showGradient: true },
            { height: '55%', delay: 5 },
            { height: '65%', delay: 6 },
            { height: '75%', delay: 7 }
        ];

        return columns.map((col, idx) => `
            <div class="relative h-full ${idx === 3 ? '' : 'hidden md:block'} border-${idx < 3 ? 'r' : 'l'} border-white/5 col-anim delay-${col.delay}">
                <div class="absolute bottom-0 left-0 right-0 bg-black h-[${col.height}] border-t border-white/10 shadow-[0_-20px_60px_-10px_rgba(0,0,0,0.8)]"></div>
                ${col.showGradient ? '<div class="absolute top-[20%] left-0 right-0 h-[30%] bg-gradient-to-b from-white/5 to-transparent pointer-events-none"></div>' : ''}
            </div>
        `).join('');
    }

    /**
     * Render CTA button with beam effect
     * @private
     */
    _renderCTA() {
        return `
            <button class="debug-cta group flex overflow-hidden uppercase transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_40px_-10px_rgba(234,88,12,0.5)] focus:outline-none text-sm font-medium text-white tracking-widest font-geist rounded-full pt-5 pr-12 pb-5 pl-12 relative items-center justify-center">
                <!-- Full Border Beam -->
                <div class="absolute inset-0 -z-20 rounded-full overflow-hidden p-[1px]">
                    <div class="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_0_300deg,#ea580c_360deg)]" style="animation: beam-spin 3s linear infinite;"></div>
                    <div class="absolute inset-[1px] rounded-full bg-black"></div>
                </div>

                <!-- Inner Background & Effects -->
                <div class="-z-10 overflow-hidden bg-zinc-950 rounded-full absolute top-[2px] right-[2px] bottom-[2px] left-[2px]">
                    <div class="absolute inset-0 bg-gradient-to-b from-zinc-800/60 to-transparent"></div>
                    <div class="opacity-30 mix-blend-overlay absolute top-0 right-0 bottom-0 left-0" style="background-image: radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px); background-size: 12px 12px; animation: dots-move 8s linear infinite"></div>
                    <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-1/2 bg-orange-500/10 blur-2xl rounded-full pointer-events-none transition-colors duration-500 group-hover:bg-orange-500/30"></div>
                </div>

                <!-- Content -->
                <span class="relative z-10 text-white/90 transition-colors group-hover:text-white font-sans">${this.props.ctaText}</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right relative z-10 ml-2 transition-transform duration-300 group-hover:translate-x-1">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                </svg>
            </button>
        `;
    }

    render() {
        const { subtitle, trustedByText } = this.props;

        return `
            <section class="debug-hero min-h-screen flex flex-col md:pt-20 overflow-hidden w-full pt-32 relative items-center justify-center" style="mask-image: linear-gradient(180deg, transparent, black 0%, black 95%, transparent); -webkit-mask-image: linear-gradient(180deg, transparent, black 0%, black 95%, transparent);">
                
                <!-- Background Effects -->
                <div class="debug-hero-bg absolute inset-0 -z-20">
                    <div class="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[120%] h-[80%] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/10 via-zinc-900/20 to-black"></div>
                    <div class="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
                </div>

                <!-- Grid/Curtain Structure -->
                <div class="debug-hero-grid absolute inset-0 w-full h-full grid grid-cols-1 md:grid-cols-7 gap-0 -z-10 pointer-events-none">
                    <div class="relative h-full hidden md:block border-r border-white/5 col-anim delay-1">
                        <div class="absolute bottom-0 left-0 right-0 bg-black h-[75%] border-t border-white/10 shadow-[0_-20px_60px_-10px_rgba(0,0,0,0.8)]"></div>
                    </div>
                    <div class="relative h-full hidden md:block border-r border-white/5 col-anim delay-2">
                        <div class="absolute bottom-0 left-0 right-0 bg-black h-[65%] border-t border-white/10 shadow-[0_-20px_60px_-10px_rgba(0,0,0,0.8)]"></div>
                    </div>
                    <div class="relative h-full hidden md:block border-r border-white/5 col-anim delay-3">
                        <div class="absolute bottom-0 left-0 right-0 bg-black h-[55%] border-t border-white/10 shadow-[0_-20px_60px_-10px_rgba(0,0,0,0.8)]"></div>
                    </div>
                    <div class="relative h-full border-r border-white/5 md:border-none col-anim delay-4">
                        <div class="absolute bottom-0 left-0 right-0 bg-black h-[45%] border-t border-white/10 shadow-[0_-20px_60px_-10px_rgba(0,0,0,0.8)]"></div>
                    </div>
                    <div class="relative h-full hidden md:block border-l border-white/5 col-anim delay-5">
                        <div class="absolute bottom-0 left-0 right-0 bg-black h-[55%] border-t border-white/10 shadow-[0_-20px_60px_-10px_rgba(0,0,0,0.8)]"></div>
                    </div>
                    <div class="relative h-full hidden md:block border-l border-white/5 col-anim delay-6">
                        <div class="absolute bottom-0 left-0 right-0 bg-black h-[65%] border-t border-white/10 shadow-[0_-20px_60px_-10px_rgba(0,0,0,0.8)]"></div>
                    </div>
                    <div class="relative h-full hidden md:block border-l border-white/5 col-anim delay-7">
                        <div class="absolute bottom-0 left-0 right-0 bg-black h-[75%] border-t border-white/10 shadow-[0_-20px_60px_-10px_rgba(0,0,0,0.8)]"></div>
                    </div>
                </div>

                <!-- Content Container -->
                <div class="debug-hero-content text-center max-w-5xl z-10 mt-4 mr-auto mb-8 ml-auto pr-6 pl-6 relative">
                    
                    ${this._renderHeadline()}

                    <!-- Subtext -->
                    <p class="debug-hero-subtitle [animation:fadeSlideIn_1s_ease-out_1.2s_both] animate-on-scroll leading-relaxed md:text-2xl text-xl text-gray-400 tracking-normal max-w-3xl mr-auto mb-12 ml-auto animate font-manrope font-medium">
                        ${subtitle}
                    </p>

                    <!-- CTA Button -->
                    <div class="debug-hero-cta-wrapper [animation:fadeSlideIn_1s_ease-out_1.4s_both] animate-on-scroll flex flex-col md:flex-row items-center justify-center gap-6 mb-12 animate">
                        ${this._renderCTA()}
                    </div>

                    <!-- Trusted By -->
                    <div class="debug-hero-trusted [animation:fadeSlideIn_1s_ease-out_1.6s_both] animate-on-scroll flex flex-col animate mt-16 mb-0 gap-x-4 gap-y-4 items-center">
                        <p class="text-xs text-gray-500 font-medium uppercase tracking-widest font-sans">${trustedByText}</p>
                    </div>
                </div>

                <!-- Logo Carousel Container -->
                <div class="debug-logo-carousel [animation:fadeSlideIn_1s_ease-out_1.8s_both] animate-on-scroll relative z-20 w-full max-w-6xl mx-auto px-6 pb-8 md:pb-12 animate">
                    <div id="logo-carousel-container"></div>
                </div>
            </section>
        `;
    }
}

// Export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = Hero;
} else {
    window.Hero = Hero;
}


