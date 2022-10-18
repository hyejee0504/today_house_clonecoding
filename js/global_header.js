(() => {
  const globalHeader = document.querySelector('.global_header');

  // 글쓰기 버튼 클릭 시
  const openBtn = globalHeader.querySelector('.btn_open_posting');

  openBtn.addEventListener('click', togglePost);

  function togglePost() {
    openBtn.parentElement.classList.toggle('is_active');
  }

  // 헤더 sticky
  document.body.style.height = '400vh';
  const lnb = globalHeader.querySelector('.header_lnb');

  if (window.pageYOffset === 0) {
    globalHeader.classList.add('is_up');
    lnb.style.transition = 'none';
    setTimeout(() => {
      lnb.style.transition = '';
    }, 0);
  }

  let lastScrollTop = 0;

  window.addEventListener('scroll', function () {
    const scrollTop = window.pageYOffset;

    if (scrollTop > lastScrollTop) {
      globalHeader.classList.remove('is_up');
    } else {
      globalHeader.classList.add('is_up');
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  });

  // gnb 마우스 오버
  const gnb = globalHeader.querySelector('.gnb');
  const gnbItems = globalHeader.querySelectorAll('.gnb a');
  const lnbs = globalHeader.querySelectorAll('.lnb');

  [...gnbItems].forEach(item => {
    item.addEventListener('mouseenter', hoverLnb);
  });
  globalHeader.addEventListener('mouseleave', activeLnb);

  function hoverLnb() {
    const hoverIndex = [...event.target.parentElement.children].indexOf(event.target);
    lnbs.forEach(lnb => lnb.classList.remove('is_active'));
    lnbs[hoverIndex].classList.add('is_active');
  }

  function activeLnb() {
    const activeIndex = [...gnbItems].indexOf(gnb.querySelector('.is_active'));
    lnbs.forEach(lnb => lnb.classList.remove('is_active'));
    lnbs[activeIndex].classList.add('is_active');
  }
})();
