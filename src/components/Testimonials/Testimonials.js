/**
 * Testimonials Section Component
 * 
 * SOLID Principles:
 * - Single Responsibility: Renders testimonial cards and carousel
 * - Open/Closed: Testimonials configurable via props
 * - Liskov Substitution: Follows Component interface
 * 
 * Features:
 * - Carousel with auto-rotation
 * - Grid layout for smaller cards
 * - Stats and social proof
 */
class Testimonials extends Component {
    constructor(containerId, props = {}) {
        super(containerId, {
            header: {
                badge: 'Testimonials',
                title: 'Proven results,',
                titleHighlight: 'delivered',
                subtitle: "See how leading protocols and dApps are scaling their infrastructure with DoubleHelix's unified layer."
            },
            carouselItems: [
                {
                    stat: '12',
                    statSuffix: 'x',
                    statColor: 'orange',
                    description: 'Increase in transaction throughput after migrating to DoubleHelix L2 rollups.',
                    quote: 'We needed a scalable infrastructure that didn\'t compromise on decentralization. DoubleHelix delivered exactly that. Our gas fees dropped by 90% overnight while maintaining instant finality.',
                    author: 'Elena Rodriguez',
                    role: 'Lead Protocol Eng, Uniswap',
                    company: 'uniswap'
                },
                {
                    stat: '99',
                    statSuffix: '%',
                    statColor: 'blue',
                    description: 'Uptime guaranteed with our decentralized sequencer network.',
                    quote: 'Migrating our DEX to DoubleHelix\'s rollup infrastructure was seamless. We\'ve seen zero downtime in 18 months of operation, even during peak network congestion.',
                    author: 'James Wu',
                    role: 'Core Dev, Arbitrum',
                    company: 'arbitrum'
                },
                {
                    stat: '50',
                    statSuffix: 'ms',
                    statColor: 'red',
                    description: 'Latency achieved for cross-chain message propagation.',
                    quote: 'The speed of DoubleHelix\'s bridge infrastructure is unmatched. We can now settle transactions across multiple rollups almost instantaneously, a game changer for our users.',
                    author: 'Sarah Jenkins',
                    role: 'PM, Optimism',
                    company: 'optimism'
                }
            ],
            gridCards: [
                {
                    stat: '14',
                    statSuffix: 'ms',
                    description: 'Global latency reduction on edge nodes.',
                    quote: 'From branding to execution, the DoubleHelix API suite is flawless. The latency on our oracle updates dropped significantly, giving us a competitive edge in high-frequency markets.',
                    author: 'David Chen',
                    role: 'CTO, Chainlink',
                    company: 'chainlink'
                }
            ],
            ...props
        });
    }

    _renderHeader() {
        const { header } = this.props;
        
        return `
            <div class="flex flex-col text-center mb-20 items-center">
                <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-500/20 bg-orange-500/5 mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" class="text-orange-500">
                        <path fill="currentColor" d="M18.483 16.767A8.5 8.5 0 0 1 8.118 7.081a1 1 0 0 1-.113.097c-.28.213-.63.292-1.33.45l-.635.144c-2.46.557-3.69.835-3.983 1.776c-.292.94.546 1.921 2.223 3.882l.434.507c.476.557.715.836.822 1.18c.107.345.071.717-.001 1.46l-.066.677c-.253 2.617-.38 3.925.386 4.506s1.918.052 4.22-1.009l.597-.274c.654-.302.981-.452 1.328-.452s.674.15 1.329.452l.595.274c2.303 1.06 3.455 1.59 4.22 1.01c.767-.582.64-1.89.387-4.507z"></path>
                        <path fill="currentColor" d="m9.153 5.408l-.328.588c-.36.646-.54.969-.82 1.182q.06-.045.113-.097a8.5 8.5 0 0 0 10.366 9.686l-.02-.19c-.071-.743-.107-1.115 0-1.46c.107-.344.345-.623.822-1.18l.434-.507c1.677-1.96 2.515-2.941 2.222-3.882c-.292-.941-1.522-1.22-3.982-1.776l-.636-.144c-.699-.158-1.049-.237-1.33-.45c-.28-.213-.46-.536-.82-1.182l-.327-.588C13.58 3.136 12.947 2 12 2s-1.58 1.136-2.847 3.408" opacity=".5"></path>
                    </svg>
                    <span class="text-xs font-semibold text-orange-200 uppercase tracking-widest font-sans">${header.badge}</span>
                </div>
                <h2 class="md:text-7xl text-5xl font-medium text-white tracking-tighter font-manrope mb-6">
                    ${header.title}
                    <span class="text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 to-zinc-500">${header.titleHighlight}</span>
                </h2>
                <p class="text-xl text-gray-400 font-sans max-w-2xl leading-relaxed">
                    ${header.subtitle}
                </p>
            </div>
        `;
    }

    _renderCarouselItem(item, delay) {
        const colorMap = {
            orange: 'text-orange-500 border-orange-500',
            blue: 'text-blue-500 border-blue-500',
            red: 'text-red-500 border-red-500'
        };
        const colorClass = colorMap[item.statColor] || colorMap.orange;
        
        return `
            <div class="debug-carousel-card carousel-card group flex flex-col hover:bg-zinc-900/60 transition-all duration-500 bg-zinc-900/40 rounded-[2.5rem] pt-10 pr-10 pb-10 pl-10 relative backdrop-blur-sm justify-between animate-carousel" style="position: relative; --border-gradient: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.1)); --border-radius-before: 2.5rem; animation-delay: ${delay}s; opacity: 0;">
                <div class="group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-${item.statColor}-500/5 via-transparent to-transparent opacity-0 rounded-[2.5rem] absolute inset-0"></div>

                <div class="relative z-10">
                    <div class="flex items-baseline gap-2 mb-4">
                        <h3 class="text-8xl font-semibold text-white tracking-tighter font-geist">
                            ${item.stat}<span class="${colorClass.split(' ')[0]}">${item.statSuffix}</span>
                        </h3>
                    </div>
                    <p class="text-xl font-medium text-zinc-300 border-l-2 ${colorClass.split(' ')[1]} pl-4 mb-12">
                        ${item.description}
                    </p>

                    <span class="iconify text-4xl text-zinc-700 mb-6" data-icon="solar:quote-up-bold-duotone"></span>

                    <blockquote class="text-lg text-gray-300 font-sans leading-relaxed mb-8">
                        "${item.quote}"
                    </blockquote>
                </div>

                <div class="relative z-10 flex items-center justify-between pt-8 border-t border-white/5">
                    <div class="flex items-center gap-4">
                        <div class="w-12 h-12 rounded-full bg-zinc-800 border border-white/10 overflow-hidden">
                            <img src="https://i.pravatar.cc/150?u=${item.company}" alt="Avatar" class="w-full h-full object-cover opacity-80 grayscale hover:grayscale-0 transition-all">
                        </div>
                        <div>
                            <h4 class="text-sm font-semibold text-white font-manrope">${item.author}</h4>
                            <p class="text-xs text-zinc-500 font-sans">${item.role}</p>
                        </div>
                    </div>
                    <div class="text-zinc-500 opacity-50 group-hover:opacity-100 transition-opacity">
                        <span class="iconify text-2xl" data-icon="simple-icons:${item.company}"></span>
                    </div>
                </div>
            </div>
        `;
    }

    _renderCarouselStyles() {
        return `
            <style>
                @keyframes carousel-fade {
                    0% { opacity: 0; z-index: 10; }
                    5% { opacity: 1; z-index: 20; }
                    28% { opacity: 1; z-index: 20; }
                    33% { opacity: 0; z-index: 10; }
                    100% { opacity: 0; z-index: 10; }
                }

                .animate-carousel {
                    animation: carousel-fade 15s infinite;
                    position: absolute;
                    inset: 0;
                    height: 100%;
                    width: 100%;
                }

                .carousel-container {
                    display: grid;
                    grid-template-columns: 1fr;
                    grid-template-rows: 1fr;
                    min-height: 600px;
                }

                @media (min-width: 1024px) {
                    .carousel-container { min-height: auto; }
                }

                .carousel-card { grid-area: 1 / 1 / 2 / 2; }
            </style>
        `;
    }

    render() {
        const { carouselItems, gridCards } = this.props;

        return `
            <section class="debug-testimonials w-full max-w-7xl z-20 mt-0 mr-auto mb-32 ml-auto pt-6 pr-6 pb-6 pl-6 relative">
                ${this._renderHeader()}
                ${this._renderCarouselStyles()}

                <!-- Grid Layout -->
                <div class="grid grid-cols-1 lg:grid-cols-12 mb-12 pt-4 pr-4 pb-4 pl-4 gap-6" style="position: relative; --border-gradient: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.1))">
                    
                    <!-- Left Column: Grid Cards -->
                    <div class="lg:col-span-7 flex flex-col gap-6">
                        <!-- Top Wide Card -->
                        <div class="debug-testimonial-card group hover:bg-zinc-900/60 transition-all duration-500 bg-zinc-900/40 rounded-[2.5rem] pt-10 pr-10 pb-10 pl-10 relative backdrop-blur-sm" style="position: relative; --border-gradient: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.1)); --border-radius-before: 2.5rem">
                            <div class="group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-bl from-blue-500/5 via-transparent to-transparent opacity-0 rounded-[2.5rem] absolute inset-0"></div>

                            <div class="relative z-10">
                                <div class="flex flex-col md:flex-row md:items-center gap-6 mb-8">
                                    <h3 class="text-6xl font-semibold text-white tracking-tighter font-geist">
                                        ${gridCards[0].stat}<span class="align-top text-xs font-normal text-zinc-500 tracking-tighter mt-2 ml-1">${gridCards[0].statSuffix}</span>
                                    </h3>
                                    <p class="text-lg font-medium text-zinc-300">${gridCards[0].description}</p>
                                </div>

                                <span class="iconify text-3xl text-zinc-700 mb-4" data-icon="solar:quote-up-bold-duotone"></span>

                                <blockquote class="text-base text-gray-300 font-sans leading-relaxed mb-8">
                                    "${gridCards[0].quote}"
                                </blockquote>

                                <div class="flex items-center justify-between">
                                    <div class="flex items-center gap-3">
                                        <div class="w-10 h-10 rounded-full bg-zinc-800 border border-white/10 overflow-hidden">
                                            <img src="https://i.pravatar.cc/150?u=${gridCards[0].company}" alt="Avatar" class="w-full h-full object-cover opacity-80 grayscale hover:grayscale-0 transition-all">
                                        </div>
                                        <div>
                                            <h4 class="text-sm font-semibold text-white font-manrope">${gridCards[0].author}</h4>
                                            <p class="text-xs text-zinc-500 font-sans">${gridCards[0].role}</p>
                                        </div>
                                    </div>
                                    <div class="text-zinc-500 opacity-50 group-hover:opacity-100 transition-opacity">
                                        <span class="iconify text-2xl" data-icon="simple-icons:${gridCards[0].company}"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Right Column: Carousel -->
                    <div class="lg:col-span-5 carousel-container relative">
                        ${carouselItems.map((item, idx) => 
                            this._renderCarouselItem(item, idx * 5)
                        ).join('')}
                    </div>
                </div>

                ${this._renderBottomStats()}
            </section>
        `;
    }

    _renderBottomStats() {
        return `
            <div class="flex flex-col md:flex-row items-center justify-between gap-6 px-4">
                <div class="flex items-center gap-4">
                    <div class="flex -space-x-3">
                        <img class="w-8 h-8 rounded-full border-2 border-zinc-950" src="https://i.pravatar.cc/100?img=1" alt="User">
                        <img class="w-8 h-8 rounded-full border-2 border-zinc-950" src="https://i.pravatar.cc/100?img=2" alt="User">
                        <img class="w-8 h-8 rounded-full border-2 border-zinc-950" src="https://i.pravatar.cc/100?img=3" alt="User">
                        <div class="w-8 h-8 rounded-full border-2 border-zinc-950 bg-zinc-800 flex items-center justify-center text-[10px] font-bold">
                            <span class="text-white font-semibold ml-1">4.9/5</span>
                        </div>
                    </div>
                    <p class="text-xs font-medium text-zinc-500 mt-0.5 px-6 py-1.5">from 2,000+ protocols</p>
                </div>

                <button class="group flex items-center gap-2 pl-6 pr-2 py-2 rounded-full bg-zinc-900 border border-white/10 hover:border-white/20 hover:bg-zinc-800 transition-all duration-300">
                    <span class="text-sm font-medium text-zinc-300 group-hover:text-white font-sans">Read all success stories</span>
                    <div class="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center transition-transform group-hover:rotate-45">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                            <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 18L18 6m0 0H9m9 0v9"></path>
                        </svg>
                    </div>
                </button>
            </div>
        `;
    }
}

// Export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = Testimonials;
} else {
    window.Testimonials = Testimonials;
}


