export function debounceSearch(callback, delay) {
    let timeout;
    return function(...argument) {
        clearTimeout(timeout);
        timeout = setTimeout(callback, delay, ...argument);
    }
}