const escape = require('../../index')

const htmlstr = '<h2 title="Hello World !">this is H2 <span>tag</span> and i <span style="color: red;">love</span> it.'

const foo = escape.htmlEscape(htmlstr)
console.log(foo);


const str = escape.htmlEscape(htmlstr)

const foo2 = escape.htmlUnEscape(str)
// console.log(foo2);