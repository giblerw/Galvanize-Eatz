const getURL = 'https://galvanize-eats-api.herokuapp.com/menu';
const postURL = 'https://galvanize-eats-api.herokuapp.com/orders';

function connectAPI() {
fetch(getURL)
  .then(function(response) {
    return response.json()
    .then(function(e) {
      var menuArray = e.menu
// Create Menu Items
function menuCreation(menu){
    var foodTitleHB = document.getElementsByClassName('hb')[0];
    var foodTitleCB = document.getElementsByClassName('cb')[0];
    var foodTitleCP = document.getElementsByClassName('cp')[0];
    var foodTitlePP = document.getElementsByClassName('pp')[0];
    var foodTitleSP = document.getElementsByClassName('sp')[0];

    var foodPriceHB = document.getElementById('priceHB');
    var foodPriceCB = document.getElementById('priceCB');
    var foodPriceCP = document.getElementById('priceCP');
    var foodPricePP = document.getElementById('pricePP');
    var foodPriceSP = document.getElementById('priceSP');
//Hamburger
      var titleHeadHB = menuArray['2'].name;
          foodTitleHB.innerHTML = titleHeadHB
        var phb = menuArray['2'].price;
          foodPriceHB.innerHTML = `$` + phb;
//Cheesebuger
      var titleHeadCB = menuArray['0'].name;
          foodTitleCB.innerHTML = titleHeadCB
        var pcb = menuArray['0'].price;
          foodPriceCB.innerHTML = `$` + pcb
//Cheese Pizza
      var titleHeadCP = menuArray['1'].name;
          foodTitleCP.innerHTML = titleHeadCP
        var pcp = menuArray['1'].price;
          foodPriceCP.innerHTML = `$` + pcp
//Pepperoni Pizza
      var titleHeadPP = menuArray['3'].name;
          foodTitlePP.innerHTML = titleHeadPP
        var ppp = menuArray['3'].price;
          foodPricePP.innerHTML = `$` + ppp
//Sausage Pizza
      var titleHeadSP = menuArray['4'].name;
          foodTitleSP.innerHTML = titleHeadSP
        var psp = menuArray['4'].price;
          foodPriceSP.innerHTML = `$` + psp
      }
window.addEventListener('load', menuCreation(), false);
    })
  })
}
window.addEventListener('load', connectAPI(), false);
