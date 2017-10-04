var touchstartX = 0;
var touchendX = 0;
var like = document.getElementById('like');
var dislike = document.getElementById('dislike');

var careerCard = document.querySelector('.career-card');

careerCard.addEventListener('touchstart', function (event) {
  touchstartX = event.changedTouches[0].screenX;
});

careerCard.addEventListener('touchend', function (event) {
  touchendX = event.changedTouches[0].screenX;
  handleSwipe();
});

function handleSwipe () {
  var swiped = 'swiped: ';
  if (touchendX < touchstartX) {
    console.log(swiped + 'left!');
  }
  if (touchendX > touchstartX) {
    console.log(swiped + 'right!');
  }
}

like.addEventListener('click', function () {
  console.log('click like');
});

dislike.addEventListener('click', function () {
  console.log('click dislike');
});
