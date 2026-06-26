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
                line1: 'Answer',
                line2: 'Qualify',
                line3: 'Book &',
                highlight: 'Convert'
            },
            agentStats: {
                conversations: '1,247',
                change: '+34.2%',
                period: 'vs last month',
                resolved: '94.2%',
                avgReply: '1.3s',
                booked: '28'
            },
            ...props
        });
    }

    _renderPhoneMockup() {
        
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
                                <span class="text-sm font-semibold text-white">AI Receptionist</span>
                            </div>
                            <button class="flex text-white/70 bg-gradient-to-br from-white/10 to-white/0 w-8 h-8 rounded-full items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <circle cx="12" cy="12" r="1"></circle>
                                    <circle cx="19" cy="12" r="1"></circle>
                                    <circle cx="5" cy="12" r="1"></circle>
                                </svg>
                            </button>
                        </div>

                        <!-- Chat Messages -->
                        <div class="flex flex-col gap-3 mb-3">
                            <div class="flex items-start gap-2">
                                <div class="w-6 h-6 rounded-full bg-orange-500/20 border border-orange-500/30 flex items-center justify-center shrink-0 mt-0.5">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="currentColor" class="text-orange-400"><path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2M7.5 13A2.5 2.5 0 0 0 5 15.5A2.5 2.5 0 0 0 7.5 18A2.5 2.5 0 0 0 10 15.5A2.5 2.5 0 0 0 7.5 13m9 0A2.5 2.5 0 0 0 14 15.5a2.5 2.5 0 0 0 2.5 2.5a2.5 2.5 0 0 0 2.5-2.5A2.5 2.5 0 0 0 16.5 13z"/></svg>
                                </div>
                                <div class="bg-zinc-800/80 rounded-2xl rounded-tl-sm px-3 py-2 max-w-[75%]">
                                    <p class="text-[11px] text-white leading-relaxed">Hey 👋 I'm your AI receptionist. How can I help you today?</p>
                                </div>
                            </div>
                            <div class="flex justify-end">
                                <div class="bg-orange-500 rounded-2xl rounded-tr-sm px-3 py-2 max-w-[70%]">
                                    <p class="text-[11px] text-white leading-relaxed">I need help building a mobile app</p>
                                </div>
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
            <div class="flex flex-col gap-3 mb-3">
                <div class="flex items-start gap-2">
                    <div class="w-6 h-6 rounded-full bg-orange-500/20 border border-orange-500/30 flex items-center justify-center shrink-0 mt-0.5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="currentColor" class="text-orange-400"><path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2M7.5 13A2.5 2.5 0 0 0 5 15.5A2.5 2.5 0 0 0 7.5 18A2.5 2.5 0 0 0 10 15.5A2.5 2.5 0 0 0 7.5 13m9 0A2.5 2.5 0 0 0 14 15.5a2.5 2.5 0 0 0 2.5 2.5a2.5 2.5 0 0 0 2.5-2.5A2.5 2.5 0 0 0 16.5 13z"/></svg>
                    </div>
                    <div class="bg-zinc-800/80 rounded-2xl rounded-tl-sm px-3 py-2 max-w-[75%]">
                        <p class="text-[11px] text-white leading-relaxed">Great choice! What industry are you building for?</p>
                    </div>
                </div>
                <div class="flex justify-end">
                    <div class="bg-orange-500 rounded-2xl rounded-tr-sm px-3 py-2 max-w-[70%]">
                        <p class="text-[11px] text-white leading-relaxed">E-commerce, we need iOS & Android</p>
                    </div>
                </div>
                <div class="flex items-start gap-2">
                    <div class="w-6 h-6 rounded-full bg-orange-500/20 border border-orange-500/30 flex items-center justify-center shrink-0 mt-0.5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="currentColor" class="text-orange-400"><path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2M7.5 13A2.5 2.5 0 0 0 5 15.5A2.5 2.5 0 0 0 7.5 18A2.5 2.5 0 0 0 10 15.5A2.5 2.5 0 0 0 7.5 13m9 0A2.5 2.5 0 0 0 14 15.5a2.5 2.5 0 0 0 2.5 2.5a2.5 2.5 0 0 0 2.5-2.5A2.5 2.5 0 0 0 16.5 13z"/></svg>
                    </div>
                    <div class="bg-zinc-800/80 rounded-2xl rounded-tl-sm px-3 py-2 max-w-[75%]">
                        <p class="text-[11px] text-white leading-relaxed">Perfect, we've shipped 10+ e-commerce apps. I'll book you with our team 🚀</p>
                    </div>
                </div>
                <div class="flex items-start gap-2">
                    <div class="w-6 h-6 rounded-full bg-orange-500/20 border border-orange-500/30 flex items-center justify-center shrink-0 mt-0.5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="currentColor" class="text-orange-400"><path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2M7.5 13A2.5 2.5 0 0 0 5 15.5A2.5 2.5 0 0 0 7.5 18A2.5 2.5 0 0 0 10 15.5A2.5 2.5 0 0 0 7.5 13m9 0A2.5 2.5 0 0 0 14 15.5a2.5 2.5 0 0 0 2.5 2.5a2.5 2.5 0 0 0 2.5-2.5A2.5 2.5 0 0 0 16.5 13z"/></svg>
                    </div>
                    <div class="bg-zinc-800/80 rounded-2xl rounded-tl-sm px-3 py-2">
                        <div class="flex gap-1 items-center">
                            <div class="w-1.5 h-1.5 rounded-full bg-zinc-400 animate-bounce" style="animation-delay:0ms"></div>
                            <div class="w-1.5 h-1.5 rounded-full bg-zinc-400 animate-bounce" style="animation-delay:150ms"></div>
                            <div class="w-1.5 h-1.5 rounded-full bg-zinc-400 animate-bounce" style="animation-delay:300ms"></div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    _renderActionButtons() {
        return '';
    }

    _renderBottomSheet() {
        return `
            <div class="flex-1 bg-zinc-900/60 rounded-t-[2rem] -mx-6 px-5 pt-4 pb-4 backdrop-blur-md border-t border-white/5">
                <div class="flex flex-wrap gap-2 mb-3">
                    <button class="text-[10px] font-medium text-white bg-white/10 border border-white/10 rounded-full px-3 py-1.5 hover:bg-orange-500/20 hover:border-orange-500/30 transition-colors">Book a Call</button>
                    <button class="text-[10px] font-medium text-white bg-white/10 border border-white/10 rounded-full px-3 py-1.5 hover:bg-white/20 transition-colors">See Our Work</button>
                    <button class="text-[10px] font-medium text-white bg-white/10 border border-white/10 rounded-full px-3 py-1.5 hover:bg-white/20 transition-colors">Get a Quote</button>
                </div>
                <div class="flex items-center gap-2 bg-zinc-800/50 rounded-2xl px-3 py-2 border border-white/5">
                    <span class="text-[10px] text-zinc-500 flex-1">Type a message...</span>
                    <div class="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                    </div>
                </div>
            </div>
        `;
    }

    _renderSecondPhone() {
        const { agentStats } = this.props;
        return `
            <div class="lg:col-span-4 flex order-3 lg:py-0 pt-12 pb-12 relative justify-center">
                <!-- Glow Effect -->
                <div class="-translate-x-1/2 -translate-y-1/2 blur-[100px] pointer-events-none bg-purple-500/20 w-64 h-96 rounded-full absolute top-1/2 left-1/2"></div>

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
                        <div class="flex z-10 mb-6 relative items-center justify-between">
                            <button class="flex hover:bg-white/10 text-white/70 bg-gradient-to-br from-white/10 to-white/0 w-8 h-8 rounded-full items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="m12 19-7-7 7-7"></path>
                                    <path d="M19 12H5"></path>
                                </svg>
                            </button>
                            <div class="flex items-center gap-2">
                                <div class="w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.5)] animate-pulse"></div>
                                <span class="text-sm font-semibold text-white">Agent Dashboard</span>
                            </div>
                            <button class="flex text-white/70 bg-gradient-to-br from-white/10 to-white/0 w-8 h-8 rounded-full items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <circle cx="12" cy="12" r="1"></circle>
                                    <circle cx="19" cy="12" r="1"></circle>
                                    <circle cx="5" cy="12" r="1"></circle>
                                </svg>
                            </button>
                        </div>

                        <!-- Conversations Stat -->
                        <div class="text-center mb-4">
                            <p class="text-[10px] font-semibold text-zinc-500 uppercase tracking-widest mb-2">Conversations This Month</p>
                            <h4 class="text-5xl font-medium text-white tracking-tighter font-geist">${agentStats.conversations}</h4>
                            <div class="flex gap-1.5 mt-2 items-center justify-center">
                                <div class="flex items-center text-purple-400 bg-purple-500/10 px-1.5 py-0.5 rounded text-[10px] font-semibold border border-purple-500/20">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" class="mr-1">
                                        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                                        <polyline points="16 7 22 7 22 13"></polyline>
                                    </svg>
                                    ${agentStats.change}
                                </div>
                                <span class="text-xs text-zinc-500 font-medium">${agentStats.period}</span>
                            </div>
                        </div>

                        <!-- Mini Chart -->
                        <div class="w-full h-28 mb-4 relative">
                            <svg class="w-full h-full overflow-visible" viewBox="0 0 280 100" preserveAspectRatio="none">
                                <defs>
                                    <linearGradient id="chartGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
                                        <stop offset="0%" stop-color="#a855f7" stop-opacity="0.3"/>
                                        <stop offset="100%" stop-color="#a855f7" stop-opacity="0"/>
                                    </linearGradient>
                                    <pattern id="grid2" width="40" height="100" patternUnits="userSpaceOnUse">
                                        <line x1="0" y1="0" x2="0" y2="100" stroke="#3f3f46" stroke-width="1" stroke-dasharray="2 2" opacity="0.3"></line>
                                    </pattern>
                                </defs>
                                <rect width="100%" height="100%" fill="url(#grid2)"></rect>
                                <line x1="0" y1="100" x2="280" y2="100" stroke="#3f3f46" stroke-width="1" opacity="0.5"></line>
                                <path d="M0,70 C30,65 40,50 70,55 C100,60 110,40 140,35 C170,30 180,45 210,30 C240,20 260,15 280,18 V100 H0 Z" fill="url(#chartGradient2)"></path>
                                <path d="M0,70 C30,65 40,50 70,55 C100,60 110,40 140,35 C170,30 180,45 210,30 C240,20 260,15 280,18" fill="none" stroke="#a855f7" stroke-width="2" stroke-linecap="round"></path>
                                <g transform="translate(140, 35)">
                                    <circle r="4" fill="#18181b" stroke="#a855f7" stroke-width="2" class="animate-pulse"></circle>
                                    <line x1="0" y1="4" x2="0" y2="65" stroke="#a855f7" stroke-width="1" stroke-dasharray="2 2" opacity="0.5"></line>
                                </g>
                            </svg>
                        </div>

                        <!-- Stats Grid -->
                        <div class="grid grid-cols-3 gap-3 mb-6">
                            <div class="bg-gradient-to-br from-white/10 to-white/0 rounded-2xl p-3">
                                <span class="text-[10px] uppercase tracking-wider text-zinc-500 block mb-1">Resolved</span>
                                <span class="text-sm font-semibold text-white font-geist">${agentStats.resolved}</span>
                            </div>
                            <div class="bg-gradient-to-br from-white/10 to-white/0 rounded-2xl p-3">
                                <span class="text-[10px] uppercase tracking-wider text-zinc-500 block mb-1">Avg Reply</span>
                                <span class="text-sm font-semibold text-white font-geist">${agentStats.avgReply}</span>
                            </div>
                            <div class="bg-gradient-to-br from-white/10 to-white/0 rounded-2xl p-3">
                                <span class="text-[10px] uppercase tracking-wider text-zinc-500 block mb-1">Leads</span>
                                <span class="text-sm font-semibold text-white font-geist">${agentStats.booked}</span>
                            </div>
                        </div>

                        <!-- Recent Activity -->
                        <div class="flex-1 bg-zinc-900/60 rounded-t-[2rem] -mx-6 px-6 pt-5 pb-4 backdrop-blur-md border-t border-white/5">
                            <p class="text-[10px] font-bold text-zinc-500 uppercase tracking-wider mb-4">Recent Activity</p>
                            <div class="space-y-3">
                                <div class="flex items-center gap-3 bg-gradient-to-br from-white/10 to-white/0 rounded-xl px-3 py-3">
                                    <div class="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center border border-emerald-500/20">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                    </div>
                                    <div class="flex flex-col">
                                        <span class="text-xs font-semibold text-white">Lead Captured</span>
                                        <span class="text-[10px] text-emerald-500 font-medium flex items-center gap-1">
                                            <span class="w-1 h-1 rounded-full bg-emerald-500"></span> 2 min ago
                                        </span>
                                    </div>
                                </div>
                                <div class="flex items-center gap-3 bg-white/[0.02] border border-white/5 rounded-xl px-3 py-3">
                                    <div class="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center border border-blue-500/20">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" stroke-width="2.5"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                                    </div>
                                    <div class="flex flex-col">
                                        <span class="text-xs font-semibold text-white">Meeting Booked</span>
                                        <span class="text-[10px] text-blue-400 font-medium flex items-center gap-1">
                                            <span class="w-1 h-1 rounded-full bg-blue-400"></span> 8 min ago
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
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
                        AI AGENT
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
                    ${this._renderSecondPhone()}
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


