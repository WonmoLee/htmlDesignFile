'use strict';

const modal = document.querySelector(".modal");
const closeButton = modal.querySelector(".close_button");
//동작함수
const openModal = () => {
    modal.classList.remove("hidden");
}
const closeModal = () => {
    modal.classList.add("hidden");
}
closeButton.addEventListener("click", closeModal);
openModal();