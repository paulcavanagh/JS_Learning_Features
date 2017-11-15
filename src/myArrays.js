'use strict'

function multiply(array,multiplier){
  const newArray = [];
  array.forEach(element => {
    newArray.push(element * multiplier);
  });
  return newArray;
};

function multiplyWithCallBackFunction(arr, multiplyFunction) {
  var newArr = []; 
  for(var i = 0; i < arr.length; i++) {
      newArr[i] = multiplyFunction(arr[i]);
  }
  return newArr;
};
 
function fiveTimes(element){
  return element * 5;
};

function convertToUpperCase(elment){
  return elment.toUpperCase();
};

function updatedMultiplyByMap(arr){
  var newArray = arr.map(convertToUpperCase);
  return newArray;
};

function multiplyByIndex(item, index) {
  return (index + 1) + '. ' + item;
}

function multiplyWithFunctionInsideMap(array){
  return array.map(function (item, index) {
    return (index + 1) + '. ' + item;
  }); 
};

module.exports = {
  'multiply': multiply,
  'multiplyWithCallBackFunction' : multiplyWithCallBackFunction,
  'fiveTimes' : fiveTimes,
  'convertToUpperCase' :convertToUpperCase,
  'updatedMultiplyByMap' :updatedMultiplyByMap,
  'multiplyByIndex' : multiplyByIndex,
  'multiplyWithFunctionInsideMap' : multiplyWithFunctionInsideMap
}