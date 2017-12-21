/*
JavaScript hacks for ES6 hipsters  
https://hackernoon.com/javascript-hacks-for-es6-hipsters-67d633ce8ace
*/

'use strict'

const chalk = require('chalk');

describe(chalk.blue('I have a learning module for Hipster Hacking'), function () {
  it('Array Destructuring to swap values', function () {
    let a = 'pablo', b = 'hello';
    [a, b] = [b, a];
  
    expect(a).to.be.equal('hello');
    expect(b).to.be.equal('pablo');
  });

  it('Debugging Hack', function (){
  
    const a = 5, b = 6, c = 7
    console.log({ a, b, c })
    
  });
  
});