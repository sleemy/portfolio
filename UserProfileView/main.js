class UserBadge extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });

        const wrapper = document.createElement('div');
        const icon = document.createElement('img');
        const name = document.createElement('p');

        const iconUrl = this.getAttribute('icon-url');
        const badgeName = this.getAttribute('name');

        icon.src = iconUrl;
        icon.alt = badgeName;
        icon.width = 64;
        icon.height = 64;

        name.textContent = badgeName;

        wrapper.appendChild(icon);
        wrapper.appendChild(name);
        shadow.appendChild(wrapper);
    }
}

class ProjectCard extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });

        const wrapper = document.createElement('div');
        const title = document.createElement('h3');
        const description = document.createElement('p');

        title.textContent = this.getAttribute('name');
        description.textContent = this.getAttribute('description');

        wrapper.appendChild(title);
        wrapper.appendChild(description);
        shadow.appendChild(wrapper);
    }
}

class ReviewComment extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });

        const wrapper = document.createElement('div');
        const author = document.createElement('strong');
        const comment = document.createElement('p');

        author.textContent = this.getAttribute('author');
        comment.textContent = this.textContent;

        wrapper.appendChild(author);
        wrapper.appendChild(comment);
        shadow.appendChild(wrapper);
    }
}

customElements.define('user-badge', UserBadge);
customElements.define('project-card', ProjectCard);
customElements.define('review-comment', ReviewComment);

const badges = [
    { name: 'HTML', iconUrl: 'https://www.svgrepo.com/show/373669/html.svg' },
    { name: 'CSS', iconUrl: 'https://www.svgrepo.com/show/373535/css.svg' },
    { name: 'JavaScript', iconUrl: 'https://www.svgrepo.com/show/353925/javascript.svg' },
    { name: 'TypeScript', iconUrl: 'https://www.svgrepo.com/show/354478/typescript.svg' },
    { name: 'Python', iconUrl: 'https://www.svgrepo.com/show/354258/python.svg' },
    { name: 'PHP', iconUrl: 'https://www.svgrepo.com/show/354181/php.svg' },
    { name: 'Ruby', iconUrl: 'https://www.svgrepo.com/show/354272/ruby.svg' },
    { name: 'C++', iconUrl: 'https://www.svgrepo.com/show/353600/c-plusplus.svg' },
    { name: 'C#', iconUrl: 'https://www.svgrepo.com/show/353599/c-sharp.svg' },
    { name: 'Go', iconUrl: 'https://www.svgrepo.com/show/353818/go.svg' },
    { name: 'Rust', iconUrl: 'https://www.svgrepo.com/show/354275/rust.svg' },
    { name: 'Java', iconUrl: 'https://www.svgrepo.com/show/353920/java.svg' },
    { name: 'SQL', iconUrl: 'https://www.svgrepo.com/show/354351/sql.svg' },
    { name: 'Node.js', iconUrl: 'https://www.svgrepo.com/show/354142/nodejs.svg' },
    { name: 'React', iconUrl: 'https://www.svgrepo.com/show/354259/react.svg' },
    { name: 'Vue', iconUrl: 'https://www.svgrepo.com/show/354521/vue.svg' },
    { name: 'Angular', iconUrl: 'https://www.svgrepo.com/show/353421/angular.svg' },
    { name: 'Svelte', iconUrl: 'https://www.svgrepo.com/show/354382/svelte.svg' },
];

const projects = [
    { name: 'Project Alpha', description: 'A web app for data visualization.' },
    { name: 'Project Beta', description: 'A mobile game developed in Unity.' },
    { name: 'Project Gamma', description: 'An e-commerce platform with a custom backend.' },
];
const reviews = [
    { author: 'Alice', comment: 'Great work on Project Alpha!' },
    { author: 'Bob', comment: 'I really enjoyed the design of your portfolio.' },
];

const badgeContainer = document.getElementById('badge-container');
badges.forEach(badge => {
    const userBadge = document.createElement('user-badge');
    userBadge.setAttribute('name', badge.name);
    userBadge.setAttribute('icon-url', badge.iconUrl);
    badgeContainer.appendChild(userBadge);
});

const projectContainer = document.getElementById('project-container');
projects.forEach(project => {
    const projectCard = document.createElement('project-card');
    projectCard.setAttribute('name', project.name);
    projectCard.setAttribute('description', project.description);
    projectContainer.appendChild(projectCard);
});

const reviewContainer = document.getElementById('review-container');
reviews.forEach(review => {
    const reviewComment = document.createElement('review-comment');
    reviewComment.setAttribute('author', review.author);
    reviewComment.textContent = review.comment;
    reviewContainer.appendChild(reviewComment);
});
