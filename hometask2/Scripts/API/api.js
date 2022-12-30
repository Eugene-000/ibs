function getParam(key) {
    let param = window.location.search;
    let id = param.substring(1);
    return id;
}

async function fetchItems(url, type) {
    let response = await fetch(url);
    let content;
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    } else {
        if(type === 'json') {
            content = await response.json();
        } else if (type === 'blob'){
            content = await response.blob();
        }
        return content;
    }
}