export default function Modal() {
    const elModalContainer = document.createElement('div');
    elModalContainer.classList.add('modal-container');
    elModalContainer.classList.add('hide');

    const elModal = document.createElement('div');
    elModal.classList.add('modal');

    const elModalHeading = document.createElement('div');
    elModalHeading.classList.add('modal-heading');

    const elModalHeadingTitle = document.createElement('p');
    elModalHeadingTitle.classList.add('modal-heading-title');

    const elModalCloseButton = document.createElement('button');
    elModalCloseButton.classList.add('modal-close-button');
    elModalCloseButton.innerHTML = 'Close';

    const elModalText = document.createElement('p');
    elModalText.classList.add('modal-text');

    elModalHeading.appendChild(elModalHeadingTitle);
    elModalHeading.appendChild(elModalCloseButton);
    elModal.appendChild(elModalHeading);
    elModal.appendChild(elModalText);
    elModalContainer.appendChild(elModal);

    return elModalContainer;
}

export function showErrorModal(error) {
    const elModal = document.querySelector('.modal-container');
    if(elModal) {
        elModal.classList.remove('hide');
        const elErrorMessage = document.querySelector('.modal-text');
        elErrorMessage.innerHTML = error;

        const elModalHeadingTitle = document.querySelector('.modal-heading-title');
        elModalHeadingTitle.innerHTML = 'Error Handling';

        const elModalCloseButton = document.querySelector('.modal-close-button');
        if(elModalCloseButton) {
            elModalCloseButton.addEventListener('click', () => {
                elModal.classList.add('hide');
            })
        }
    }
}