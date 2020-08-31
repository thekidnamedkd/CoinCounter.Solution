//take an input of currency i.e $4.99 => 19 quarters 2 dimes 4 pennies
//output optimized change for inputted currency

//4.99 = TOTAL

const quarters = 0.25; //
const dimes = 0.1;
const nickels = 0.05;
const pennies = 0.01;

const counter = function (total) {
  total / quarters;
  remaining1 / dimes;
  remaining2 / nickels;
  remaining / pennies;
};

//multiply "total" given currency by 100 => "newTotal"
//recursively divide by 25 until base case of: newTotal =< 24
//recursively divide by 10 until base case of: newTotal =< 9
//recursively divide by 5 until base case of: newTotal =< 4
//recursively divide by 1 until base case of: newTotal = 0

export const amountToCoins = (amount, coins) => {
  if (amount === 0) {
    return [];
  } else {
    if (amount >= coins[0]) {
      const left = amount - coins[0];
      return [coins[0]].concat(amountToCoins(left, coins));
    } else {
      coins.shift();
      return amountToCoins(amount, coins);
    }
  }
};
console.log(amountToCoins(46, [25, 10, 5, 1]));

import { amountToCoins } from "./../src/coin-counter.js";

test("verifies that amountToCoins returns quarters", function () {
  expect(amountToCoins(46, [25, 10, 5, 1])).toEqual([25, 10, 10, 1]);
});
