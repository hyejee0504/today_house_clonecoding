let translate_value = 0; //이동하는 값 (width)
let click_count = 0;
let now_width = document.documentElement.clientWidth - 24;
const ul = document.querySelector('.container_categoric_product');
let ul_width = ul.scrollWidth;
let display_ul_width = ul.clientWidth;
let prev_count1 = 0;
let next_count1;
let change;

window.onresize = function (event) {
  console.log(1);
  if (change === 0) {
    let value = translate_value + (window.innerWidth - display_ul_width);
    ul.style.transform = `translateX(${value}px)`;
  }
};

function next1() {
  translate_value -= now_width;
  limit1 = -1 * (ul_width - now_width);
  next_count1 = 1;

  if (prev_count1 === 0) {
    document.querySelector('.arrow_left').style.display = 'block';
    prev_count1 = 1;
  }

  if (translate_value < limit1) {
    translate_value = limit1;
    document.querySelector('.arrow_right').style.display = 'none';
    next_count1 = 0;
    change = 0;
  }

  ul.style.transition = 'all 0.5s';
  ul.style.transform = `translateX(${translate_value}px)`;
  console.log(translate_value);
}

function prev1() {
  translate_value += now_width;
  let limit = 0;

  if (next_count1 === 0) {
    document.querySelector('.arrow_right').style.display = 'block';
  }

  if (translate_value > limit) {
    translate_value = limit;
    document.querySelector('.arrow_left').style.display = 'none';
    prev_count1 = 0;
  }

  ul.style.transition = 'all 0.5s';
  ul.style.transform = `translateX(${translate_value}px)`;
  console.log(translate_value);
}
