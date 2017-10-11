//access the shopping cart element


function updateCart(order){
    let cartBody = document.getElementsByClassName('cart')[0];
    cartBody.empty();
//creates an order from selected items
    for (var i = 0; i < order.items.length; i++){
        orderItem = new OrderItem(order.items[i].itemName, order.items[i].itemPrice);
        tableBody.append(orderItem);
    }
