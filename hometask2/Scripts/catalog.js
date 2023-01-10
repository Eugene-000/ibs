async function getItemsInfo() {
    const items = await fetchItems(`${SERVER_URL}/item`);
    return items.content;
}

async function displayItems() {
    let elMainContainer = document.querySelector('.main-container');
    if (elMainContainer) {
        let result = '';
        let favourite = '';
        const items = await getItemsInfo();
        for(let item of items) {
            if (item.like) {
                favourite = 'active';
            } else {
                favourite = 'non-active';
            }

            result += `
            <div class="item">
                <button type="button" class="item__icon-favourite-btn icon-favourite ${favourite}"></button>
                <a href="detailed.html?id=${item.id}" class="item__link">
                    <div class="item__img-container">
                        <img src="${SERVER_URL}${item.picture.path}" alt="${item.picture.alt}" class="item__img">
                    </div>
                    <span class="item__title">${item.name}</span>
                    <span class="item__price">${item.price.value} ${item.price.currency}</span>
                </a>
            </div>
            `;
        }
        elMainContainer.insertAdjacentHTML('beforeend', result);
    }
}

displayItems().catch((e) => console.log(e));