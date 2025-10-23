
class SkillCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        const iconUrl = this.getAttribute('icon-url');
        const skillName = this.getAttribute('name');
        const skillLevel = this.getAttribute('level');

        if (!iconUrl) return;

        const wrapper = document.createElement('div');
        wrapper.classList.add('skill-card');

        const icon = document.createElement('img');
        icon.src = iconUrl;
        icon.alt = skillName;
        icon.width = 64;
        icon.height = 64;

        const skillLevelBar = document.createElement('div');
        skillLevelBar.classList.add('skill-level-bar');

        const skillLevelFill = document.createElement('div');
        skillLevelFill.classList.add('skill-level-fill');
        skillLevelFill.style.width = `${skillLevel}%`;

        skillLevelBar.appendChild(skillLevelFill);

        const name = document.createElement('p');
        name.textContent = skillName;

        const style = document.createElement('style');
        style.textContent = `
            .skill-card {
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 10px;
                padding: 15px;
                background-color: var(--card-color);
                border-radius: 8px;
                box-shadow: 0 4px 8px var(--shadow-color);
                position: relative;
            }
            .skill-level-bar {
                width: 80%;
                height: 10px;
                background-color: #1b2838;
                border-radius: 5px;
                overflow: hidden;
                opacity: 0;
                transition: opacity 0.3s ease-in-out;
            }
            .skill-card:hover .skill-level-bar {
                opacity: 1;
            }
            .skill-card img {
                transform: rotate(0deg); 
                /* Apply a smooth transition to the transform property over 1 second */
                transition: transform 1s ease-in-out; 

            }
                 .skill-card:hover img {
                transform: rotate(360deg);ø
            }
            .skill-level-fill {
                height: 100%;
                background-color: var(--accent-color);
                border-radius: 5px;
            }
        `;

        const shadow = this.shadowRoot;
        shadow.innerHTML = ''; // Clear previous content

        shadow.appendChild(style);
        wrapper.appendChild(icon);
        wrapper.appendChild(name);
        wrapper.appendChild(skillLevelBar);
        shadow.appendChild(wrapper);
    }
}

customElements.define('skill-card', SkillCard);

const solutions = [
    { name: 'HTML', iconUrl: '../assets/html.svg', level: 95 },
    { name: 'CSS', iconUrl: '../assets/css.svg', level: 90 },
    { name: 'JavaScript', iconUrl: '../assets/javascript.svg', level: 92 },
    { name: 'TypeScript', iconUrl: '../assets/typescript.svg', level: 85 },
    { name: 'Python', iconUrl: '../assets/python.svg', level: 88 },
    { name: 'PHP', iconUrl: '../assets/php.svg', level: 98 },
    { name: 'Ruby', iconUrl: '../assets/ruby.svg', level: 75 },
    { name: 'C++', iconUrl: '../assets/c-plusplus.svg', level: 70 },
    { name: 'C#', iconUrl: '../assets/c-sharp.svg', level: 80 },
    { name: 'Go', iconUrl: '../assets/go.svg', level: 78 },
    { name: 'Rust', iconUrl: '../assets/rust.svg', level: 65 },
    { name: 'Java', iconUrl: '../assets/java.svg', level: 82 },
    { name: 'SQL', iconUrl: '../assets/sql.svg', level: 89 },
    { name: 'Node.js', iconUrl: '../assets/nodejs.svg', level: 91 },
    { name: 'React', iconUrl: '../assets/react.svg', level: 87 },
    { name: 'Vue', iconUrl: '../assets/vue.svg', level: 84 },
    { name: 'Angular', iconUrl: '../assets/angular.svg', level: 81 },
    { name: 'Svelte', iconUrl: '../assets/svelte.svg', level: 77 },
];

const profileStatsContainer = document.querySelector('.profile-stats');

// Sort solutions by level in descending order and take the top 10
const topSkills = [...solutions]
    .sort((a, b) => b.level - a.level)
    .slice(0, 10);

// Duplicate top skills for seamless animation
const allTopSkills = [...topSkills, ...topSkills];

// Clear existing stats
profileStatsContainer.innerHTML = '';

// Populate the profile stats
allTopSkills.forEach(skill => {
    const statElement = document.createElement('div');
    const statValue = document.createElement('div');
    statValue.classList.add('stat-value');
    statValue.textContent = skill.level;

    const statLabel = document.createElement('div');
    statLabel.classList.add('stat-label');
    statLabel.textContent = skill.name;

    statElement.appendChild(statValue);
    statElement.appendChild(statLabel);
    profileStatsContainer.appendChild(statElement);
});

const carouselTrack = document.querySelector('.carousel-track');
const allSolutions = [...solutions, ...solutions]; // Duplicate the solutions

allSolutions.forEach(solution => {
    const skillCard = document.createElement('skill-card');
    skillCard.setAttribute('name', solution.name);
    skillCard.setAttribute('icon-url', solution.iconUrl);
    skillCard.setAttribute('level', solution.level);
    carouselTrack.appendChild(skillCard);
});

const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // In a real application, you would send this data to a server.
    // For this example, we'll just log it to the console.
    console.log('New message submitted:');
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Message: ${message}`);

    // Clear the form
    contactForm.reset();

    // Display a confirmation message (optional)
    alert('Thank you for your message! I will get back to you soon.');
});
