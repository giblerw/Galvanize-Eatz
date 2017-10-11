const getURL = 'https://galvanize-eats-api.herokuapp.com/menu';
const postURL = 'https://galvanize-eats-api.herokuapp.com/orders';

function connectAPI() {
fetch(getURL)
  .then(function(response) {
    return response.json()
    .then(function(e) {
      var menuArray = e.menu
      console.log(menuArray);
// Create Menu Items

function menuCreation(menu){
    var foodTitleCB = document.getElementById('cb');
    var foodTitleHB = document.getElementById('hb');
    var foodTitleCP = document.getElementById('cp');
    var foodTitlePP = document.getElementById('pp');
    var foodTitleSP = document.getElementById('sp');

      var titleHeadCB = menuArray['0'].name;
        foodTitleCB.innerHTML = titleHeadCB
      var titleHeadHB = menuArray['2'].name;
        foodTitleHB.innerHTML = titleHeadHB
      var titleHeadCP = menuArray['1'].name;
        foodTitleCP.innerHTML = titleHeadCP
      var titleHeadPP = menuArray['3'].name;
        foodTitlePP.innerHTML = titleHeadPP
      var titleHeadSP = menuArray['4'].name;
        foodTitleSP.innerHTML = titleHeadSP

      }
window.addEventListener('load', menuCreation(), false);
    })
    })
}

window.addEventListener('load', connectAPI(), false);



// $(document).ready(function(){
//     $.get(getURL, function(menu){
//         menuCreation();
//
//     });
// });
