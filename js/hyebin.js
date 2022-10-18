const slidebtn = document.querySelector('#right_btn');
const category = document.querySelector('.best_category_list');

slidebtn.addEventListener('click', () => {
  console.log('hi');
  moveSlide();
});

function moveSlide() {
  console.log('jdd');
  document.querySelector('.best_category_list').style.transform = 'translateX(-30%)';
}
