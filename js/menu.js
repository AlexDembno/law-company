(() => {
  const refs = {
    openMenuBtn: document.querySelector('[data-menu-open]'),
    closeMenuBtn: document.querySelector('[data-menu-close]'),
    closeMenu: document.querySelectorAll('[menu-close]'),
    menu: document.querySelector('[data-menu]'),
  };

  refs.closeMenu.forEach(btn => {
    btn.addEventListener('click', () => {
      refs.menu.classList.toggle('is-open');
    });
  });
  // refs.closeMenu.addEventListener('click', () => {
  //   refs.menu.classList.toggle('is-open');
  // });

  refs.openMenuBtn.addEventListener('click', toggleModal);
  refs.closeMenuBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.menu.classList.toggle('is-open');
  }
})();
