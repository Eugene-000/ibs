export function getParam(key) {
    const params = new URLSearchParams(window.location.search);
    const paramId = params.get('id');
    return paramId;
}