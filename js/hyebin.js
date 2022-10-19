const slidebtnRight = document.querySelector('#right_btn');
const slidebtnLeft = document.querySelector('#left_btn');
const category = document.querySelector('.best_category_list');

slidebtnRight.addEventListener('click', () => {
  // console.log('hi');
  moveSlideRight();
  slidebtnLeft.style.display = 'block';
  slidebtnRight.style.display = 'none';
});

slidebtnLeft.addEventListener('click', () => {
  console.log('hi');
  slidebtnRight.style.display = 'block';
  moveSlideLeft();
  slidebtnLeft.style.display = 'none';
});

function moveSlideRight() {
  console.log('jdd');
  document.querySelector('.best_category_list').style.transform = 'translateX(-30%)';
}

function moveSlideLeft() {
  console.log('jdd');
  document.querySelector('.best_category_list').style.transform = 'translateX(0%)';
}
