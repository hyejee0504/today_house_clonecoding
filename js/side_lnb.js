(() => {
  const sideLnb = document.querySelector('.side_menu_lnb');
  const openBtns = sideLnb.querySelectorAll('.btn_open_lnb');

  openBtns.forEach(btn => {
    btn.addEventListener('click', clickHandler);
  });

  function clickHandler() {
    const lnb = event.target.nextElementSibling;
    const prevLnb = sideLnb.querySelector('.lnb_wrap.is_active .lnb');

    toggleDropDownMenu(lnb);
    lnb === prevLnb ? null : toggleDropDownMenu(prevLnb);
  }

  function toggleDropDownMenu(target) {
    if (target === null) return;

    const wrap = target.parentElement;
    const beforeHeight = target.getBoundingClientRect().height;

    target.style.height = '';
    target.style.transition = 'none';

    wrap.classList.toggle('is_active');

    const afterHeight = target.getBoundingClientRect().height;

    console.log(beforeHeight, afterHeight);

    target.style.height = beforeHeight + 'px';
    requestAnimationFrame(() => {
      target.style.transition = '';

      requestAnimationFrame(() => {
        target.style.height = afterHeight + 'px';
      });
    });

    target.addEventListener('transitionend', resetStyle);

    function resetStyle() {
      target.style.height = '';
      target.removeEventListener('transitionend', resetStyle);
    }
  }
})();
