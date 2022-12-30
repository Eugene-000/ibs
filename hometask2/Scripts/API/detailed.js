async function getItemInfo() {
    const card = fetchItems(`http://localhost:3006/item/${getParam('id')}`, 'json');
    const fetchCard = await Promise.resolve(card);
    const item = fetchCard.content;
    return item;
}

async function getPicturePath(item) {
    const image = fetchItems(`http://localhost:3006${item.picture.path}`, 'blob');
    const fetchImage = await Promise.resolve(image);
    const picturePath = URL.createObjectURL(fetchImage);
    return picturePath;
}

async function displayItems() {
    const elMainContainer = document.querySelector('.main__detailed-wrapper');
    if (elMainContainer) {
        const item = await getItemInfo();
        const picture = await getPicturePath(item);

        let resultContainer = '';
        let favourite = '';

        favourite = (item.like) ? 'active' : 'non-active';

        resultContainer = `
        <div class="main__detailed-container">
            <div class="detailed-img-container">
                <div class="gradient-container"></div>
                <img src="${picture}" alt="${item.picture.alt}" class="detailed__img">
            </div>
            <div class="detailed-info-container">
                <span class="detailed-main-title text">${item.name}</span>
                <p class="detailed-main-text text">${item.info}</p>
                <span class="detailed-title text">Details</span>
                <p class="detailed-text text">${item.details}</p>
                <div class="add-to-cart-container">
                    <div class="count-price-container">
                        <span class="price">${item.price.value} ${item.price.currency}</span>
                        <div class="count-container">
                            <button type="button" class="sign count-remove"></button>
                            <input type="text" class="count-text" id="count-text" value="1">
                            <button type="button" class="sign count-add"></button>
                        </div>
                    </div>
                    <div class="favourite-cart-conteiner">
                        <button type="button" class="cart-btn">Add to cart</button>
                        <button type="button" class="detailed-icon-favourite icon-favourite ${favourite}"></button>
                    </div>
                </div>
            </div>
        </div>
        `;
        elMainContainer.insertAdjacentHTML('beforeend', resultContainer);
    }
}

displayItems().catch((e) => console.log(e));