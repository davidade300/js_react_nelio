import * as modalController from "./modal-controller.js";

export function init() {
  const contactLink = document.querySelector(".contact-link");
  contactLink.addEventListener("click", handleContactLinkClick);
  console.log("page controle iniciado");
}

function handleContactLinkClick(event) {
  event.preventDefault();
  modalController.showModal();
}
