async function getItemsInfo() {
    const cards = await fetchItems('http://localhost:3006/item', 'json');
    const fetchCards = await Promise.resolve(cards);
    const cardsContent = fetchCards.content;
    return cardsContent;
}

async function getPicturePath(item) {
    const picture = await fetchItems(`http://localhost:3006${item.picture.path}`, 'blob');
    const fetchPicture = await Promise.resolve(picture);
    const picturePath = URL.createObjectURL(fetchPicture);
    return picturePath;
}

async function displayItems() {
    let elMainContainer = document.querySelector('.main-container');
    if (elMainContainer) {
        let result = '';
        let favourite = '';
        const items = await getItemsInfo();
        for(let item of items) {
            let picturePath = await getPicturePath(item);

            if (item.like) {
                favourite = 'active';
            } else {
                favourite = 'non-active';
            }

            result += `
            <div class="item">
                <button type="button" class="item__icon-favourite-btn icon-favourite ${favourite}"></button>
                <a href="detailed.html?${item.id}" class="item__link">
                    <div class="item__img-container">
                        <img src="${picturePath}" alt="${item.picture.alt}" class="item__img">
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