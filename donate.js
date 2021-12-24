//   DONATE.HTML SCRIPT
const btn = document.getElementById('donate');
const closeBtn = document.getElementById('close');
const closeBtnModal = document.getElementById('close-modal');
const modal = document.getElementById('modal');
const overlay = document.getElementById('overlay');
const successModal = document.getElementById('success__modal');
const submitDonation = document.getElementById('submit-donation');
const mainContent = document.getElementById('main-content');

//form
const form = document.getElementById('form');

// show Modal
btn.addEventListener('click', () => {
    modal.style.display = "block"
    overlay.style.display = "block"
});

// hide Modal
closeBtn.addEventListener('click', () => {
    modal.style.display = "none"
    overlay.style.display = "none"
});

// success Modal
submitDonation.addEventListener('click', () => {
    mainContent.style.display = "none"
    successModal.style.display = "block"
});

// hide Modal using continue button
closeBtnModal.addEventListener('click', () => {
    modal.style.display = "none"
    overlay.style.display = "none"
    mainContent.style.display = "block"
    successModal.style.display = "none"
})

form.addEventListener('submit', (e) => {
    e.preventDefault();
})