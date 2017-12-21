'use strict'
/* 
  A different way of discussing 'this' in JS

  http://2ality.com/2017/12/alternate-this.html
  
*/

const my = require('../src/myFunc');
const chalk = require('chalk');

describe(chalk.blue('Understanding this in JS function'), () => {
  it('Simple Function', () => {
    expect(my.add(3,5)).to.be.equal(8);
    expect(my.add(2,3, undefined)).to.be.equal(5);
    expect(my.add(undefined,2,3)).to.be.NaN;
  });
  it('Inner Functions this', () => {
    my.outer();
    my.outerX();
  })
});
