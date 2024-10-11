(() => {
  const refs = {
    openModalBtns: document.querySelectorAll('[data-buton]'),
    closeModalBtn: document.querySelector('.modal-close'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtns.forEach(btn => {
    btn.addEventListener('click', toggleModal);
  });

  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
