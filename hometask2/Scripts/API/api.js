async function fetchItems(url) {
    let response = await fetch(url);
    let content;
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    } else {
        content = await response.json();
        return content;
    }
}