/**
 * Background Component
 * 
 * SOLID Principles:
 * - Single Responsibility: Only handles background effects
 * - Open/Closed: Effects configurable via props
 * 
 * Features:
 * - Unicorn Studio integration
 * - Gradient blur effect
 * - Noise texture overlay
 */
class Background extends Component {
    constructor(containerId, props = {}) {
        super(containerId, {
            unicornProjectId: 'bKN5upvoulAmWvInmHza',
            alphaMask: 80,
            enableUnicorn: true,
            ...props
        });
    }

    render() {
        const { unicornProjectId, alphaMask, enableUnicorn } = this.props;

        return `
            <!-- Animated Background -->
            <div class="debug-background aura-background-component fixed top-0 w-full h-screen mix-blend-screen brightness-50 opacity-50 saturate-0 z-10 pointer-events-none" data-alpha-mask="${alphaMask}" style="mask-image: linear-gradient(to bottom, transparent, black 0%, black ${alphaMask}%, transparent); -webkit-mask-image: linear-gradient(to bottom, transparent, black 0%, black ${alphaMask}%, transparent)">
                ${enableUnicorn ? `
                    <div class="aura-background-component top-0 w-full -z-10 absolute h-full">
                        <div data-us-project="${unicornProjectId}" class="absolute w-full h-full left-0 top-0 -z-10"></div>
                    </div>
                ` : ''}
            </div>
        `;
    }

    onMount() {
        // Initialize Unicorn Studio if enabled
        if (this.props.enableUnicorn && !window.UnicornStudio) {
            window.UnicornStudio = { isInitialized: false };
            const script = document.createElement('script');
            script.src = 'https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js';
            script.onload = () => {
                if (!window.UnicornStudio.isInitialized) {
                    UnicornStudio.init();
                    window.UnicornStudio.isInitialized = true;
                }
            };
            (document.head || document.body).appendChild(script);
        }
    }
}

// Export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = Background;
} else {
    window.Background = Background;
}


