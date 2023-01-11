const elSearch = document.querySelector('.search__input-text');
if(elSearch){
    elSearch.addEventListener('keyup', (e) => {
        const searchText = elSearch.value.toLowerCase().trim();
        const elsCard = document.querySelectorAll('.item');
        const elsCardName = document.querySelectorAll('.item__title');
        for(let i = 0; i < elsCard.length; i++) {
            if(!elsCardName[i].innerHTML.toLowerCase().includes(searchText)) {
                elsCard[i].classList.add('hide');
            } else {
                elsCard[i].classList.remove('hide');
            }
        }
    });
}