
class InventoryItem extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });

        const wrapper = document.createElement('div');
        const image = document.createElement('img');
        const name = document.createElement('h3');

        const imageUrl = this.getAttribute('image-url');
        const itemName = this.getAttribute('name');

        image.src = imageUrl;
        image.alt = itemName;

        name.textContent = itemName;

        wrapper.appendChild(image);
        wrapper.appendChild(name);
        shadow.appendChild(wrapper);
    }
}

customElements.define('inventory-item', InventoryItem);

const items = [
    { name: 'Steam Trading Card', imageUrl: 'https://via.placeholder.com/150' },
    { name: 'Team Fortress 2 Key', imageUrl: 'https://via.placeholder.com/150' },
    { name: 'CS:GO Weapon Skin', imageUrl: 'https://via.placeholder.com/150' },
    { name: 'Dota 2 Treasure', imageUrl: 'https://via.placeholder.com/150' },
    { name: 'Half-Life Trading Card', imageUrl: 'https://via.placeholder.com/150' },
    { name: 'Portal 2 Trading Card', imageUrl: 'https://via.placeholder.com/150' },
    { name: 'Left 4 Dead 2 Item', imageUrl: 'https://via.placeholder.com/150' },
    { name: 'PAYDAY 2 Mask', imageUrl: 'https://via.placeholder.com/150' },
];

const itemContainer = document.getElementById('inventory-item-container');
items.forEach(item => {
    const inventoryItem = document.createElement('inventory-item');
    inventoryItem.setAttribute('name', item.name);
    inventoryItem.setAttribute('image-url', item.imageUrl);
    itemContainer.appendChild(inventoryItem);
});
