'use strict'
/* 
    currying is a way of constructing functions that allows partial application of a function’s arguments. 
    What this means is that you can pass all of the arguments a function is expecting and get the result, 
    or pass a subset of those arguments and get a function back that’s waiting for the rest of the arguments. 
    It really is that simple

    https://www.sitepoint.com/currying-in-functional-javascript/
*/

function simpleMethod(){
    return 'paul';
}

function greet (greeting,name){
    return greeting + ", " + name;
}

function greetCurried(greeting){
    return function (name){
        return greeting + ", " + name;
    }
}

function greetDeeplyCurried(greeting){
    return function(separtor){
        return function(emphasis){
            return function(name){
                return greeting+separtor+name+emphasis;
            };
        }
    }
}

function greeting(greeting, separator, emphasis, name){
    return greeting+separator+name+emphasis;
};

function greetDeeplyCurriedFatArrow(greeting){
    return (separtor) => {
        return (emphasis) => {
            return (name)=> {
                return greeting+separtor+name+emphasis;
            };
        };
    };
};

function curryIt(uncurried){
    const parameters = Array.prototype.slice.call(arguments, 1);
    return function () {
        return uncurried.apply(this, parameters.concat(
            Array.prototype.slice.call(arguments, 0)
        ));
    };
};


module.exports = {
    simpleMethod,
    greet,
    greetDeeplyCurried,
    greetDeeplyCurriedFatArrow,
    greetCurried,
    greeting,
    curryIt
};