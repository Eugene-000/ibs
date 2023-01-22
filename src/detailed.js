import './styles/style.css';
import './styles/detailed/style.css';

import Header from './components/header/header';
import Modal from './components/UI/modal/modal';
import Loader from './components/UI/loader/loader';
import { SERVER_URL } from './constants';
import { getParam } from './utils/utils';
import { HttpClient } from './api/api';
import { showErrorModal } from './components/UI/modal/modal';

const elRoot = document.querySelector('.root');
elRoot.appendChild(Header());
elRoot.appendChild(Modal());
elRoot.appendChild(Loader());

async function getItem() {
    try {
        const response = await HttpClient.get(`/item/${getParam('id')}`);
        const items = response.data.content;
        if(items)
          return items;
        else 
          throw new Error('No content found in the response')
    } catch (error) {
        showErrorModal(error);
    }
}

async function displayItems() {
    let elRoot = document.querySelector('.root');
    if (elRoot) {
        const item = await getItem();
        if(item) {
            const favourite = (item.like) ? 'active' : 'non-active';

            const resultContainer = `
            <main class="main">
                <div class="main__detailed-wrapper">
                    <div class="main__detailed-container">
                        <div class="detailed-img-container">
                            <div class="gradient-container"></div>
                            <img src="${SERVER_URL}${item.picture.path}" alt="${item.picture.alt}" class="detailed__img">
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
                </div>
            </main>
            `;
            elRoot.insertAdjacentHTML('beforeend', resultContainer);
        }
    }
}

displayItems().catch((e) => showErrorModal(e));