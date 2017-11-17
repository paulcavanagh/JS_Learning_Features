/* 
Recursion in JavaScript with ES6, destructuring and rest/spread
https://hackernoon.com/recursion-in-javascript-with-es6-destructuring-and-rest-spread-4b22ae5998fa
*/

'use strict'

const chalk = require('chalk');
const myRecursion = require('../src/myRecursion');

describe(chalk.blue('Recursion in JavaScript with ES6, destructuring and rest/spread'), () =>{
  describe(chalk.magenta('Destructuring, allows you to extract data from one variable to another by using structure'), () =>{
   it('using arrays', () => {    
     const [first, second] = [1,2,3,4];
     expect(second).to.equal(2);
     expect(first).to.be.equal(1);
    });
   it('skip some members of the array on the right-hand side of the operation', () => {
     const[ first, , third, fourth ] = [ 1, 2, 3, 4 ];
     expect(first).to.be.equal(1);
     expect(third).to.be.equal(3);
     expect(fourth).to.be.equal(4);
    });
   it('back-ported to the equivalent ES5', () => {
    const arr = [ 1, 2, 3, 4 ];
    expect(arr[0]).to.be.equal(1);
    expect(arr[1]).to.be.equal(2);
    expect(arr[3]).to.be.equal(4);
    });
  });
  describe(chalk.blue('Rest notation ... on Arrays'), () => {
    it('simple example using the Rest notation', () => {
      const [ first, ...notFirst ] = [ 1, 2, 3, 4 ];
      expect(first).to.be.equal(1);
      expect(notFirst).to.deep.equal([2,3,4]);    
    });
    it('updated naming convention', () =>{
        const [ first, second, ...rest ] = [ 1, 2, 3, 4 ]
        expect(first).to.be.equal(1);
        expect(second).to.be.equal(2);
        expect(rest).to.deep.equal([3,4]);    
    });
    it('The equivalent in ES5', () => {
      const arr = [ 1, 2, 3, 4 ];
      const first = arr[0];
      const rest = arr.slice(1);
      expect(first).to.be.equal(1);
      expect(rest).to.deep.equal([2, 3,4]);  
    });
  });
  describe(chalk.blue('Parameter destructuring'), () => {
    it('destructuring on the parameters of a function definition', () => {
      const result = myRecursion.something([1, 2, 3]);
      expect(result).to.deep.equal({ first: 1, rest: [ 2, 3 ] });
    });
    it('destructuring on the parameters of a function definition Equivalent ES5', () => {
      const result = myRecursion.somethingES5([1, 2, 3]);
      expect(result).to.deep.equal({ first: 1, rest: [ 2, 3 ] });
    });
  describe(chalk.blue('Spread'), () => {
    it('es6 spread operator for arrays,', () => {
        const arr1 = [1,2,3];
        const arr2 = [...arr1];
        expect(arr2).to.deep.equal([1,2,3]);   
      });
      it('es5 equivalent of spread operator for arrays,', () => {
        const arr = [ 1, 2, 3 ];
        const newArr = [].concat(arr);
        expect(newArr).to.deep.equal([1,2,3]);
      });
      it('Pending an Array', () => {
        const arr = [1,2,3];     
        const prependArr = [...arr, 3, 2, 1];
        const withAppend = [ 3, 2, 1, ...arr ];
        expect(prependArr).to.deep.equal([1,2,3,3,2,1]);
        expect(withAppend).to.deep.equal([3,2,1,1,2,3]);
      });
      it('Pending two Arrays', () => {
        const arr = [1,2,3];     
        const arr2 = [4,5,6];
        const newArr = [...arr, ...arr2 ];
        expect(newArr).to.deep.equal([1,2,3,4,5,6]);
      });
    }); 
  });
});