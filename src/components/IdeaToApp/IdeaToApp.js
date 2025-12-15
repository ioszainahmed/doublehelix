/**
 * IdeaToApp Section Component
 * 
 * SOLID Principles:
 * - Single Responsibility: Only handles the Idea to App section UI
 * - Open/Closed: Content configurable via props
 * - Liskov Substitution: Follows Component interface
 * - Dependency Inversion: Depends on Component abstraction
 * 
 * Features:
 * - 90-day journey visualization
 * - Animated phase cards
 * - Gradient accents and glassmorphism
 */
class IdeaToApp extends Component {
    /**
     * @param {string} containerId - Container element ID
     * @param {Object} props - Configuration
     */
    constructor(containerId, props = {}) {
        super(containerId, {
            badge: '90 DAY TRANSFORMATION',
            headline: {
                prefix: 'Idea to an App,',
                highlight: 'in 90 Days'
            },
            subtitle: 'From concept to App Store. A proven process that transforms your vision into a polished, market-ready mobile application.',
            phases: [
                {
                    number: '01',
                    title: 'Discovery & Strategy',
                    duration: 'Days 1-15',
                    description: 'Deep dive into your vision. We map user journeys, define core features, and architect a scalable foundation.',
                    icon: 'compass',
                    color: 'orange',
                    items: ['Requirements Analysis', 'User Research', 'Technical Architecture', 'Roadmap Planning']
                },
                {
                    number: '02',
                    title: 'Design & Prototype',
                    duration: 'Days 16-40',
                    description: 'Crafting pixel-perfect interfaces with intuitive UX. Interactive prototypes you can touch and feel.',
                    icon: 'palette',
                    color: 'purple',
                    items: ['UI/UX Design', 'Design System', 'Interactive Prototype', 'User Testing']
                },
                {
                    number: '03',
                    title: 'Development Sprint',
                    duration: 'Days 41-75',
                    description: 'Native code meets agile methodology. Weekly builds, continuous feedback, rapid iteration.',
                    icon: 'code',
                    color: 'blue',
                    items: ['Native Development', 'API Integration', 'Real-time Features', 'Performance Tuning']
                },
                {
                    number: '04',
                    title: 'Launch & Beyond',
                    duration: 'Days 76-90',
                    description: 'App Store submission, marketing assets, and launch strategy. Your app meets the world.',
                    icon: 'rocket',
                    color: 'emerald',
                    items: ['Quality Assurance', 'Store Submission', 'Launch Support', 'Growth Strategy']
                }
            ],
            ...props
        });
    }

    /**
     * Render the badge with icon
     * @private
     */
    _renderBadge() {
        return `
            <div class="[animation:fadeSlideIn_1s_ease-out_0.2s_both] animate-on-scroll inline-flex items-center gap-2 px-4 py-2 rounded-full border border-orange-500/30 bg-orange-500/5 backdrop-blur-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-orange-400">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                </svg>
                <span class="text-sm font-semibold tracking-wider text-orange-400 font-geist">${this.props.badge}</span>
            </div>
        `;
    }

    /**
     * Render the headline with gradient text
     * @private
     */
    _renderHeadline() {
        const { headline } = this.props;
        
        return `
            <h2 class="[animation:fadeSlideIn_1s_ease-out_0.4s_both] animate-on-scroll text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight font-manrope leading-[1.1]">
                <span class="block bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/60">${headline.prefix}</span>
                <span class="block mt-2 md:mt-4 bg-gradient-to-r from-orange-400 via-amber-400 to-orange-500 bg-clip-text text-transparent">${headline.highlight}</span>
            </h2>
        `;
    }

    /**
     * Render the subtitle
     * @private
     */
    _renderSubtitle() {
        return `
            <p class="[animation:fadeSlideIn_1s_ease-out_0.6s_both] animate-on-scroll text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-manrope leading-relaxed">
                ${this.props.subtitle}
            </p>
        `;
    }

    /**
     * Get icon SVG based on type
     * @private
     */
    _getIcon(iconType, colorClass) {
        const icons = {
            compass: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="${colorClass}">
                <circle cx="12" cy="12" r="10"/>
                <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>
            </svg>`,
            palette: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="${colorClass}">
                <circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/>
                <circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/>
                <circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/>
                <circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/>
                <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.555C21.965 6.012 17.461 2 12 2z"/>
            </svg>`,
            code: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="${colorClass}">
                <polyline points="16 18 22 12 16 6"/>
                <polyline points="8 6 2 12 8 18"/>
            </svg>`,
            rocket: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="${colorClass}">
                <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
                <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>
                <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/>
                <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
            </svg>`
        };
        return icons[iconType] || icons.compass;
    }

    /**
     * Get color classes based on color name
     * @private
     */
    _getColorClasses(color) {
        const colors = {
            orange: {
                icon: 'text-orange-400',
                border: 'border-orange-500/30',
                bg: 'bg-orange-500/10',
                glow: 'from-orange-500/20',
                number: 'text-orange-500/30',
                bullet: 'bg-orange-500',
                accent: 'from-orange-400 to-amber-400'
            },
            purple: {
                icon: 'text-purple-400',
                border: 'border-purple-500/30',
                bg: 'bg-purple-500/10',
                glow: 'from-purple-500/20',
                number: 'text-purple-500/30',
                bullet: 'bg-purple-500',
                accent: 'from-purple-400 to-pink-400'
            },
            blue: {
                icon: 'text-blue-400',
                border: 'border-blue-500/30',
                bg: 'bg-blue-500/10',
                glow: 'from-blue-500/20',
                number: 'text-blue-500/30',
                bullet: 'bg-blue-500',
                accent: 'from-blue-400 to-cyan-400'
            },
            emerald: {
                icon: 'text-emerald-400',
                border: 'border-emerald-500/30',
                bg: 'bg-emerald-500/10',
                glow: 'from-emerald-500/20',
                number: 'text-emerald-500/30',
                bullet: 'bg-emerald-500',
                accent: 'from-emerald-400 to-teal-400'
            }
        };
        return colors[color] || colors.orange;
    }

    /**
     * Render a single phase card
     * @private
     */
    _renderPhaseCard(phase, index) {
        const colors = this._getColorClasses(phase.color);
        const delay = 0.8 + (index * 0.15);
        
        return `
            <div class="[animation:fadeSlideIn_1s_ease-out_${delay}s_both] animate-on-scroll group relative">
                <!-- Card -->
                <div class="relative h-full overflow-hidden rounded-[2rem] bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-lg transition-all duration-500 hover:from-white/[0.12] hover:to-white/[0.04]" style="position: relative; --border-gradient: linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.08)); --border-radius-before: 2rem">
                    
                    <!-- Glow Effect on Hover -->
                    <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                        <div class="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-gradient-to-b ${colors.glow} to-transparent blur-2xl"></div>
                    </div>
                    
                    <!-- Content -->
                    <div class="relative z-10 p-8">
                        <!-- Phase Number & Duration -->
                        <div class="flex items-center justify-between mb-6">
                            <span class="text-6xl font-bold ${colors.number} font-manrope">${phase.number}</span>
                            <span class="text-xs font-semibold tracking-wider ${colors.icon} ${colors.bg} ${colors.border} border px-3 py-1.5 rounded-full font-geist">${phase.duration}</span>
                        </div>
                        
                        <!-- Icon & Title -->
                        <div class="flex items-center gap-4 mb-4">
                            <div class="w-12 h-12 rounded-2xl ${colors.bg} ${colors.border} border flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                                ${this._getIcon(phase.icon, colors.icon)}
                            </div>
                            <h3 class="text-xl font-semibold text-white font-manrope tracking-tight">${phase.title}</h3>
                        </div>
                        
                        <!-- Description -->
                        <p class="text-gray-400 text-sm leading-relaxed mb-6 font-sans">${phase.description}</p>
                        
                        <!-- Deliverables -->
                        <div class="space-y-2">
                            ${phase.items.map(item => `
                                <div class="flex items-center gap-3">
                                    <span class="w-1.5 h-1.5 rounded-full ${colors.bullet}"></span>
                                    <span class="text-sm text-gray-300 font-sans">${item}</span>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                    
                    <!-- Bottom Gradient Line -->
                    <div class="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${colors.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
            </div>
        `;
    }

    /**
     * Render the timeline connector
     * @private
     */
    _renderTimelineConnector() {
        return `
            <div class="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-y-1/2 z-0"></div>
        `;
    }

    /**
     * Render the bottom CTA section
     * @private
     */
    _renderCTA() {
        return `
            <div class="[animation:fadeSlideIn_1s_ease-out_1.4s_both] animate-on-scroll mt-16 text-center">
                <div class="inline-flex flex-col sm:flex-row items-center gap-4">
                    <div class="flex items-center gap-2 text-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-emerald-500">
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                            <polyline points="22 4 12 14.01 9 11.01"/>
                        </svg>
                        <span class="text-sm font-medium font-manrope">No hidden fees</span>
                    </div>
                    <span class="hidden sm:block w-px h-4 bg-white/20"></span>
                    <div class="flex items-center gap-2 text-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-emerald-500">
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                            <polyline points="22 4 12 14.01 9 11.01"/>
                        </svg>
                        <span class="text-sm font-medium font-manrope">Weekly progress updates</span>
                    </div>
                    <span class="hidden sm:block w-px h-4 bg-white/20"></span>
                    <div class="flex items-center gap-2 text-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-emerald-500">
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                            <polyline points="22 4 12 14.01 9 11.01"/>
                        </svg>
                        <span class="text-sm font-medium font-manrope">Full source code ownership</span>
                    </div>
                </div>
            </div>
        `;
    }

    render() {
        return `
            <section id="idea-to-app" class="debug-idea-to-app relative py-20 md:py-32 overflow-hidden">
                
                <!-- Background Elements -->
                <div class="absolute inset-0 -z-10">
                    <div class="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-orange-500/5 via-transparent to-transparent rounded-full blur-3xl"></div>
                    <div class="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-purple-500/5 via-transparent to-transparent rounded-full blur-3xl"></div>
                </div>

                <!-- Large Background Text -->
                <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full select-none pointer-events-none z-0 overflow-hidden">
                    <h2 class="text-[10vw] leading-none font-bold text-white/[0.02] text-center whitespace-nowrap font-manrope tracking-tighter">
                        90 DAYS
                    </h2>
                </div>
                
                <div class="max-w-7xl mx-auto px-6 relative z-10">
                    <!-- Header -->
                    <div class="text-center mb-16 md:mb-24">
                        <!-- Badge -->
                        <div class="mb-8">
                            ${this._renderBadge()}
                        </div>
                        
                        <!-- Headline -->
                        <div class="mb-6">
                            ${this._renderHeadline()}
                        </div>
                        
                        <!-- Subtitle -->
                        ${this._renderSubtitle()}
                    </div>
                    
                    <!-- Phase Cards Grid -->
                    <div class="relative">
                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            ${this.props.phases.map((phase, index) => this._renderPhaseCard(phase, index)).join('')}
                        </div>
                    </div>
                    
                    <!-- Bottom CTA -->
                    ${this._renderCTA()}
                </div>
            </section>
        `;
    }
}

// Export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = IdeaToApp;
} else {
    window.IdeaToApp = IdeaToApp;
}

