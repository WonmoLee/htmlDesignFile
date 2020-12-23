'use strict';

//최초로 띄우는 모달
const f_modal = document.querySelector(".firstModal");
const f_closeButton = f_modal.querySelector(".f_closeButton");

const f_openModal = () => {
    f_modal.classList.remove("f_hidden");
}
const f_closeModal = () => {
    f_modal.classList.add("f_hidden");
}
f_closeButton.addEventListener("click", f_closeModal);
f_openModal();

//메인 페이지 알림받기 모달
const n_modal = document.querySelector(".noticeModal");
const n_openButton = document.querySelector(".n_openButton");
const n_closeButton = n_modal.querySelector(".n_closeButton");

const n_openModal = () => {
    n_modal.classList.remove("n_hidden");
}
const n_closeModal = () => {
    n_modal.classList.add("n_hidden");
}
n_openButton.addEventListener("click", n_openModal);
n_closeButton.addEventListener("click", n_closeModal);