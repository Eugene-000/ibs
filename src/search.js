export function searchFilter(event) {
    const elem = event.target.value;
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

export function debounceSearch(callback, delay) {
    let timeout;
    return function(...argument) {
        clearTimeout(timeout);
        timeout = setTimeout(callback, delay, ...argument);
    }
}
