const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');

openModalButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    const modal = document.querySelector(button.dataset.modalTarget);
    openModal(modal);
  });
});
closeModalButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    const modal = button.closest('.modal');
    closeModal(modal);
  });
});

function openModal(modal) {
  if (modal == null) {
    return;
  }
  modal.classList.add('active');
  overlay.classList.add('active');
}
function closeModal(modal) {
  if (modal == null) {
    return;
  }
  modal.classList.remove('active');
  overlay.classList.remove('active');
}

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active');
  modals.forEach((modal) => {
    closeModal(modal);
  });
});

window.addEventListener('keydown', (e) => {
  //   console.log(e.keyCode);
  const modals = document.querySelectorAll('.modal.active');
  modals.forEach((modal) => {
    closeModal(modal);
  });
});

/* const openModalButton = document.querySelector('#openModalBtn');
const closeModalButton = document.querySelector('.close-button');

const modal = document.querySelector('#modal');
const overlay = document.getElementById('overlay');

openModalButton.addEventListener('click', () => {
  modal.classList.add('active');
  overlay.classList.add('active');
});

closeModalButton.addEventListener('click', () => {
  modal.classList.remove('active');
  overlay.classList.remove('active');
});

overlay.addEventListener('click', () => {
  modal.classList.remove('active');
  overlay.classList.remove('active');
}); */

/* const modal = document.querySelector('#modal');
// const overlay = document.getElementById('overlay');

window.addEventListener('keydown', (e) => {
  //   console.log(e.keyCode);
  if (e.keyCode == 27) {
    modal.classList.remove('active');
    overlay.classList.remove('active');ß
  }
}); */
