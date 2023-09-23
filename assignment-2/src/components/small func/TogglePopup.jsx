function togglePopup(popupID) {
    const popupElement = document.getElementById(popupID);
    if (popupElement) {
        popupElement.classList.toggle("active");
    }
}

export default togglePopup;
