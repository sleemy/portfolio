import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js";
import { initializeAppCheck, ReCaptchaV3Provider } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app-check.js";

// Initialize Firebase
// The 'firebaseConfig' object is loaded from env.js and is available globally.
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Initialize App Check
// The 'RECAPTCHA_SITE_KEY' constant is also loaded from env.js.
// Basic appcheck if user is real TODO add more complex appcheck and frontend validations
const appCheck = initializeAppCheck(app, {
  provider: new ReCaptchaV3Provider(RECAPTCHA_SITE_KEY),
  isTokenAutoRefreshEnabled: true
});

// --- Contact Form Logic ---
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = contactForm.name.value;
    const email = contactForm.email.value;
    const message = contactForm.message.value;

    try {
        // Here you would get the App Check token
        // const appCheckTokenResponse = await getToken(appCheck);
        // const appCheckToken = appCheckTokenResponse.token;

        const docRef = await addDoc(collection(db, "submissions"), {
            name: name,
            email: email,
            message: message,
            createdAt: new Date()
        });
        console.log("Document written with ID: ", docRef.id);
        alert("Message sent successfully!");
        contactForm.reset();
    } catch (error) {
        console.error("Error adding document: ", error);
        alert("Error sending message. Please try again.");
    }
});

// --- Carousel Logic ---
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
];

const carouselTrack = document.querySelector('.carousel-track');

function createSolutionItem(solution) {
    const item = document.createElement('div');
    item.classList.add('carousel-item');

    const content = `
        <img src="${solution.iconUrl}" alt="${solution.name}" class="solution-icon">
        <p class="solution-name">${solution.name}</p>
        <div class="progress-bar-container">
            <div class="progress-bar" style="width: ${solution.level}%;"></div>
        </div>
    `;

    item.innerHTML = content;
    return item;
}

solutions.forEach(solution => {
    const item = createSolutionItem(solution);
    carouselTrack.appendChild(item);
});

