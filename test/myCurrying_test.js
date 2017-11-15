'use strict'

const myCurrying = require('../src/myCurrying');
const chalk = require('chalk');

describe (chalk.blue('I have a learning module for currying'), function(){
    it('a simple test for returning a string', function (){
        expect(myCurrying.simpleMethod()).to.be.equal('paul');
    });

    it('calls greet function, return a greeting', function (){
        expect(myCurrying.greet('hello', 'paul')).to.be.equal('hello, paul');
    });

    it('calls greet curried function, return a greeting', function (){
        const greetHello = myCurrying.greetCurried('hello');
        expect(greetHello('paul')).to.be.equal('hello, paul');
        expect(greetHello('david')).to.be.equal('hello, david');
        expect(myCurrying.greetCurried('GoodDay')('Paddy')).to.be.equal('GoodDay, Paddy');
    });

    it('calls deeply curried function, return a greeting', function(){
        const greetAwkardly = myCurrying.greetDeeplyCurried('Hello')('....')('?');
        expect(greetAwkardly('Ruby')).to.be.equal('Hello....Ruby?');

    });

    it('calls deeply curried fat arrow function, return a greeting', function(){
        const greetAwkardly = myCurrying.greetDeeplyCurriedFatArrow('Hello')('....')('?');
        expect(greetAwkardly('Ruby')).to.be.equal('Hello....Ruby?');

        const sayHello = myCurrying.greetDeeplyCurriedFatArrow('Hello')(',');
        expect(sayHello('.')('John')).to.be.equal('Hello,John.');

        const askHello = sayHello('?')
        expect(askHello('Eddie')).to.be.equal('Hello,Eddie?')
    });

    it('calls the curryIt function, return a greeting', function (){        
        const greetHello = myCurrying.curryIt(myCurrying.greeting, "Hello", ", ", "."); 
        expect(greetHello('Heidi')).to.be.equal('Hello, Heidi.');
        expect(greetHello('Paul')).to.be.equal('Hello, Paul.');
    });

});

