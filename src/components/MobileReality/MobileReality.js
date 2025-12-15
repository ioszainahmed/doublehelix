/**
 * Mobile Reality Section Component
 * 
 * SOLID Principles:
 * - Single Responsibility: Only handles mobile reality section UI
 * - Open/Closed: Content configurable via props
 * - Liskov Substitution: Follows Component interface
 * - Dependency Inversion: Depends on Component abstraction
 * 
 * Features:
 * - Animated badge with icon
 * - Gradient text headline
 * - Fade-in scroll animations
 */
class MobileReality extends Component {
    /**
     * @param {string} containerId - Container element ID
     * @param {Object} props - Configuration
     */
    constructor(containerId, props = {}) {
        super(containerId, {
            badge: 'THE MOBILE REALITY',
            headline: {
                prefix: 'Your Customers',
                secondLine: 'Are In',
                highlight: 'Mobile',
                suffix: 'Apps'
            },
            subtitle: 'Users spend 90% of their smartphone time in native apps',
            superscript: '[1]',
            tagline: "It's time you met them there.",
            ...props
        });
    }

    /**
     * Render the badge with icon
     * @private
     */
    _renderBadge() {
        return `
            <div class="[animation:fadeSlideIn_0.5s_ease-out_0.2s_both] animate-on-scroll inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/5 backdrop-blur-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-purple-400">
                    <rect width="14" height="20" x="5" y="2" rx="2" ry="2"/>
                    <path d="M12 18h.01"/>
                </svg>
                <span class="text-sm font-semibold tracking-wider text-purple-400 font-geist">${this.props.badge}</span>
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
            <h2 class="[animation:fadeSlideIn_0.5s_ease-out_0.4s_both] animate-on-scroll text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight font-manrope leading-[1.1]">
                <span class="block bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/60">${headline.prefix}</span>
                <span class="block mt-2 md:mt-4">
                    <span class="bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/60">${headline.secondLine} </span>
                    <span class="bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">${headline.highlight}</span>
                    <span class="bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/60"> ${headline.suffix}</span>
                </span>
            </h2>
        `;
    }

    /**
     * Render the subtitle
     * @private
     */
    _renderSubtitle() {
        return `
            <div class="[animation:fadeSlideIn_0.5s_ease-out_0.6s_both] animate-on-scroll text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-manrope">
                <p>${this.props.subtitle}<sup class="text-gray-500 ml-0.5">${this.props.superscript}</sup>.</p>
                <p class="mt-1 pb-6">${this.props.tagline}</p>
            </div>
        `;
    }

    render() {
        return `
            <section id="mobile-reality" class="debug-mobile-reality relative py-8 md:py-12 lg:py-16 overflow-hidden">
                
                <!-- Content Container with Border -->
                <div class="max-w-6xl mx-auto px-6">
                    <div class="debug-mobile-reality-container relative rounded-[2.5rem] bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-lg py-8 md:py-10 px-8 md:px-12 overflow-hidden" style="position: relative; --border-gradient: linear-gradient(135deg, rgba(168, 85, 247, 0.3), rgba(255, 255, 255, 0.1), rgba(249, 115, 22, 0.2)); --border-radius-before: 2.5rem">
                        <!-- Background Blur -->
                        <div class="absolute inset-0 -z-10">
                            <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-gradient-to-br from-orange-500/5 via-purple-500/5 to-pink-500/5 rounded-full blur-3xl"></div>
                        </div>
                        <div class="text-center relative z-10">
                            <!-- Badge -->
                            <div class="debug-mobile-reality-badge pt-6 mb-8 md:mb-12">
                                ${this._renderBadge()}
                            </div>
                            
                            <!-- Headline -->
                            <div class="debug-mobile-reality-headline mb-8 md:mb-10">
                                ${this._renderHeadline()}
                            </div>
                            
                            <!-- Subtitle -->
                            <div class="debug-mobile-reality-subtitle">
                                ${this._renderSubtitle()}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }
}

// Export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = MobileReality;
} else {
    window.MobileReality = MobileReality;
}

