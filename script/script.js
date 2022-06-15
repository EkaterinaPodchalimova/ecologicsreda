const helpElementTypeButton = document.querySelector('.help__button');
const popupTypeQr = document.querySelector('.popup_type_qr');
const popupButtonTypeCloseQr = popupTypeQr.querySelector('.popup__close_type_qr');
const instructionCards = document.querySelector('.instruction__cards');
const templateElement = document.querySelector('#element-template').content;
const popupTypeInstruction = document.querySelector('.popup_type_instruction');
const popupButtonTypeCloseCard = popupTypeInstruction.querySelector('.popup__close_type_card');
const popupCard = popupTypeInstruction.querySelector('.popup__card');
const cards = [
    {link: 'https://i.postimg.cc/76fZzBF4/PS-6.jpg'},
    {link: 'https://i.postimg.cc/1t6bbw66/PP-5.jpg'},
    {link: 'https://i.postimg.cc/MpF4TdmV/Pet-1.jpg'},
    {link: 'https://i.postimg.cc/7YLm2S6V/Paper.jpg'},
    {link: 'https://i.postimg.cc/SQ1cH3S6/Packeges.jpg'},
    {link: 'https://i.postimg.cc/wTSLjNs3/Other.jpg'},
    {link: 'https://i.postimg.cc/h4N1f6kS/Metall.jpg'},
    {link: 'https://i.postimg.cc/HWbV9NJW/HDPE-2.jpg'}
];

function openPopup(evt) {
    evt.classList.add('popup_opened');
    document.addEventListener('keydown', keyHandler);
}

function closePopup(evt) {
    evt.classList.remove('popup_opened');
    document.removeEventListener('keydown', keyHandler);
}

function openInstruction(element) {
    openPopup(popupTypeInstruction);
    popupCard.src = element.src;
}

function keyHandler(evt) {
    const openedPopup = document.querySelector('.popup_opened');
    if (evt.key === "Escape") {
        closePopup(openedPopup);
    }
}

document.addEventListener('click', function (evt) {
    if (evt.target.classList.contains('popup_opened')){
        closePopup(evt.target);
    }
});

cards.forEach(function (element) {
        const instructionElement = templateElement.querySelector('.instruction__image').cloneNode(true);
        console.log(element.link);
        instructionElement.src = element.link;
        instructionElement.addEventListener('click',() => openInstruction(instructionElement));
        instructionCards.append(instructionElement);
    }
)

helpElementTypeButton.addEventListener('click', () => openPopup(popupTypeQr));
popupButtonTypeCloseQr.addEventListener('click', () => closePopup(popupTypeQr));
popupButtonTypeCloseCard.addEventListener('click',() => closePopup(popupTypeInstruction))
