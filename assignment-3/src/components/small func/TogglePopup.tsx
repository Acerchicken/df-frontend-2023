const togglePopup = (popupID: string): void => {
    const popupElement = document.getElementById(popupID);
    if (popupElement) {
      popupElement.classList.toggle("active");
    }
  }
  
  export default togglePopup;
  