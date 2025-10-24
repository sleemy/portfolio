
class AppFooter extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        const shadow = this.shadowRoot;
        const currentYear = new Date().getFullYear();

        shadow.innerHTML = `
            <style>
                footer {
                   background-color: var(--header-color);
    padding: 10px 20px;
    margin-top: 20px;
    border-radius: 8px;
    display: flex
;
    gap: 20px;
    justify-content: center;
                }
            </style>
            <footer>
                <p>&copy; ${currentYear} JerryJigga</p>
            </footer>
        `;
    }
}

customElements.define('app-footer', AppFooter);
