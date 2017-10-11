function Selector() {

  var foodSelect = document.getElementsByClassName('foodButton')
  foodSelect[0].addEventListener('click', selected)
  foodSelect[1].addEventListener('click', selected)
  foodSelect[2].addEventListener('click', selected)
  foodSelect[3].addEventListener('click', selected)
  foodSelect[4].addEventListener('click', selected)

  function selected(event) {
    for (var i = 0; i < foodSelect.length; i++) {
      foodSelect[i].classList.remove('brown');
    }
    event.target.className += ' brown'
  }
}

window.addEventListener('load', Selector(), false);

//counter reset
function resetQuantity() {
  $(".quantity").val(1);
}
