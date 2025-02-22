var Slider = function (id, _web, _tab, _mobile, spacing) {
  var containerWidth = 0;
  var sliderItemWidth = 0;
  var totalCount = 0;
  var spacing = spacing || 10;
  var display = _web;
  var left = 0;
  var interval;

  var DOM = {
    container: function (id) {
      var dom = document.querySelector('#' + id);
      dom.className = 's-container';
      dom.style.position = 'relative';
      dom.style.overflow = 'hidden';
      return dom;
    },
    slider: function (container) {
      totalCount = container.children.length;

      var dom = document.createElement('div');
      dom.className = 'slider';
      dom.style.position = 'relative';
      dom.style.overflow = 'hidden';
      dom.style.height = '100%';
      dom.style.left = 0;
      dom.style.transition = 'left .5s';
      return dom;
    },
  };

  // DOM 만들기
  var container = DOM.container(id);
  var slider = DOM.slider(container);
  var temp = container.innerHTML;
  container.innerHTML = '';
  slider.innerHTML = temp;
  container.appendChild(slider);
  var items = document.querySelector('#' + id + ' .slider').children;
  for (var i = 0; i < items.length; i++) {
    items[i].style.float = 'left';
    items[i].style.height = '100%';
    items[i].style.width = sliderItemWidth - spacing + 'px';
    items[i].style['margin-right'] = spacing + 'px'; // 간격
  }

  // 화면 사이즈 수정시 발생하는 이벤트

  // 반응형 디스플레이 갯수 조절
  var isResponsive = _tab != undefined;
  if (isResponsive) {
    window.onresize = resize;
  }
  resize();

  function resize() {
    left = 0;
    document.querySelector('#' + id + ' .slider').style.left = left + 'px';

    var innerWidth = window.innerWidth;
    if (innerWidth >= 1024) {
      setDisplayCount(_web);
    } else if (innerWidth < 1024 && innerWidth >= 768) {
      setDisplayCount(_tab);
    } else if (innerWidth < 768) {
      setDisplayCount(_mobile);
    }

    if (change === 0) {
      let value = translate_value + (window.innerWidth - display_ul_width);
      ul.style.transform = `translateX(${value}px)`;
      // translate_value = 0;
    }
  }

  // 디스플레이 갯수 설정 함수
  function setDisplayCount(count) {
    display = count;

    containerWidth = container.offsetWidth + spacing;
    sliderItemWidth = containerWidth / display;

    document.querySelector('#' + id + ' .slider').style.width = totalCount * sliderItemWidth + spacing * totalCount + 'px';
    var items = document.querySelector('#' + id + ' .slider').children;
    for (var i = 0; i < items.length; i++) {
      items[i].style.width = sliderItemWidth - spacing + 'px';
    }
  }

  let count;
  let prev_count = 0;
  let next_count;

  return {
    setDisplayCount: setDisplayCount,
    prev: function () {
      if (innerWidth >= 1024) {
        count = 4;
      } else if (innerWidth < 1024 && innerWidth >= 768) {
        count = 3;
      }
      if (next_count === 0) {
        document.querySelector('.next').style.display = 'block';
      }
      left += sliderItemWidth * count;

      var limit = 0;

      if (left > limit) {
        left = limit;
        document.querySelector('.prev').style.display = 'none';
        prev_count = 0;
      }
      document.querySelector('#' + id + ' .slider').style.left = left + 'px';
    },

    next: function () {
      if (innerWidth >= 1024) {
        count = 4;
      } else if (innerWidth < 1024 && innerWidth >= 768) {
        count = 3;
      }
      left -= sliderItemWidth * count;
      var limit = -1 * sliderItemWidth * (totalCount - display);

      next_count = 1;
      if (prev_count === 0) {
        document.querySelector('.prev').style.display = 'block';
        prev_count = 1;
      }
      if (left < limit) {
        left = limit;
        document.querySelector('.next').style.display = 'none';
        next_count = 0;
      }

      document.querySelector('#' + id + ' .slider').style.left = left + 'px';
    },
  };
};

var slider = new Slider('slider', 4, 3, 1, 20);
