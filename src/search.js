export function searchFilter(elem) {
    const searchText = elem.toLowerCase().trim();
    const elsCard = document.querySelectorAll('.item');
    const elsCardName = document.querySelectorAll('.item__title');
    for(let i = 0; i < elsCard.length; i++) {
        if(!elsCardName[i].innerHTML.toLowerCase().includes(searchText)) {
            elsCard[i].classList.add('hide');
        } else {
            elsCard[i].classList.remove('hide');
        }
    }
}

export function debounceSearch( callback, delay ) {
    let timeout;
    return function(e) {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
          callback(e.target.value);
        }, delay);
    }
}
