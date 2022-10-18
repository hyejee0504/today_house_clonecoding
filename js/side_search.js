(() => {
  const openBtn = document.querySelector('.dt_hidden .btn_open_search');
  const sideSearch = document.querySelector('.side_search');
  const sideSearchWrap = sideSearch.querySelector('.side_search_wrap');
  const btnClose = sideSearch.querySelector('.btn_close_search');

  openBtn.addEventListener('click', openMenu);
  sideSearch.addEventListener('click', closeMenu);
  btnClose.addEventListener('click', closeMenu);
  sideSearchWrap.addEventListener('click', () => event.stopPropagation());

  function openMenu() {
    sideSearch.classList.add('is_active');
    disableBodyScroll();
  }

  function closeMenu() {
    sideSearch.classList.remove('is_active');
    document.body.setAttribute('style', '');
  }

  function disableBodyScroll() {
    document.body.style.overflow = 'hidden';
    document.body.style.height = '100vh';
    document.body.style.paddingRight = '16px';
  }
})();
