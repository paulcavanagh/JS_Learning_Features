/* 
Recursion in JavaScript with ES6, destructuring and rest/spread

The latest ECMA standard for JavaScript (ECMAScript 6) makes JavaScript 
more readable by encouraging a more declarative style with functional constructs 
and new operators.

https://hackernoon.com/recursion-in-javascript-with-es6-destructuring-and-rest-spread-4b22ae5998fa
*/

'use strict'

function something([ first, ...rest ]) {  
  return {
    first: first,
    rest: rest
  };
};

function somethingES5(arr){
  var first = arr[0];
  var rest = arr.slice(1);
  return {
    first: first,
    rest: rest
  };
}

function head([ head, ...tail ]) { 
  return head;
}
function tail([ head, ...tail ]) {
  return tail;
}

module.exports = {
  something,
  somethingES5,
  head,
  tail
};