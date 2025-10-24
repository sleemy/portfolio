
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js";
import { initializeAppCheck, ReCaptchaV3Provider, getToken } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app-check.js";
import { firebaseConfigLocal} from "./env.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: firebaseConfigLocal.apiKey,
    authDomain: firebaseConfigLocal.authDomain,
    projectId: firebaseConfigLocal.projectId,
    storageBucket: firebaseConfigLocal.storageBucket,
    messagingSenderId: firebaseConfigLocal.messagingSenderId,
    appId: firebaseConfigLocal.appId,
    measurementId: firebaseConfigLocal.measurementId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Initialize Firebase App Check.
// By not providing a key, we allow Firebase to manage it automatically.
const appCheck = initializeAppCheck(app, {
  provider: new ReCaptchaV3Provider(),
  isTokenAutoRefreshEnabled: true
});


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
                transition: transform 1s ease-in-out; 

            }
                 .skill-card:hover img {
                transform: rotate(360deg);
            }
            .skill-level-fill {
                height: 100%;
                background-color: var(--accent-color);
                border-radius: 5px;
            }
        `;

        const shadow = this.shadowRoot;
        shadow.innerHTML = '';

        shadow.appendChild(style);
        wrapper.appendChild(icon);
        wrapper.appendChild(name);
        wrapper.appendChild(skillLevelBar);
        shadow.appendChild(wrapper);
    }
}

customElements.define('skill-card', SkillCard);

const solutions = [
    { name: 'HTML', iconUrl: 'assets/html.svg', level: 95 },
    { name: 'CSS', iconUrl: 'assets/css.svg', level: 90 },
    { name: 'JavaScript', iconUrl: 'assets/javascript.svg', level: 92 },
    { name: 'TypeScript', iconUrl: 'assets/typescript.svg', level: 85 },
    { name: 'Python', iconUrl: 'assets/python.svg', level: 88 },
    { name: 'PHP', iconUrl: 'assets/php.svg', level: 98 },
    { name: 'Ruby', iconUrl: 'assets/ruby.svg', level: 75 },
    { name: 'C++', iconUrl: 'assets/c-plusplus.svg', level: 70 },
    { name: 'C#', iconUrl: 'assets/c-sharp.svg', level: 80 },
    { name: 'Go', iconUrl: 'assets/go.svg', level: 78 },
    { name: 'Rust', iconUrl: 'assets/rust.svg', level: 65 },
    { name: 'Java', iconUrl: 'assets/java.svg', level: 82 },
    { name: 'SQL', iconUrl: 'assets/sql.svg', level: 89 },
    { name: 'Node.js', iconUrl: 'assets/nodejs.svg', level: 91 },
    { name: 'React', iconUrl: 'assets/react.svg', level: 87 },
    { name: 'Vue', iconUrl: 'assets/vue.svg', level: 84 },
    { name: 'Angular', iconUrl: 'assets/angular.svg', level: 81 },
    { name: 'Svelte', iconUrl: 'assets/svelte.svg', level: 77 },
];

const profileStatsContainer = document.querySelector('.profile-stats');

const topSkills = [...solutions]
    .sort((a, b) => b.level - a.level)
    .slice(0, 10);

const allTopSkills = [...topSkills, ...topSkills];

profileStatsContainer.innerHTML = '';

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
const allSolutions = [...solutions, ...solutions]; 

allSolutions.forEach(solution => {
    const skillCard = document.createElement('skill-card');
    skillCard.setAttribute('name', solution.name);
    skillCard.setAttribute('icon-url', solution.iconUrl);
    skillCard.setAttribute('level', solution.level);
    carouselTrack.appendChild(skillCard);
});

const contactForm = document.getElementById('contact-form');
const submitButton = contactForm.querySelector('button[type="submit"]');

// Disable the button initially until App Check is ready.
submitButton.disabled = true;
submitButton.textContent = 'Verifying...';

// Wait for the initial App Check token.
getToken(appCheck, /* forceRefresh= */ false).then(() => {
    console.log("App Check token ready.");
    submitButton.disabled = false;
    submitButton.textContent = 'Send Message';
}).catch(error => {
    console.error("App Check failed to initialize:", error);
    submitButton.textContent = 'Verification Failed';
    // Optionally, keep the button disabled or show a more descriptive error.
});


contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    submitButton.disabled = true;
    submitButton.textContent = 'Sending...';

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    try {
        await addDoc(collection(db, "messages"), {
            name: name,
            email: email,
            message: message,
            timestamp: new Date()
        });
        
        contactForm.reset();
        alert('Thank you for your message! I will get back to you soon.');

    } catch (error) {
        console.error("Error adding document: ", error);
        alert('There was an error sending your message. Please check the console for details.');
    } finally {
        submitButton.disabled = false;
        submitButton.textContent = 'Send Message';
    }
});

function onSubmit(token) {
    document.getElementById("contact-form").submit();
  }
