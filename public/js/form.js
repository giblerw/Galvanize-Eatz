
const foodSelect = document.getElementsByClassName('btn');
  foodSelect[0].addEventListener('click', changeHighlight)
  foodSelect[1].addEventListener('click', changeHighlight)
  foodSelect[2].addEventListener('click', changeHighlight)
  foodSelect[3].addEventListener('click', changeHighlight)
  foodSelect[4].addEventListener('click', changeHighlight)

function changeHighlight(event) {
  event.preventDefault();
  event.target.className += ' brown'

var foodDeSelect = document.getElementsByClassName('brown');
  foodDeSelect[0].addEventListener('click', changeHighlightBack)
  foodDeSelect[1].addEventListener('click', changeHighlightBack)
  foodDeSelect[2].addEventListener('click', changeHighlightBack)
  foodDeSelect[3].addEventListener('click', changeHighlightBack)
  foodDeSelect[4].addEventListener('click', changeHighlightBack)

function changeHighlightBack(event) {
  event.target.classList.remove('brown');
  }
}

// var addMenuItem = document.getElementsByClassName('add-item');
  // addMenuItem.addEventListener('load', function())
