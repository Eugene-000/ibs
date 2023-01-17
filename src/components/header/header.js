import basketImg from '../../assets/images/basket_icon.svg';
import profileImg from '../../assets/images/profile_icon.svg';

function Header() {
    const header = document.createElement("header");
    header.className = "header";
    document.body.appendChild(header);
    const elHeader = document.querySelector('header');
    if(elHeader) {
        const result = `
        <div class="header__wrapper">
            <div class="header-container">
                <div class="search">
                    <input type="text" name="search" id="search__input-text" class="search__input-text" placeholder="Search products" autocomplete="off">
                    <label class="search__icon" for="search__input-text">
                        <svg class="svg" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path class="path" d="M12.5 11H11.71L11.43 10.73C12.41 9.59 13 8.11 13 6.5C13 2.91 10.09 0 6.5 0C2.91 0 0 2.91 0 6.5C0 10.09 2.91 13 6.5 13C8.11 13 9.59 12.41 10.73 11.43L11 11.71V12.5L16 17.49L17.49 16L12.5 11ZM6.5 11C4.01 11 2 8.99 2 6.5C2 4.01 4.01 2 6.5 2C8.99 2 11 4.01 11 6.5C11 8.99 8.99 11 6.5 11Z" fill="#323232"/>
                        </svg>
                    </label>
                    <div class="search__input-line"></div>
                </div>
                <div class="icons">
                    <a href="#" class="link icons__link-cart">
                        <img src="${basketImg}" alt="Basket" class="icons__img-cart">
                    </a>
                    <a href="#" class="link icons__link-profile">
                        <img src="${profileImg}" alt="Profile" class="icons__img-profile">
                    </a>
                </div>
            </div>
        </div>
        `;

        elHeader.insertAdjacentHTML('beforeend', result);
        return elHeader;
    }
}

export default Header;