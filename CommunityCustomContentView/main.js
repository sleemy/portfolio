
class CommunityItem extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });

        const wrapper = document.createElement('div');
        const image = document.createElement('img');
        const info = document.createElement('div');
        const title = document.createElement('h3');
        const author = document.createElement('p');

        info.className = 'info';

        const imageUrl = this.getAttribute('image-url');
        const itemTitle = this.getAttribute('title');
        const itemAuthor = this.getAttribute('author');

        image.src = imageUrl;
        image.alt = itemTitle;

        title.textContent = itemTitle;
        author.textContent = `By ${itemAuthor}`;

        info.appendChild(title);
        info.appendChild(author);
        wrapper.appendChild(image);
        wrapper.appendChild(info);
        shadow.appendChild(wrapper);
    }
}

customElements.define('community-item', CommunityItem);

const items = [
    { title: 'Epic Landscape', author: 'CreativeUser1', imageUrl: 'https://via.placeholder.com/300x200' },
    { title: 'Character Concept', author: 'ArtisticPlayer', imageUrl: 'https://via.placeholder.com/300x200' },
    { title: 'Abstract Wallpaper', author: 'DesignMaster', imageUrl: 'https://via.placeholder.com/300x200' },
    { title: 'Game Screenshot', author: 'ProGamer', imageUrl: 'https://via.placeholder.com/300x200' },
];

const itemContainer = document.getElementById('community-item-container');
items.forEach(item => {
    const communityItem = document.createElement('community-item');
    communityItem.setAttribute('title', item.title);
    communityItem.setAttribute('author', item.author);
    communityItem.setAttribute('image-url', item.imageUrl);
    itemContainer.appendChild(communityItem);
});
