
const foodSelect = document.getElementsByClassName('btn');
  foodSelect[0].addEventListener('click', changeHighlight)
  foodSelect[1].addEventListener('click', changeHighlight)
  foodSelect[2].addEventListener('click', changeHighlight)
  foodSelect[3].addEventListener('click', changeHighlight)
  foodSelect[4].addEventListener('click', changeHighlight)
function changeHighlight(event) {
    event.preventDefault();
    event.target.className += ' black'
}
