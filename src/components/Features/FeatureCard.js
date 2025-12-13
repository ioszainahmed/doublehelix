/**
 * FeatureCard Component
 * 
 * SOLID Principles:
 * - Single Responsibility: Renders a single feature card
 * - Open/Closed: Different card types via props
 * - Interface Segregation: Minimal props interface
 * 
 * Features:
 * - Gradient border effect
 * - Icon support
 * - Configurable content
 */
class FeatureCard extends Component {
    /**
     * @param {string} containerId - Container element ID
     * @param {Object} props - Configuration
     * @param {string} props.title - Card title
     * @param {string} props.description - Card description
     * @param {string} [props.icon] - Icon SVG string
     * @param {string} [props.variant='default'] - Card style variant
     */
    constructor(containerId, props = {}) {
        super(containerId, {
            title: '',
            description: '',
            icon: '',
            variant: 'default',
            link: null,
            ...props
        });
    }

    /**
     * Get card variant styles
     * @private
     */
    _getVariantStyles() {
        const variants = {
            default: {
                wrapper: 'bg-gradient-to-br from-white/5 to-white/0',
                borderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.1))',
                borderRadius: '2rem'
            },
            large: {
                wrapper: 'bg-gradient-to-br from-white/10 to-white/0',
                borderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.1))',
                borderRadius: '2.5rem'
            }
        };
        return variants[this.props.variant] || variants.default;
    }

    render() {
        const { title, description, icon, link } = this.props;
        const styles = this._getVariantStyles();

        return `
            <div class="group overflow-hidden flex flex-col hover:border-white/20 transition-colors duration-500 ${styles.wrapper} rounded-[${styles.borderRadius}] backdrop-blur-lg" style="position: relative; --border-gradient: ${styles.borderGradient}; --border-radius-before: ${styles.borderRadius}">
                <!-- Card Content -->
                <div class="mt-auto pt-8 pr-10 pb-10 pl-10">
                    <div class="flex items-center gap-3 mb-5">
                        ${icon ? `
                            <div class="w-12 h-12 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center">
                                ${icon}
                            </div>
                        ` : ''}
                        <h3 class="text-xl font-semibold text-white tracking-tight font-manrope">${title}</h3>
                    </div>
                    <p class="text-gray-400 text-base leading-relaxed mb-8 font-sans">
                        ${description}
                    </p>
                    ${link ? `
                        <a href="${link.href}" class="inline-flex items-center gap-2 text-orange-400 hover:text-white transition-colors text-sm font-medium font-sans pb-1 border-b border-transparent hover:border-orange-400/50">
                            ${link.label}
                        </a>
                    ` : ''}
                </div>
            </div>
        `;
    }
}

// Export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = FeatureCard;
} else {
    window.FeatureCard = FeatureCard;
}


