/**
 * ContactForm Section Component
 * 
 * SOLID Principles:
 * - Single Responsibility: Handles contact form UI and validation
 * - Open/Closed: Form fields configurable via props
 * - Liskov Substitution: Follows Component interface
 * - Interface Segregation: Exposes only necessary methods
 * 
 * Features:
 * - Floating label inputs
 * - Form validation
 * - Animated submit button
 */
class ContactForm extends Component {
    constructor(containerId, props = {}) {
        super(containerId, {
            title: 'Ready to personalize your',
            titleHighlight: 'chain?',
            subtitle: 'Our service is for protocols that believe in owning a safe, scalable, and decentralized blockspace. We promise that scaling with DoubleHelix will help you declutter your mempool.',
            submitText: 'Submit Request',
            fields: [
                { id: 'name', label: 'Name', type: 'text', required: true, half: true },
                { id: 'email', label: 'Email', type: 'email', required: true, half: true },
                { id: 'project', label: 'Project / Protocol ID', type: 'text', required: false },
                { id: 'message', label: 'Anything we should know?', type: 'textarea', required: false }
            ],
            ...props
        });
    }

    _renderField(field) {
        const baseClasses = 'peer w-full bg-transparent border-b border-white/10 py-3 text-white placeholder-transparent focus:border-orange-500 focus:outline-none transition-colors font-sans text-lg';
        const labelClasses = 'absolute left-0 -top-5 text-xs text-zinc-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-zinc-400 peer-placeholder-shown:top-3 peer-focus:-top-5 peer-focus:text-[10px] peer-focus:text-orange-500 font-sans uppercase tracking-wider font-medium';
        
        const wrapper = field.half ? 'group relative' : 'group relative';
        
        if (field.type === 'textarea') {
            return `
                <div class="${wrapper}">
                    <textarea 
                        id="${field.id}" 
                        rows="1" 
                        class="${baseClasses} resize-none" 
                        placeholder="${field.label}"
                        ${field.required ? 'required' : ''}
                    ></textarea>
                    <label for="${field.id}" class="${labelClasses}">${field.label}</label>
                </div>
            `;
        }
        
        return `
            <div class="${wrapper}">
                <input 
                    type="${field.type}" 
                    id="${field.id}" 
                    ${field.required ? 'required' : ''} 
                    class="${baseClasses}" 
                    placeholder="${field.label}"
                >
                <label for="${field.id}" class="${labelClasses}">${field.label}</label>
            </div>
        `;
    }

    _renderSubmitButton() {
        return `
            <button type="submit" class="group flex items-center gap-3 px-8 py-4 bg-white text-black font-semibold tracking-widest uppercase text-xs hover:bg-zinc-200 transition-all duration-300 font-manrope">
                ${this.props.submitText}
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                    <path fill="currentColor" fill-rule="evenodd" d="M3.25 12a.75.75 0 0 1 .75-.75h9.25v1.5H4a.75.75 0 0 1-.75-.75" clip-rule="evenodd" opacity=".5"></path>
                    <path fill="currentColor" d="M13.25 12.75V18a.75.75 0 0 0 1.28.53l6-6a.75.75 0 0 0 0-1.06l-6-6a.75.75 0 0 0-1.28.53z"></path>
                </svg>
            </button>
        `;
    }

    render() {
        const { title, titleHighlight, subtitle, fields } = this.props;
        
        // Separate half-width and full-width fields
        const halfFields = fields.filter(f => f.half);
        const fullFields = fields.filter(f => !f.half);

        return `
            <section class="debug-contact w-full max-w-7xl mx-auto px-6 mb-32 relative z-20 mt-32">
                <div class="grid lg:grid-cols-12 gap-16 items-start">
                    <!-- CTA Text Side -->
                    <div class="lg:col-span-5 pt-4">
                        <h2 class="text-5xl md:text-6xl font-medium text-white tracking-tighter font-manrope mb-6 leading-[1.1]">
                            ${title} <span class="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">${titleHighlight}</span>
                        </h2>
                        <p class="text-lg text-zinc-400 font-sans leading-relaxed max-w-md">
                            ${subtitle}
                        </p>
                    </div>
                    
                    <!-- Form Side -->
                    <div class="lg:col-span-7">
                        <form class="debug-form space-y-12 relative" id="contact-form">
                            ${halfFields.length > 0 ? `
                                <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
                                    ${halfFields.map(f => this._renderField(f)).join('')}
                                </div>
                            ` : ''}
                            
                            ${fullFields.map(f => this._renderField(f)).join('')}

                            <div class="flex justify-end pt-8">
                                ${this._renderSubmitButton()}
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        `;
    }

    onMount() {
        const form = document.getElementById('contact-form');
        if (form) {
            form.addEventListener('submit', this._handleSubmit.bind(this));
        }
    }

    onUnmount() {
        const form = document.getElementById('contact-form');
        if (form) {
            form.removeEventListener('submit', this._handleSubmit.bind(this));
        }
    }

    _handleSubmit(event) {
        event.preventDefault();
        
        // Gather form data
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData.entries());
        
        // Emit event for form submission
        if (typeof eventBus !== 'undefined') {
            eventBus.publish('contact:submit', data);
        }
        
        console.log('Form submitted:', data);
        // Here you would typically send to an API
    }
}

// Export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ContactForm;
} else {
    window.ContactForm = ContactForm;
}


