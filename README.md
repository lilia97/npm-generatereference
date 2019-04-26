# npm-generatereference

-   This enables the user to generate a unique identifier/reference.
-   The result is a concatenation of a random string and the date and time.
-   It is possible to change the number of characters of the random string.
-   The result has also a random color code (from 92 colors).
-   This can also allow the user to update prices due to taxation or to sales.
-   It also allows to sum the total of prices of purcahsed items.

## Usage
```javascript

color() //to get a random color
reference() //to generate the unique string
tax(price, tax%) //to update the price value after taxation
sale(price, disocunt%) //to update the price value after discounts/sales
total(array) //to calculate the sum of the prices
