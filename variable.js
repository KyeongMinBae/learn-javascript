// 1. Use ssrtic
// added in ES 5
// use this for Vanila Javascript.
'use strict';

//2. Variable
// let (added in ES6)
let globalName = 'global name';
{
    let name = 'ellie';
    console.log(name);
    name = 'hello';
    console.log(name);
    console.log(globalName);
}
console.log(name);
console.log(globalName);

// var (don't ever use this!)
// var hoisting (move declaration from bottom to top)
// has no block scope
{
    age = 4;
    var age;
}
console.log(age);

// 3. Constant
// favor immutable data type always for few reasons;
// - secrity
// - thread safety
// - reduce human mistakes
const dayInWeek = 7;
const maxNumber = 5;

// 4. Variable types
// privitive, single item: number, string, boolean, null, undefinedn, symbol
// object, box container
// function, first-class function

const count = 17; // integer
const size = 17.1; // decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// number - special numeric values: infinity, -infinity, NaN
const infinity = 1 / 0;
const negativeinfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeinfinity);
console.log(nAn);

// bigInt (fairly new, don't use it yet)
const bigInt = 123456789012345678901234567890n;
console.log(`vaule: ${bigInt}, type: ${typeof bigInt}`);

// string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello' + brendan;
console.log(`vaule: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; //template literals (string)
console.log(`vaule: ${helloBob}, type: ${typeof helloBob}`);

// boolean
// false : 0, null, undefined, NaN, ''
// true: any other value
const canRead = true;
const test = 3 < 1; // false
console.log(`vaule: ${canRead}, type: ${typeof canRead}`);
console.log(`vaule: ${test}, type: ${typeof test}`);

// null
let nothing = null;
console.log(`vaule: ${nothing}, type: ${typeof nothing}`);

// undefined
let x;
console.log(`vaule: ${x}, type: ${typeof x}`);

// symbol, create unique identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbo1 === symbol2);
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); // true
console.log(`vaule: ${symbol1.description}, type: ${typeof symbol1}`);

// object, real-life object, data structure
const ellie = { name: 'ellie', age: 20 };
// 5. Dynamic typing: dynamically typed language
let text = 'hello';
console.log(`vaule: ${text}, type: ${typeof text}`);
text = 1;
console.log(`vaule: ${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`vaule: ${text}, type: ${typeof text}`);
text = '8' / '2';
console.log(`vaule: ${text}, type: ${typeof text}`);
console.log(text.charAt(0));