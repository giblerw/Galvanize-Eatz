// function Order(){
//     this.items = [];
// }


var selectedFoodButton = document.getElementsByClassName('add-cart');

addButton = selectedFoodButton[0].addEventListener('click', function(event) {
  event.preventDefault();
    addFoodToCart();
    // addPriceToCart();
    // updateTotals();
    resetQuantity();

})

  function addFoodToCart() {
    var selectedFoodObject = document.getElementsByClassName('brown');
    var selectedTitle = selectedFoodObject[0];
    h3Tag = selectedTitle.innerHTML;
    var cartEl = document.getElementsByClassName('cartAdditions')[0];
    var multiply = document.getElementsByClassName('quantity')[0].value;
// loop append
    for (var i = 0; i < multiply; i++) {

      var cartTitleEl = document.createElement('h3');
      cartTitleEl.append(h3Tag);
      cartEl.append(cartTitleEl);

}
    return cartEl;
}
//counter reset
function resetQuantity() {
  document.getElementsByClassName('quantity')[0].value = 1;
}

  //   newCartItem.innerHTML = pTag



// var cartButton = document.getElementsByClassName('add-cart');
// cartButton[0].addEventListener('click', updateCart)  {
//     function updateCart(){
//         event.preventDefault();
//         var shoppingCartDiv = document.getElementsByClassName('cart')[0];
//         var selectedMeal = document.getElementsByClassName('btn brown');
//         console.log(selectedMeal);
//         console.log(shoppingCartDiv);
//     }
// });
    // var wantedFood =
    //
    //   if (wantedFood.legnth > 0) {
    //     for (var i = 0; i < wantedFood.length; i++) {
    //       console.log(wantedFood[i]);
    //     }
    //   }
//creates an order from selected items
    // for (var i = 0; i < order.items.length; i++){
    //     orderItem = new OrderItem(order.items[i].itemName, order.items[i].itemPrice);
    //     tableBody.append(orderItem);
    // }
