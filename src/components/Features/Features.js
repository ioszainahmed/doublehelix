/**
 * Features Section Component
 * 
 * SOLID Principles:
 * - Single Responsibility: Orchestrates feature cards layout
 * - Open/Closed: Cards configurable via props
 * - Liskov Substitution: Uses Component interface
 * - Dependency Inversion: Depends on abstractions
 * 
 * Features:
 * - Main API Integration feature card
 * - Grid of smaller feature cards
 * - Glassmorphism effects
 */
class Features extends Component {
    constructor(containerId, props = {}) {
        super(containerId, {
            mainFeature: {
                title: 'High-Performance API Integration',
                description: [
                    'Connect to the decentralized web with DoubleHelix\'s unified API surface. Designed for speed, reliability, and infinite scale.',
                    'Our SDKs provide type-safe access to over 50+ protocols with a single line of code. Eliminate node maintenance and focus on building your application logic with 99.99% uptime guaranteed.',
                    'Instant global state access — stream events, query historical data, and broadcast transactions with sub-millisecond latency.'
                ]
            },
            cards: [
                {
                    title: 'Automation',
                    description: 'As a license holder requiring confidential assistance, please fill out a support request form or email us.',
                    link: { label: 'support@nebula.protocol', href: 'mailto:support@nebula.protocol' },
                    icon: 'folder'
                },
                {
                    title: 'Identity',
                    description: 'With your DoubleHelix purchase, you receive 12 months of technical support and direct repository access.',
                    icon: 'github'
                }
            ],
            ...props
        });
    }

    _renderMainFeatureCard() {
        const { mainFeature } = this.props;
        
        return `
            <div class="debug-feature-card group overflow-hidden bg-gradient-to-br from-white/10 to-white/0 z-10 rounded-[2.5rem] mb-6 relative backdrop-blur-lg" style="position: relative; --border-gradient: linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.1)); --border-radius-before: 2.5rem">
                <!-- Background Glow Effect -->
                <div class="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-tr from-blue-500/10 via-transparent to-transparent opacity-40 pointer-events-none"></div>
                
                <div class="grid lg:grid-cols-2 gap-0">
                    <!-- Text Content -->
                    <div class="md:p-16 flex flex-col z-10 pt-8 pr-8 pb-8 pl-8 relative justify-center">
                        <div class="w-12 h-12 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center mb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="text-white" fill="none" stroke="currentColor" stroke-width="2">
                                <path fill="#ffffff" d="M5.5 16V8a3 3 0 0 0-3-3a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 .5.5a3 3 0 0 0 3-3m13-8v8a3 3 0 0 0 3 3a.5.5 0 0 0 .5-.5v-13a.5.5 0 0 0-.5-.5a3 3 0 0 0-3 3" opacity=".5"></path>
                                <path fill="#ffffff" d="M11.5 19c-1.886 0-2.828 0-3.414-.586S7.5 16.886 7.5 15V9c0-1.886 0-2.828.586-3.414S9.614 5 11.5 5h1c1.886 0 2.828 0 3.414.586S16.5 7.114 16.5 9v6c0 1.886 0 2.828-.586 3.414S14.386 19 12.5 19z"></path>
                            </svg>
                        </div>
                        
                        <h2 class="leading-[1.1] md:text-4xl text-3xl font-semibold text-white tracking-tight font-manrope mt-6 mb-6">
                            ${mainFeature.title}
                        </h2>
                        
                        <div class="space-y-6 text-lg text-gray-400 font-sans leading-relaxed">
                            ${mainFeature.description.map(p => `<p>${p}</p>`).join('')}
                        </div>
                    </div>

                    <!-- API Status Visual -->
                    <div id="api-status-card" class="debug-api-status relative"></div>
                </div>
            </div>
        `;
    }

    _renderSmallCards() {
        const { cards } = this.props;
        
        return cards.map(card => `
            <div class="debug-feature-card group overflow-hidden flex flex-col hover:border-white/20 transition-colors duration-500 bg-gradient-to-br from-white/5 to-white/0 rounded-[2rem] backdrop-blur-lg" style="position: relative; --border-gradient: linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.1)); --border-radius-before: 2rem">
                <!-- Visual Header with floating widgets -->
                <div class="flex overflow-hidden bg-gradient-to-b from-white/[0.03] to-transparent h-64 relative items-center justify-center" style="mask-image: linear-gradient(180deg, transparent, black 0%, black 90%, transparent);">
                    <div class="overflow-hidden bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/[0.07] via-transparent to-transparent opacity-50 absolute inset-0">
                        <div class="[mask-image:radial-gradient(circle_at_center,black_40%,transparent_100%)] opacity-30 absolute inset-0" style="background-image: radial-gradient(rgba(255,255,255,0.2) 1px, transparent 1px); background-size: 20px 20px"></div>
                    </div>
                    
                    <!-- Visual composition based on card type -->
                    ${card.icon === 'folder' ? this._renderMailVisual() : this._renderGithubVisual()}
                </div>
                
                <!-- Card Content -->
                <div class="mt-auto pt-8 pr-10 pb-10 pl-10">
                    <div class="flex items-center gap-3 mb-5">
                        <h3 class="text-xl font-semibold text-white tracking-tight font-manrope">${card.title}</h3>
                    </div>
                    <p class="text-gray-400 text-base leading-relaxed mb-8 font-sans">
                        ${card.description}
                    </p>
                    ${card.link ? `
                        <a href="${card.link.href}" class="inline-flex items-center gap-2 text-orange-400 hover:text-white transition-colors text-sm font-medium font-sans pb-1 border-b border-transparent hover:border-orange-400/50">
                            ${card.link.label}
                        </a>
                    ` : ''}
                </div>
            </div>
        `).join('');
    }

    _renderMailVisual() {
        return `
            <div class="relative z-10 transform group-hover:scale-105 transition-transform duration-500 ease-out">
                <div class="w-28 h-24 relative">
                    <div class="absolute bottom-0 w-full h-20 bg-zinc-800 rounded-xl border border-white/10 shadow-2xl"></div>
                    <div class="absolute bottom-4 left-3 right-3 h-20 bg-zinc-700 rounded-lg border border-white/5 transform -rotate-3 origin-bottom-left shadow-md">
                        <div class="absolute top-3 left-3 right-8 h-1.5 bg-zinc-600 rounded-full w-1/2"></div>
                        <div class="absolute top-6 left-3 right-3 h-1.5 bg-zinc-600 rounded-full w-3/4"></div>
                    </div>
                    <div class="absolute bottom-0 w-full h-14 bg-gradient-to-b from-zinc-800/50 to-zinc-800 rounded-b-xl border-x border-b border-white/10">
                        <span class="absolute -top-8 left-1/2 -translate-x-1/2 w-6 h-6 bg-zinc-800 rotate-45 border-r border-b border-white/10"></span>
                    </div>
                    <div class="absolute -bottom-3 -right-3 w-10 h-10 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center shadow-lg">
                        <span class="text-orange-500 font-bold text-base font-manrope tracking-tighter">N</span>
                    </div>
                </div>
            </div>
        `;
    }

    _renderGithubVisual() {
        return `
            <div class="flex w-full h-full relative perspective-[1000px] items-center justify-center">
                <div class="absolute w-[260px] h-[260px] border border-dashed border-white/5 rounded-full flex items-center justify-center opacity-60">
                    <div class="absolute -top-3 bg-zinc-900 border border-white/10 px-2 py-0.5 rounded-full flex items-center gap-1.5 shadow-lg z-10">
                        <span class="relative flex h-1.5 w-1.5">
                            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span class="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                        </span>
                        <span class="text-[9px] font-mono text-zinc-400 tracking-tight">active</span>
                    </div>
                </div>
                <div class="absolute w-40 h-40 border border-dashed border-white/10 rounded-full"></div>
                <div class="relative z-20 w-16 h-16 bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-2xl border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.5)] flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="text-white/90">
                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                        <path d="M9 18c-4.51 2-5-2-7-2"></path>
                    </svg>
                </div>
            </div>
        `;
    }

    render() {
        return `
            <section class="debug-features z-20 w-full max-w-7xl mt-12 mr-auto mb-24 ml-auto pt-10 pr-2 pb-32 pl-2 relative">
                ${this._renderMainFeatureCard()}
                
                <!-- Bottom Grid Cards -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    ${this._renderSmallCards()}
                </div>
            </section>
        `;
    }

    onMount() {
        // Initialize the API status card sub-component
        if (typeof APIStatusCard !== 'undefined') {
            const apiStatusCard = new APIStatusCard('api-status-card');
            apiStatusCard.mount();
        }
    }
}

// Export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = Features;
} else {
    window.Features = Features;
}


