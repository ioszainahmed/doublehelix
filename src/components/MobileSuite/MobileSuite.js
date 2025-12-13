/**
 * MobileSuite Section Component
 * 
 * SOLID Principles:
 * - Single Responsibility: Renders mobile showcase section
 * - Open/Closed: Phone mockup data configurable
 * - Liskov Substitution: Follows Component interface
 * 
 * Features:
 * - Phone mockup with Dynamic Island
 * - Interactive chart visualization
 * - Side info cards
 * - Large background typography
 */
class MobileSuite extends Component {
    constructor(containerId, props = {}) {
        super(containerId, {
            sectionTitle: {
                line1: 'Offering',
                line2: 'Unmatched',
                line3: 'Control &',
                highlight: 'Insight'
            },
            phoneData: {
                balance: '$8,245.32',
                change: '+12.4%',
                period: 'this week'
            },
            stats: {
                uptime: '99.99%',
                latency: '14ms',
                requests: '2.4M'
            },
            ...props
        });
    }

    _renderPhoneMockup() {
        const { phoneData } = this.props;
        
        return `
            <div class="lg:col-span-4 flex order-1 lg:order-2 lg:py-0 pt-12 pb-12 relative justify-center">
                <!-- Glow Effect -->
                <div class="-translate-x-1/2 -translate-y-1/2 blur-[100px] pointer-events-none bg-orange-500/20 w-64 h-96 rounded-full absolute top-1/2 left-1/2"></div>

                <!-- Phone Frame -->
                <div class="debug-phone-mockup border-[1px] overflow-hidden bg-zinc-950 w-[330px] h-[660px] z-10 border-zinc-800 rounded-[3.5rem] ring-white/10 ring-1 relative shadow-[0_5.7px_8.6px_rgba(0,_0,_0,_0.07),_0_13.7px_10.9px_rgba(0,_0,_0,_0.099),_0_25.7px_20.5px_rgba(0,_0,_0,_0.123),_0_45.8px_36.6px_rgba(0,_0,_0,_0.147),_0_85.8px_68.5px_rgba(0,_0,_0,_0.176),_0_205px_163.4px_rgba(0,_0,_0,_0.246)]">
                    
                    <!-- Dynamic Island -->
                    <div class="absolute top-3 left-1/2 -translate-x-1/2 h-[32px] w-[110px] bg-black rounded-full z-50 flex items-center justify-between px-3 transition-all duration-500 hover:w-[140px] group/island">
                        <div class="flex gap-2 h-full items-center opacity-0 group-hover/island:opacity-100 transition-opacity duration-300">
                            <div class="w-1 h-1 rounded-full bg-red-500/80 animate-pulse"></div>
                        </div>
                        <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                            <div class="w-4 h-4 rounded-full bg-zinc-900/80 backdrop-blur-md border border-white/5"></div>
                        </div>
                        <div class="flex gap-2 h-full items-center opacity-0 group-hover/island:opacity-100 transition-opacity duration-300 ml-auto">
                            <div class="w-1 h-1 rounded-full bg-green-500/80"></div>
                        </div>
                    </div>

                    <!-- Status Bar -->
                    <div class="absolute top-4 left-0 w-full px-8 flex justify-between items-center z-40 text-[10px] font-semibold text-white/90 tracking-wide">
                        <span>9:41</span>
                        <div class="flex gap-1.5 items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M3.172 5.172C2 6.343 2 8.229 2 12s0 5.657 1.172 6.828S6.229 20 10 20h1.5c3.771 0 5.657 0 6.828-1.172S19.5 15.771 19.5 12s0-5.657-1.172-6.828S15.271 4 11.5 4H10C6.229 4 4.343 4 3.172 5.172" opacity=".5"></path>
                                <path fill="currentColor" d="M19.491 14c.009-.6.009-1.264.009-2c0-.735 0-1.4-.009-2H20c.942 0 1.414 0 1.707.293S22 11.057 22 12s0 1.414-.293 1.707S20.942 14 20 14z"></path>
                            </svg>
                        </div>
                    </div>

                    <!-- App Content -->
                    <div class="flex flex-col z-10 bg-gradient-to-b from-zinc-900 to-black w-full h-full pt-16 pr-6 pl-6 relative">
                        
                        <!-- App Header -->
                        <div class="flex z-10 mb-8 relative items-center justify-between">
                            <button class="flex hover:bg-white/10 text-white/70 bg-gradient-to-br from-white/10 to-white/0 w-8 h-8 rounded-full items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="m12 19-7-7 7-7"></path>
                                    <path d="M19 12H5"></path>
                                </svg>
                            </button>
                            <div class="flex items-center gap-2">
                                <div class="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)] animate-pulse"></div>
                                <span class="text-sm font-semibold text-white">DoubleHelix Core</span>
                            </div>
                            <button class="flex text-white/70 bg-gradient-to-br from-white/10 to-white/0 w-8 h-8 rounded-full items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <circle cx="12" cy="12" r="1"></circle>
                                    <circle cx="19" cy="12" r="1"></circle>
                                    <circle cx="5" cy="12" r="1"></circle>
                                </svg>
                            </button>
                        </div>

                        <!-- Balance -->
                        <div class="text-center mb-4">
                            <p class="text-[10px] font-semibold text-zinc-500 uppercase tracking-widest mb-2">Total Volume</p>
                            <h4 class="text-5xl font-medium text-white tracking-tighter font-geist">${phoneData.balance}</h4>
                            <div class="flex gap-1.5 mt-2 items-center justify-center">
                                <div class="flex items-center text-emerald-500 bg-emerald-500/10 px-1.5 py-0.5 rounded text-[10px] font-semibold border border-emerald-500/20">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" class="mr-1">
                                        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                                        <polyline points="16 7 22 7 22 13"></polyline>
                                    </svg>
                                    ${phoneData.change}
                                </div>
                                <span class="text-xs text-zinc-500 font-medium">${phoneData.period}</span>
                            </div>
                        </div>

                        ${this._renderChart()}
                        ${this._renderActionButtons()}
                        ${this._renderBottomSheet()}
                    </div>
                </div>
            </div>
        `;
    }

    _renderChart() {
        return `
            <div class="w-full h-40 mb-6 relative">
                <svg class="w-full h-full overflow-visible" viewBox="0 0 280 120" preserveAspectRatio="none">
                    <defs>
                        <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stop-color="#f97316" stop-opacity="0.3"/>
                            <stop offset="100%" stop-color="#f97316" stop-opacity="0"/>
                        </linearGradient>
                        <pattern id="grid" width="40" height="120" patternUnits="userSpaceOnUse">
                            <line x1="0" y1="0" x2="0" y2="120" stroke="#3f3f46" stroke-width="1" stroke-dasharray="2 2" opacity="0.3"></line>
                        </pattern>
                    </defs>
                    
                    <rect width="100%" height="100%" fill="url(#grid)"></rect>
                    <line x1="0" y1="120" x2="280" y2="120" stroke="#3f3f46" stroke-width="1" opacity="0.5"></line>
                    <path d="M0,80 C20,80 30,60 50,65 C70,70 80,90 100,85 C120,80 130,40 150,45 C170,50 180,70 200,60 C220,50 230,20 250,25 C265,28 275,10 280,15 V120 H0 Z" fill="url(#chartGradient)"></path>
                    <path d="M0,80 C20,80 30,60 50,65 C70,70 80,90 100,85 C120,80 130,40 150,45 C170,50 180,70 200,60 C220,50 230,20 250,25 C265,28 275,10 280,15" fill="none" stroke="#f97316" stroke-width="2" stroke-linecap="round"></path>
                    <g transform="translate(150, 45)">
                        <circle r="4" fill="#18181b" stroke="#f97316" stroke-width="2" class="animate-pulse"></circle>
                        <line x1="0" y1="4" x2="0" y2="75" stroke="#f97316" stroke-width="1" stroke-dasharray="2 2" opacity="0.5"></line>
                    </g>
                </svg>
                <div class="flex pt-2 pr-2 pl-2 justify-between">
                    <button class="text-[9px] font-semibold text-zinc-600 hover:text-white">1H</button>
                    <button class="text-[9px] font-semibold text-zinc-600 hover:text-white">1D</button>
                    <button class="text-[9px] font-semibold text-orange-500 bg-orange-500/10 rounded px-2 py-0.5 border border-orange-500/20">1W</button>
                    <button class="text-[9px] font-semibold text-zinc-600 hover:text-white">1M</button>
                    <button class="text-[9px] font-semibold text-zinc-600 hover:text-white">1Y</button>
                </div>
            </div>
        `;
    }

    _renderActionButtons() {
        return `
            <div class="grid grid-cols-3 mt-4 mb-8 gap-3">
                <button class="flex flex-col gap-2 group items-center">
                    <div class="flex shadow-[0_0_20px_-5px_rgba(249,115,22,0.4)] text-white bg-gradient-to-b from-orange-400 to-orange-600 w-12 h-12 rounded-xl items-center justify-center border border-white/10">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="#ffffff">
                            <path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10" opacity=".5"></path>
                            <path d="M8.47 13.53a.75.75 0 1 1 1.06-1.06l1.72 1.72V8a.75.75 0 0 1 1.5 0v6.19l1.72-1.72a.75.75 0 1 1 1.06 1.06l-3 3a.75.75 0 0 1-1.06 0z"></path>
                        </svg>
                    </div>
                    <span class="text-[10px] font-medium text-zinc-400">Deposit</span>
                </button>
                <button class="flex flex-col items-center gap-2 group">
                    <div class="flex text-white bg-gradient-to-br from-white/10 to-white/0 w-12 h-12 rounded-xl items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="#ffffff">
                            <path d="M10.875 4a.75.75 0 0 0-1.272-.538l-4.125 4a.75.75 0 0 0 0 1.076l4.125 4A.75.75 0 0 0 10.875 12V8.75H18a.75.75 0 0 0 0-1.5h-7.125z"></path>
                            <path d="M13.125 12a.75.75 0 0 1 1.272-.538l4.125 4a.75.75 0 0 1 0 1.076l-4.125 4A.75.75 0 0 1 13.125 20v-3.25H6a.75.75 0 0 1 0-1.5h7.125z" opacity=".5"></path>
                        </svg>
                    </div>
                    <span class="text-[10px] font-medium text-zinc-400">Swap</span>
                </button>
                <button class="flex flex-col items-center gap-2 group">
                    <div class="flex text-white bg-gradient-to-br from-white/10 to-white/0 w-12 h-12 rounded-xl items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="#ffffff">
                            <path fill-rule="evenodd" d="M10 22h4c3.771 0 5.657 0 6.828-1.172S22 17.771 22 14v-.437c0-.873 0-1.529-.043-2.063h-4.052c-1.097 0-2.067 0-2.848-.105c-.847-.114-1.694-.375-2.385-1.066c-.692-.692-.953-1.539-1.067-2.386c-.105-.781-.105-1.75-.105-2.848l.01-2.834q0-.124.02-.244C11.121 2 10.636 2 10.03 2C6.239 2 4.343 2 3.172 3.172C2 4.343 2 6.229 2 10v4c0 3.771 0 5.657 1.172 6.828S6.229 22 10 22" clip-rule="evenodd" opacity=".5"></path>
                            <path d="M7.987 12.953a.75.75 0 0 1 1.026 0l2 1.875a.75.75 0 0 1-1.026 1.094l-.737-.69V18.5a.75.75 0 0 1-1.5 0v-3.269l-.737.691a.75.75 0 0 1-1.026-1.094z"></path>
                        </svg>
                    </div>
                    <span class="text-[10px] font-medium text-zinc-400">Send</span>
                </button>
            </div>
        `;
    }

    _renderBottomSheet() {
        return `
            <div class="flex-1 bg-zinc-900/60 rounded-t-[2rem] -mx-6 px-6 pt-6 pb-4 backdrop-blur-md border-t border-white/5">
                <div class="flex items-center justify-between mb-4">
                    <p class="text-[10px] font-bold text-zinc-500 uppercase tracking-wider">Active Nodes</p>
                </div>
                <div class="space-y-3">
                    <div class="flex hover:bg-white/[0.04] cursor-pointer group bg-gradient-to-br from-white/10 to-white/0 rounded-xl px-3 py-3 items-center justify-between">
                        <div class="flex items-center gap-3">
                            <div class="w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center border border-indigo-500/20">
                                <svg width="1em" height="1em" viewBox="0 0 24 24" class="text-indigo-400">
                                    <path fill="currentColor" d="M11.944 17.97L4.58 13.62L11.943 24l7.37-10.38l-7.372 4.35zM12.056 0L4.69 12.223l7.365 4.354l7.365-4.35z"></path>
                                </svg>
                            </div>
                            <div class="flex flex-col">
                                <span class="text-xs font-semibold text-white">Ethereum Mainnet</span>
                                <span class="text-[10px] text-emerald-500 font-medium flex items-center gap-1">
                                    <span class="w-1 h-1 rounded-full bg-emerald-500"></span> Synced
                                </span>
                            </div>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-zinc-600">
                            <path d="m9 18 6-6-6-6"></path>
                        </svg>
                    </div>
                    
                    <div class="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/5 cursor-pointer group">
                        <div class="flex items-center gap-3">
                            <div class="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center border border-purple-500/20">
                                <svg width="1em" height="1em" viewBox="0 0 24 24" class="text-purple-400">
                                    <path fill="currentColor" d="m23.876 18.031l-3.962 4.14a.9.9 0 0 1-.306.21a.9.9 0 0 1-.367.074H.46a.47.47 0 0 1-.252-.073a.45.45 0 0 1-.17-.196a.44.44 0 0 1-.031-.255a.44.44 0 0 1 .117-.23l3.965-4.139a.9.9 0 0 1 .305-.21a.9.9 0 0 1 .366-.075h18.78a.47.47 0 0 1 .252.074a.45.45 0 0 1 .17.196a.44.44 0 0 1 .031.255a.44.44 0 0 1-.117.23z"></path>
                                </svg>
                            </div>
                            <div class="flex flex-col">
                                <span class="text-xs font-semibold text-white">Solana RPC</span>
                                <span class="text-[10px] text-orange-400 font-medium flex items-center gap-1">
                                    <span class="w-1 h-1 rounded-full bg-orange-400 animate-pulse"></span> Connecting...
                                </span>
                            </div>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-zinc-600">
                            <path d="m9 18 6-6-6-6"></path>
                        </svg>
                    </div>
                </div>
            </div>
        `;
    }

    _renderSideCards() {
        const { stats } = this.props;
        
        return `
            <div class="lg:col-span-4 flex flex-col gap-5 lg:items-end order-3 justify-center relative z-10">
                <!-- Stats Card -->
                <div class="debug-stats-card text-left bg-gradient-to-br from-white/10 to-white/0 w-full max-w-sm rounded-3xl pt-5 pr-5 pb-5 pl-5 shadow-2xl backdrop-blur-xl" style="position: relative; --border-gradient: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.05)); --border-radius-before: 24px">
                    <div class="flex items-center gap-4 mb-6">
                        <div class="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 p-0.5 shadow-lg shadow-orange-500/20">
                            <div class="w-full h-full rounded-full bg-black flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#f97316">
                                    <path d="M8.422 20.618C10.178 21.54 11.056 22 12 22V12L2.638 7.073l-.04.067C2 8.154 2 9.417 2 11.942v.117c0 2.524 0 3.787.597 4.801c.598 1.015 1.674 1.58 3.825 2.709z"></path>
                                    <path d="m17.577 4.432l-2-1.05C13.822 2.461 12.944 2 12 2c-.945 0-1.822.46-3.578 1.382l-2 1.05C4.318 5.536 3.242 6.1 2.638 7.072L12 12l9.362-4.927c-.606-.973-1.68-1.537-3.785-2.641" opacity=".7"></path>
                                    <path d="m21.403 7.14l-.041-.067L12 12v10c.944 0 1.822-.46 3.578-1.382l2-1.05c2.151-1.129 3.227-1.693 3.825-2.708c.597-1.014.597-2.277.597-4.8v-.117c0-2.525 0-3.788-.597-4.802" opacity=".5"></path>
                                </svg>
                            </div>
                        </div>
                        <div>
                            <h3 class="text-lg font-semibold text-white tracking-tight font-manrope">Atlas Network</h3>
                            <p class="text-xs font-medium text-zinc-400">Production · US-East</p>
                        </div>
                        <div class="ml-auto">
                            <div class="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)] animate-pulse"></div>
                        </div>
                    </div>

                    <div class="flex justify-between gap-2 mb-5">
                        <div class="flex flex-col flex-1 bg-gradient-to-br from-white/10 to-white/0 rounded-2xl pt-3 pr-3 pb-3 pl-3">
                            <span class="text-[10px] uppercase tracking-wider text-zinc-500 mb-1">Uptime</span>
                            <span class="text-sm font-semibold text-white font-geist">${stats.uptime}</span>
                        </div>
                        <div class="flex flex-col flex-1 bg-gradient-to-br from-white/10 to-white/0 rounded-2xl pt-3 pr-3 pb-3 pl-3">
                            <span class="text-[10px] uppercase tracking-wider text-zinc-500 mb-1">Latency</span>
                            <span class="text-sm font-semibold text-white font-geist">${stats.latency}</span>
                        </div>
                        <div class="flex flex-col flex-1 bg-gradient-to-br from-white/10 to-white/0 rounded-2xl pt-3 pr-3 pb-3 pl-3">
                            <span class="text-[10px] uppercase tracking-wider text-zinc-500 mb-1">Reqs</span>
                            <span class="text-sm font-semibold text-white font-geist">${stats.requests}</span>
                        </div>
                    </div>

                    <button class="hover:bg-white/10 transition-colors flex gap-2 group text-xs font-medium text-white bg-gradient-to-br from-white/10 to-white/0 w-full rounded-full pt-2.5 pb-2.5 items-center justify-center">
                        <span>View Analytics</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="group-hover:translate-x-0.5 transition-transform">
                            <path d="M5 12h14"></path>
                            <path d="m12 5 7 7-7 7"></path>
                        </svg>
                    </button>
                </div>
            </div>
        `;
    }

    render() {
        const { sectionTitle } = this.props;
        
        return `
            <section class="debug-mobile-suite z-20 overflow-hidden w-full max-w-7xl mt-0 mr-auto mb-32 ml-auto pt-20 pb-20 relative">
                
                <!-- Background Large Typography -->
                <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full select-none pointer-events-none z-0">
                    <h2 class="text-[12vw] leading-none font-bold text-white/[0.03] text-center whitespace-nowrap font-manrope tracking-tighter">
                        MOBILE SUITE
                    </h2>
                </div>

                <div class="grid lg:grid-cols-12 gap-8 items-center relative z-10 px-6">
                    
                    <!-- Left Column: Text Content -->
                    <div class="lg:col-span-4 flex flex-col justify-center order-2 lg:order-1">
                        <div class="flex items-center gap-2 mb-6 opacity-60">
                            <span class="w-2 h-2 rounded-full bg-orange-500"></span>
                            <span class="text-xs font-mono text-gray-400 tracking-widest">02/04</span>
                        </div>
                        
                        <h3 class="leading-[1.1] uppercase md:text-7xl text-4xl font-normal text-white tracking-tight font-manrope mb-8">
                            ${sectionTitle.line1}
                            ${sectionTitle.line2}
                            <span class="text-gray-500">${sectionTitle.line3}</span>
                            <span class="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-orange-200">${sectionTitle.highlight}</span>
                        </h3>

                        <div class="hidden lg:block h-px w-24 bg-white/10 mt-4"></div>
                    </div>

                    ${this._renderPhoneMockup()}
                    ${this._renderSideCards()}
                </div>
            </section>
        `;
    }
}

// Export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = MobileSuite;
} else {
    window.MobileSuite = MobileSuite;
}


