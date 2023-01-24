export default function Loader() {
    const elLoaderConteiner = document.createElement('div');
    elLoaderConteiner.classList.add('loader-container');
    const elLoader = document.createElement('div');
    elLoader.classList.add('loader');
    elLoaderConteiner.appendChild(elLoader);
    return elLoaderConteiner;
}

export function showLoader() {
    const elLoader = document.querySelector('.loader-container');
    elLoader.classList.add('loader-active');
    elLoader.classList.remove('hide');
}

export function hideLoader() {
    const elLoader = document.querySelector('.loader-container');
    elLoader.classList.add('hide');
    elLoader.classList.remove('loader-active');
}

