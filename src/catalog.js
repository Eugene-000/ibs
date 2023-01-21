import './styles/style.css';
import './styles/catalog/style.css';

import Header from './components/header/header';
import { SERVER_URL } from './constants';
import { fetchItems } from './api/api';
import { searchFilter } from './search';
import { debounceSearch } from './search';

document.querySelector('.root').appendChild(Header());

const elSearch = document.querySelector('.search__input-text');
if(elSearch) {
    elSearch.addEventListener('keyup', debounceSearch(searchFilter, 2000));
}

async function getItemsInfo() {
    const items = await fetchItems(`${SERVER_URL}/item`);
    return items.content;
}

async function displayItems() {
    let elRoot = document.querySelector('.root');
    if (elRoot) {
        let resultItems = '';
        const items = await getItemsInfo();
        for(let item of items) {
            const favourite = (item.like) ? 'active' : 'non-active';

            resultItems += `
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
        const resultContainer = `
        <main class="main">
            <div class="main__wrapper">
                <div class="main-container">
                    ${resultItems}
                </div>
            </div>
        </main>
        `;
        elRoot.insertAdjacentHTML('beforeend', resultContainer);
    }
}

displayItems().catch((e) => console.log(e));