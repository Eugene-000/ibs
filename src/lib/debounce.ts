export function debounce(callback: (...args: any[]) => void, delay: number) {
    let timeout: NodeJS.Timeout;
    return function(...args: any[]) {
        clearTimeout(timeout);
        timeout = setTimeout(callback, delay, ...args);
    }
}