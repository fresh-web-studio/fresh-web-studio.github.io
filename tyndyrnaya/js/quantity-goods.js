var numCount = document.getElementById('num_count');
var plusBtn = document.getElementById('button_plus');
var minusBtn = document.getElementById('button_minus');
var numCount_sauce = document.getElementById('num_count_sauce');
var plusBtn_sauce = document.getElementById('button_plus_sauce');
var minusBtn_sauce = document.getElementById('button_minus_sauce');
var numCount_fruit_drink = document.getElementById('num_count_fruit_drink');
var plusBtn_fruit_drink = document.getElementById('button_plus_fruit_drink');
var minusBtn_fruit_drink = document.getElementById('button_minus_fruit_drink');
var numCount_cake = document.getElementById('num_count_cake');
var plusBtn_cake = document.getElementById('button_plus_cake');
var minusBtn_cake = document.getElementById('button_minus_cake');

plusBtn.onclick = function() {
    var qty = parseInt(numCount.value);
    qty = qty + 1;
    numCount.value = qty;
}
minusBtn.onclick = function() {
    var qty = parseInt(numCount.value);
    qty = qty - 1;
    numCount.value = qty;
}

plusBtn_sauce.onclick = function() {
    var qty = parseInt(numCount_sauce.value);
    qty = qty + 1;
    numCount_sauce.value = qty;
}
minusBtn_sauce.onclick = function() {
    var qty = parseInt(numCount_sauce.value);
    qty = qty - 1;
    numCount_sauce.value = qty;
}

plusBtn_fruit_drink.onclick = function() {
    var qty = parseInt(numCount_fruit_drink.value);
    qty = qty + 1;
    numCount_fruit_drink.value = qty;
}
minusBtn_fruit_drink.onclick = function() {
    var qty = parseInt(numCount_fruit_drink.value);
    qty = qty - 1;
    numCount_fruit_drink.value = qty;
}

plusBtn_cake.onclick = function() {
    var qty = parseInt(numCount_cake.value);
    qty = qty + 1;
    numCount_cake.value = qty;
}
minusBtn_cake.onclick = function() {
    var qty = parseInt(numCount_cake.value);
    qty = qty - 1;
    numCount_cake.value = qty;
}