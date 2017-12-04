/* 
  12 Good JavaScript Shorthand Techniques
  https://hackernoon.com/12-amazing-javascript-shorthand-techniques-fef16cdbc7fe
*/

'use strict'

const chalk = require('chalk');

describe(chalk.blue('12 Good JavaScript Shorthand Techniques'), () =>{
  describe(chalk.magenta('Null, Undefined, Empty Checks Shorthand'), () => {
    it('null value example', ()=>{
     const var1 = null;
     const var2 = var1 || '';
     expect(var2).to.be.equal('');
    });
    it('undefined value example', () =>{
      let variable1 = undefined;
      let variable2 = variable1  || '';
      expect(variable2).to.be.equal ('');
    });
    it('normal value example', () =>{
      let variable1 = 'hi there';
      let variable2 = variable1  || '';
      expect(variable2).to.be.equal ('hi there');
    });    
  });
  describe(chalk.magenta('Object Array Notation Shorthand'), () => {
    it('Longhand', () => {
      let a = new Array();
      a[0] = 'paul';
      a[1] = 'George';
      a[2] = 'Conal';
      expect(a.length).to.be.equal(3);
    });
    it('shorthand', ()=> {
      let a = ['paul', 'George', 'Conal']
      expect(a.length).to.be.equal(3);
    });
  });
});