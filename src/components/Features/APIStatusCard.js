/**
 * APIStatusCard Component
 * 
 * SOLID Principles:
 * - Single Responsibility: Only renders API status visualization
 * - Open/Closed: Status items configurable via props
 * 
 * Features:
 * - Live status indicator with ping animation
 * - Code editor background
 * - Status rows with latency indicators
 */
class APIStatusCard extends Component {
    constructor(containerId, props = {}) {
        super(containerId, {
            statusItems: [
                {
                    name: 'REST Gateway',
                    region: 'us-east-1',
                    latency: '14ms',
                    status: 'active',
                    icon: 'server',
                    color: 'blue'
                },
                {
                    name: 'GraphQL',
                    region: 'global-edge',
                    latency: '28ms',
                    status: 'active',
                    icon: 'box',
                    color: 'purple'
                },
                {
                    name: 'Indexer Stream',
                    region: 'Syncing blocks',
                    status: 'syncing',
                    icon: 'loader',
                    color: 'orange'
                }
            ],
            ...props
        });
    }

    _renderCodeBackground() {
        return `
            <div class="absolute inset-0 p-8 text-xs md:text-sm leading-relaxed text-gray-500 select-none opacity-40 pointer-events-none">
                <div class="flex gap-1.5 mb-6 opacity-50">
                    <div class="w-3 h-3 rounded-full bg-zinc-700"></div>
                    <div class="w-3 h-3 rounded-full bg-zinc-700"></div>
                    <div class="w-3 h-3 rounded-full bg-zinc-700"></div>
                </div>
                <div class="font-mono space-y-1">
                    <p><span class="text-purple-400">import</span> { <span class="text-orange-200">DoubleHelix</span> } <span class="text-purple-400">from</span> <span class="text-emerald-400">"@nebula/api"</span>;</p>
                    <p class="h-4"></p>
                    <p><span class="text-blue-400">const</span> client = <span class="text-purple-400">new</span> <span class="text-orange-200">DoubleHelix</span>({</p>
                    <p class="pl-4">apiKey: <span class="text-emerald-400">"neb_live_8x92..."</span>,</p>
                    <p class="pl-4">region: <span class="text-emerald-400">"us-west"</span>,</p>
                    <p class="pl-4">retries: <span class="text-orange-200">3</span></p>
                    <p>});</p>
                </div>
            </div>
        `;
    }

    _getIconSVG(icon, color) {
        const icons = {
            server: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-server"><rect width="20" height="8" x="2" y="2" rx="2" ry="2"></rect><rect width="20" height="8" x="2" y="14" rx="2" ry="2"></rect><line x1="6" x2="6.01" y1="6" y2="6"></line><line x1="6" x2="6.01" y1="18" y2="18"></line></svg>`,
            box: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-box"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.29 8.7 12 12 20.71 8.7"></polyline><line x1="12" x2="12" y1="22" y2="12"></line></svg>`,
            loader: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="animate-spin"><path d="M21 12a9 9 0 1 1-6.219-8.56"></path></svg>`
        };
        return icons[icon] || icons.server;
    }

    _renderStatusRow(item, delay) {
        const colorMap = {
            blue: { bg: 'bg-blue-500/10', text: 'text-blue-400', border: 'border-blue-500/20' },
            purple: { bg: 'bg-purple-500/10', text: 'text-purple-400', border: 'border-purple-500/20' },
            orange: { bg: 'bg-orange-500/10', text: 'text-orange-400', border: 'border-orange-500/20' }
        };
        const colors = colorMap[item.color] || colorMap.blue;

        const statusBadge = item.status === 'syncing' 
            ? `<span class="text-emerald-400 text-[10px] font-normal bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">Active</span>`
            : `<div class="flex items-center gap-2">
                <span class="text-gray-400 text-xs font-mono">${item.latency}</span>
                <div class="flex gap-0.5">
                    <div class="w-1 h-3 bg-emerald-500 rounded-full"></div>
                    <div class="w-1 h-3 bg-emerald-500/50 rounded-full"></div>
                    <div class="w-1 h-3 bg-emerald-500/20 rounded-full"></div>
                </div>
               </div>`;

        return `
            <div class="p-3.5 flex items-center justify-between hover:bg-white/5 transition-colors cursor-default opacity-0" style="animation: fadeSlideIn 0.6s ease-out ${delay}s forwards">
                <div class="flex items-center gap-3">
                    <div class="w-8 h-8 rounded-lg ${colors.bg} flex items-center justify-center ${colors.text} shrink-0">
                        ${this._getIconSVG(item.icon, item.color)}
                    </div>
                    <div class="flex flex-col">
                        <span class="text-gray-200 font-normal">${item.name}</span>
                        <span class="text-gray-500 text-xs mt-0.5 font-normal">${item.region}</span>
                    </div>
                </div>
                ${statusBadge}
            </div>
        `;
    }

    render() {
        const { statusItems } = this.props;

        return `
            <div class="relative min-h-[500px] bg-zinc-950/30 border-l border-white/5 overflow-hidden font-geist">
                ${this._renderCodeBackground()}

                <!-- Floating Status Card -->
                <div class="-translate-x-1/2 -translate-y-1/2 z-10 w-[90%] max-w-md pt-6 pr-6 pb-6 pl-6 absolute top-1/2 left-1/2">
                    <div class="rounded-2xl bg-zinc-900/90 border border-white/10 backdrop-blur-xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.8)] overflow-hidden transition-all duration-700 ease-out group-hover:scale-[1.02]">
                        <!-- Header -->
                        <div class="p-5 border-b border-white/5 flex items-center justify-between bg-white/[0.02]">
                            <div>
                                <h4 class="text-white font-normal font-sans text-sm tracking-wide">API Status</h4>
                                <div class="flex items-center gap-2 mt-1">
                                    <span class="relative flex h-2 w-2 shrink-0">
                                        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                        <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                                    </span>
                                    <p class="text-emerald-500 text-xs font-normal tracking-wide type-writer">Systems Operational</p>
                                </div>
                            </div>
                            <div class="h-8 w-8 rounded-full bg-white/5 flex items-center justify-center text-white/20">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-activity"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
                            </div>
                        </div>
                        
                        <!-- Status Rows -->
                        <div class="divide-y divide-white/5 text-sm font-sans">
                            ${statusItems.map((item, idx) => 
                                this._renderStatusRow(item, 0.2 + (idx * 0.8))
                            ).join('')}
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

// Export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = APIStatusCard;
} else {
    window.APIStatusCard = APIStatusCard;
}

