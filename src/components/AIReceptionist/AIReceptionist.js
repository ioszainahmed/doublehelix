class AIReceptionist extends Component {
    constructor(containerId, props = {}) {
        super(containerId, {
            badge: 'Ready to Deploy',
            headline: 'Never Miss a Call.',
            subheadline: 'Your front desk, powered by AI.',
            description: 'A fully deployed AI receptionist that answers every inbound call, qualifies leads, books appointments, and syncs to your CRM — 24/7, with no hold music.',
            stats: [
                { value: '< 2s', label: 'Avg. pickup time' },
                { value: '94%', label: 'Queries resolved' },
                { value: '24/7', label: 'Always on' }
            ],
            capabilities: [
                {
                    icon: 'phone',
                    title: 'Answers Instantly',
                    description: 'Picks up every call in under 2 seconds. No voicemail, no hold queue — your callers always get a live response.'
                },
                {
                    icon: 'calendar',
                    title: 'Books Appointments',
                    description: 'Integrates with your calendar to check availability and confirm bookings in real time, without human intervention.'
                },
                {
                    icon: 'zap',
                    title: 'Integrates Everywhere',
                    description: 'Connects to your CRM, Slack, email, and more via n8n. Every call logged, every lead captured, every action automated.'
                }
            ],
            cta: { label: 'Request a Demo', href: '#contact' },
            ...props
        });
    }

    _renderWaveform() {
        const bars = [4,7,11,15,10,18,13,8,16,11,7,5,9,13,17,12,8,15,10,6];
        return bars.map((h, i) => `
            <div class="rounded-full bg-gradient-to-t from-orange-600 to-orange-300 w-1" style="height:${h * 2.5}px;animation:wave-bar ${0.8 + (i % 4) * 0.15}s ease-in-out infinite;animation-delay:${i * 0.07}s"></div>
        `).join('');
    }

    _renderCapabilityCards() {
        const icons = {
            phone: `<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.78a16 16 0 0 0 5.7 5.7l.91-.91a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>`,
            calendar: `<rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line>`,
            zap: `<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>`
        };

        return this.props.capabilities.map((cap, i) => `
            <div class="group flex flex-col gap-5 bg-gradient-to-br from-white/5 to-white/0 rounded-[1.75rem] p-8 transition-all duration-300 hover:from-white/8 hover:shadow-[0_0_40px_-10px_rgba(212,81,10,0.15)]" style="position:relative;--border-gradient:linear-gradient(135deg,rgba(255,255,255,0.15),rgba(255,255,255,0),rgba(255,255,255,0.08));--border-radius-before:1.75rem">
                <div class="w-11 h-11 rounded-xl bg-gradient-to-br from-orange-500/20 to-orange-500/5 border border-orange-500/20 flex items-center justify-center group-hover:border-orange-500/40 transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fb923c" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                        ${icons[cap.icon]}
                    </svg>
                </div>
                <div>
                    <h4 class="text-base font-semibold text-white mb-2 font-manrope">${cap.title}</h4>
                    <p class="text-sm text-gray-500 leading-relaxed font-sans">${cap.description}</p>
                </div>
            </div>
        `).join('');
    }

    _renderStats() {
        return this.props.stats.map(stat => `
            <div class="flex flex-col gap-1">
                <span class="text-3xl font-semibold text-white tracking-tight font-geist">${stat.value}</span>
                <span class="text-xs text-gray-500 font-sans uppercase tracking-widest">${stat.label}</span>
            </div>
        `).join('');
    }

    render() {
        const { badge, headline, subheadline, description, cta } = this.props;

        return `
            <section id="ai-receptionist" class="debug-ai-receptionist z-20 w-full max-w-7xl mt-0 mr-auto mb-32 ml-auto px-6 relative">

                <!-- Section glow -->
                <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-orange-500/5 blur-[120px] rounded-full pointer-events-none"></div>

                <!-- Main card -->
                <div class="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-white/8 to-white/0 backdrop-blur-lg" style="position:relative;--border-gradient:linear-gradient(135deg,rgba(255,255,255,0.2),rgba(255,255,255,0),rgba(255,255,255,0.1));--border-radius-before:2.5rem">

                    <!-- Inner glow -->
                    <div class="absolute bottom-0 right-0 w-2/3 h-2/3 bg-gradient-to-tl from-orange-500/8 via-transparent to-transparent pointer-events-none"></div>

                    <div class="grid lg:grid-cols-2 gap-0">

                        <!-- Left: Copy -->
                        <div class="flex flex-col justify-center p-10 md:p-16 relative z-10">

                            <!-- Badge -->
                            <div class="inline-flex items-center gap-2 mb-8 self-start">
                                <span class="relative flex h-2 w-2">
                                    <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                    <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                                </span>
                                <span class="text-xs font-mono text-gray-400 tracking-widest uppercase">${badge}</span>
                            </div>

                            <h2 class="text-4xl md:text-5xl lg:text-6xl font-semibold text-white tracking-tight font-manrope leading-[1.05] mb-3">
                                ${headline}
                            </h2>
                            <h3 class="text-2xl md:text-3xl font-medium text-orange-400 tracking-tight font-manrope mb-8">
                                ${subheadline}
                            </h3>
                            <p class="text-gray-400 text-base md:text-lg leading-relaxed font-sans mb-10 max-w-md">
                                ${description}
                            </p>

                            <!-- Stats row -->
                            <div class="flex gap-10 mb-10 pb-10 border-b border-white/5">
                                ${this._renderStats()}
                            </div>

                            <!-- CTA -->
                            <div class="flex items-center gap-4">
                                <a href="${cta.href}" class="group inline-flex items-center gap-2 uppercase transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_30px_rgba(212,81,10,0.3)] text-xs font-medium text-white tracking-widest bg-[#d4510a] hover:bg-[#c04509] rounded-full pt-3.5 pr-8 pb-3.5 pl-8">
                                    <span>${cta.label}</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="transition-transform duration-300 group-hover:translate-x-0.5">
                                        <path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path>
                                    </svg>
                                </a>
                                <span class="text-xs text-gray-600 font-sans">No commitment required</span>
                            </div>
                        </div>

                        <!-- Right: Visual -->
                        <div class="flex flex-col justify-center p-10 md:p-16 relative z-10 lg:border-l border-white/5">

                            <!-- Waveform visualizer -->
                            <div class="flex items-center justify-center gap-1 mb-10 h-20">
                                <!-- Phone icon -->
                                <div class="flex items-center justify-center w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 mr-4 shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fb923c" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.78a16 16 0 0 0 5.7 5.7l.91-.91a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                    </svg>
                                </div>
                                <div class="flex items-center gap-1">
                                    ${this._renderWaveform()}
                                </div>
                            </div>

                            <!-- Live call card -->
                            <div class="bg-zinc-900/60 rounded-2xl p-5 border border-white/5 mb-4">
                                <div class="flex items-center justify-between mb-4">
                                    <div class="flex items-center gap-2.5">
                                        <div class="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)] animate-pulse"></div>
                                        <span class="text-xs font-semibold text-white">Live Call</span>
                                    </div>
                                    <span class="text-xs text-gray-600 font-mono">0:42</span>
                                </div>
                                <div class="space-y-2.5">
                                    <div class="flex items-start gap-2.5">
                                        <div class="w-5 h-5 rounded-full bg-orange-500/20 border border-orange-500/30 flex items-center justify-center shrink-0 mt-0.5">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 24 24" fill="currentColor" class="text-orange-400"><path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2M7.5 13A2.5 2.5 0 0 0 5 15.5A2.5 2.5 0 0 0 7.5 18A2.5 2.5 0 0 0 10 15.5A2.5 2.5 0 0 0 7.5 13m9 0A2.5 2.5 0 0 0 14 15.5a2.5 2.5 0 0 0 2.5 2.5a2.5 2.5 0 0 0 2.5-2.5A2.5 2.5 0 0 0 16.5 13z"/></svg>
                                        </div>
                                        <div class="bg-zinc-800/80 rounded-xl rounded-tl-sm px-3 py-2 max-w-[85%]">
                                            <p class="text-[11px] text-white leading-relaxed">Hi, I'd like to schedule a consultation for next week.</p>
                                        </div>
                                    </div>
                                    <div class="flex justify-end">
                                        <div class="bg-orange-500/90 rounded-xl rounded-tr-sm px-3 py-2 max-w-[85%]">
                                            <p class="text-[11px] text-white leading-relaxed">I have Tuesday at 2pm or Thursday at 10am available. Which works better for you?</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Capability cards -->
                            <div class="grid grid-cols-1 gap-3">
                                ${this._renderCapabilityCards()}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = AIReceptionist;
} else {
    window.AIReceptionist = AIReceptionist;
}
