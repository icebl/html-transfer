/**
 * Entry file
 * 
 * Implementation originally from Twitter's Hogan.js:
 * https://github.com/twitter/hogan.js/blob/master/lib/template.js#L325-L335
 *
 * 
 */

const escape = require('./src/escape')


// explose
module.exports = {
	...escape,
}