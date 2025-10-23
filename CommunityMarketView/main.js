
class MarketItem extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });

        const wrapper = document.createElement('div');
        const image = document.createElement('img');
        const name = document.createElement('h3');
        const price = document.createElement('p');

        name.className = 'item-name';
        price.className = 'item-price';

        const imageUrl = this.getAttribute('image-url');
        const itemName = this.getAttribute('name');
        const itemPrice = this.getAttribute('price');

        image.src = imageUrl;
        image.alt = itemName;

        name.textContent = itemName;
        price.textContent = `$${itemPrice}`;

        wrapper.appendChild(image);
        wrapper.appendChild(name);
        wrapper.appendChild(price);
        shadow.appendChild(wrapper);
    }
}

customElements.define('market-item', MarketItem);

const items = [
    { name: 'Rare Trading Card', price: '15.99', imageUrl: 'https://via.placeholder.com/200x150' },
    { name: 'Limited Edition Skin', price: '49.99', imageUrl: 'https://via.placeholder.com/200x150' },
    { name: 'Collectible Badge', price: '5.00', imageUrl: 'https://via.placeholder.com/200x150' },
    { name: 'In-Game Item Pack', price: '25.50', imageUrl: 'https://via.placeholder.com/200x150' },
];

const itemContainer = document.getElementById('market-item-container');
items.forEach(item => {
    const marketItem = document.createElement('market-item');
    marketItem.setAttribute('name', item.name);
    marketItem.setAttribute('price', item.price);
    marketItem.setAttribute('image-url', item.imageUrl);
    itemContainer.appendChild(marketItem);
});
