(() => {
  const openBtn = document.querySelector('.header_main .btn_open_gnb');
  const sideMenu = document.querySelector('.side_menu');
  const sideMenuWrap = sideMenu.querySelector('.side_menu_wrap');

  openBtn.addEventListener('click', openMenu);
  sideMenu.addEventListener('click', closeMenu);
  sideMenuWrap.addEventListener('click', () => event.stopPropagation());

  function openMenu() {
    sideMenu.classList.add('is_active');
    disableBodyScroll();
  }

  function closeMenu() {
    sideMenu.classList.remove('is_active');
    document.body.setAttribute('style', '');
  }

  function disableBodyScroll() {
    document.body.style.overflow = 'hidden';
    document.body.style.height = '100vh';
    document.body.style.paddingRight = '16px';
  }
})();
