
//  html-escape
function htmlEscape(htmlstr) {
	const result = htmlstr.replace(/<|>|"&/g, (match) => {
		switch (match) {
			case '<':
				return '&lt;'
			case '>':
				return '&gt;'
			case '"':
				return '&quot;'
			case '&':
				return '&amp;'
		}
	})

	return result
}



//  html-unescape
function htmlUnEscape(str) {
	const result = str.replace(/&lt;|&gt;|&quot;|&amp;/g, (match) => {
		switch (match) {
			case '&lt;':
				return '<'
			case '&gt;':
				return '>'
			case '&quot;':
				return '"'
			case '&amp;':
				return '&'
		}
	})


	return result
}


// explose
module.exports = {
	htmlEscape,
	htmlUnEscape,
}