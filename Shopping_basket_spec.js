var shoppingBasket = require('./shopping_basket');
var shampoo = require('./items').shampoo;
var moisturiser = require('./items').moisturiser;
var assert = require('assert');

// 1  We need to find the price of a shopping basket. A shopping basket can have multiple items.
describe('Shopping Basket', function(){
  it("should be empty at start", function(){
    shoppingBasket.emptyBasket();
    assert.equal(0, shoppingBasket.total);
  })
});


// 2  10% discount for all shopping baskets over £20

// 3  Certain items are buy one get on free, this should be considered.

// 4  If the customer has a valid discount card then they get and additional 5% off.




// Test drive your objects. Commit after every passing test.