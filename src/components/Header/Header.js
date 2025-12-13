/**
 * Header Component
 * 
 * SOLID Principles:
 * - Single Responsibility: Only handles header/navigation UI
 * - Open/Closed: Configurable via props without modification
 * - Liskov Substitution: Follows Component interface
 * - Dependency Inversion: Depends on Component abstraction
 * 
 * Features:
 * - Fixed navigation bar with blur effect
 * - Brand logo
 * - Navigation links
 * - CTA button with hover effects
 */
class Header extends Component {
    /**
     * @param {string} containerId - Container element ID
     * @param {Object} props - Configuration
     * @param {string} [props.brandName='DoubleHelix'] - Brand name
     * @param {Array} [props.navLinks] - Navigation link items
     * @param {Object} [props.cta] - CTA button configuration
     */
    constructor(containerId, props = {}) {
        super(containerId, {
            brandName: 'DoubleHelix',
            navLinks: [
                { label: 'Product', href: '#' },
                { label: 'Docs', href: '#' },
                { label: 'Customers', href: '#' },
                { label: 'Pricing', href: '#' }
            ],
            cta: {
                label: 'Request Demo',
                href: '#'
            },
            ...props
        });
    }

    /**
     * Render navigation links
     * @private
     * @returns {string}
     */
    _renderNavLinks() {
        return this.props.navLinks.map(link => `
            <a href="${link.href}" class="text-xs font-medium text-gray-400 hover:text-white transition-colors font-sans">
                ${link.label}
            </a>
        `).join('');
    }

    /**
     * Render CTA button with beam effect
     * @private
     * @returns {string}
     */
    _renderCTA() {
        const { cta } = this.props;
        return `
            <button class="group inline-flex overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_25px_rgba(255,255,255,0.1)] rounded-full pt-[1px] pr-[1px] pb-[1px] pl-[1px] relative items-center justify-center">
                <!-- Spinning Border Beam (Visible on Hover) -->
                <span class="absolute inset-[-100%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,transparent_75%,#ffffff_100%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
                
                <!-- Default Static Border -->
                <span class="transition-opacity duration-300 group-hover:opacity-0 bg-zinc-800 rounded-full absolute top-0 right-0 bottom-0 left-0"></span>
                
                <!-- 3D Button Surface & Content -->
                <span class="flex items-center justify-center gap-2 uppercase transition-colors duration-300 group-hover:text-white text-xs font-medium text-zinc-400 tracking-widest bg-gradient-to-b from-zinc-800 to-zinc-950 w-full h-full rounded-full pt-2.5 pr-6 pb-2.5 pl-6 relative shadow-[inset_0_1px_0_rgba(255,255,255,0.3)]">
                    <span class="relative z-10">${cta.label}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="relative z-10 transition-transform duration-300 group-hover:translate-x-0.5">
                        <path d="M5 12h14"></path>
                        <path d="m12 5 7 7-7 7"></path>
                    </svg>
                </span>
            </button>
        `;
    }

    render() {
        const { brandName } = this.props;
        
        return `
            <!-- Progressive Blur Top -->
            <div class="gradient-blur">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>

            <!-- Navigation -->
            <div class="debug-header fixed flex w-full z-50 pt-6 pr-4 pl-4 top-0 left-0 justify-center">
                <nav class="debug-nav shadow-black/50 flex md:gap-12 md:w-auto bg-black/60 w-full max-w-5xl rounded-full pt-2 pr-2 pb-2 pl-6 shadow-2xl backdrop-blur-xl gap-x-8 gap-y-8 items-center justify-between" style="position: relative; --border-gradient: linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.2)); --border-radius-before: 9999px">
                    <!-- Brand -->
                    <div class="flex items-center gap-2 shrink-0">
                        <span class="text-base font-medium tracking-tight text-white font-sans">${brandName}</span>
                    </div>
                    
                    <!-- Desktop Navigation Links -->
                    <div class="hidden md:flex items-center gap-6">
                        ${this._renderNavLinks()}
                    </div>
                    
                    <!-- Actions -->
                    <div class="flex items-center gap-4 shrink-0">
                        <a href="#" class="hidden md:block text-xs font-medium text-gray-300 hover:text-white transition-colors font-sans">Sign in</a>
                        ${this._renderCTA()}
                    </div>
                </nav>
            </div>
        `;
    }

    /**
     * Initialize scroll behavior
     */
    onMount() {
        // Add scroll listener for header transparency effect
        this._handleScroll = () => {
            const nav = document.querySelector('nav');
            if (nav) {
                if (window.scrollY > 50) {
                    nav.classList.add('bg-black/80');
                } else {
                    nav.classList.remove('bg-black/80');
                }
            }
        };
        
        window.addEventListener('scroll', this._handleScroll, { passive: true });
    }

    onUnmount() {
        if (this._handleScroll) {
            window.removeEventListener('scroll', this._handleScroll);
        }
    }
}

// Export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = Header;
} else {
    window.Header = Header;
}


