var { reference, color, tax, sale, total } = require("./index");
var productsToBuy = [12, 6, 90, 40.95];
var sum;
for (var i = 0; i < productsToBuy.length; i++) {
    console.log("Original price: " + productsToBuy[i]);

    //here you can apply the tax percentage on the introduced prices
    productsToBuy[i] = tax(productsToBuy[i], 20);
    console.log("After tax price: " + productsToBuy[i]);

    //here you can apply the discount wanted on the introduced prices
    productsToBuy[i] = sale(productsToBuy[i], 50);
    console.log("After sale price: " + productsToBuy[i] + '\n');
}

console.log("The updated prices are: " + productsToBuy);

//here you can see the sum of the total purchase
sum = total(productsToBuy);
console.log("The total price is: " + sum);

//the unique string is generated using reference() and it has a random color
console.log("The reference of your transaction is: " + reference() + "your color is: " + color());

