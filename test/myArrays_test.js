'use strict'

const myArrays = require('../src/myArrays');
const chalk = require('chalk');

describe(chalk.blue('I have a learning module to help my understanding of arrays and the map functionality in JS'), () => {
  describe(chalk.magenta('foreach functionality'), () => {
    it('Multiple all elements in an array by 2, return updated array', ()=>{
        const originalArr = [1, 2, 3, 4, 5];
        const multiplier = 2;
        expect(myArrays.multiply(originalArr, multiplier)).to.deep.equal([2,4,6,8,10]);
    });
    it('Multiple all elements in an array by 3, return updated array', ()=>{
      const originalArr = [1, 2, 3, 4, 5];
      const multiplier = 3;
      expect(myArrays.multiply(originalArr, multiplier)).to.deep.equal([3,6,9,12,15]);
    });
    it('Multiple all elements in an array by 5, using a callback function ', () =>{
      const originalArr = [2,4,8,12];
      expect(myArrays.multiplyWithCallBackFunction(originalArr, myArrays.fiveTimes)).to.deep.equal([10,20, 40, 60]);
    });
    it('Uppercase all elements in an given array, using a callback function ', () =>{
      const originalArr = ['p','a','u','l'];
      expect(myArrays.multiplyWithCallBackFunction(originalArr, myArrays.convertToUpperCase)).to.deep.equal(['P','A', 'U', 'L']);
    });
  });
  describe(chalk.magenta('Map functionality'), () =>{
    it('uppercase all elements in array, return updated array', () => {
      const originalArr = ['paul', 'cavanagh', 'donegal', 'local'];
      expect(myArrays.updatedMultiplyByMap(originalArr)).to.deep.equal(['PAUL','CAVANAGH', 'DONEGAL', 'LOCAL']);
    });
    it('given a shopping list, return a numbered shopping list', () => {
      const shoppingList = ['bread', 'milk', 'chocolate', 'cola'];
      expect(shoppingList.map(myArrays.multiplyByIndex)).to.deep.equal(['1. bread', '2. milk', '3. chocolate', '4. cola']);
    });
    it('tesing a function inside a map', () => {
      const shoppingList = ['bread', 'milk', 'chocolate', 'cola'];
      expect(myArrays.multiplyWithFunctionInsideMap(shoppingList)).to.deep.equal(['1. bread', '2. milk', '3. chocolate', '4. cola']);
    });
  });
});

describe(chalk.blue('I have a learning module to help my understanding of arrays and the map functionality in JS'), () => {
  describe(chalk.magenta('Filter functionality'), () =>{
    it('given a list of numbers, return an array with number greater/equal to 5', function (){
      const myArray = [1,5,3,2,6,2,7,8];
      expect(myArrays.greaterThan(myArray, 5)).to.deep.equal([5,6,7,8]);
    });
    it('given a list of numbers, return an array with number greater than a specified value', function (){
      const myArray = [1,5,3,2,6,2,7,8,4];
      expect(myArrays.greaterThan(myArray, 3)).to.deep.equal([5,3,6,7,8,4]);
    });
    it('given a list of string, return an array of strings whose lengths is greater than 3', ()=>{
      const strArr = ['Paul', 'DOD', 'BAT', 'ANETTE', 'SUGAR'];
      expect(strArr.filter(myArrays.longerThanThree)).to.deep.equal(['Paul', 'ANETTE', 'SUGAR']);
    });
  });
});

