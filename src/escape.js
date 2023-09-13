
//  html-escape
function htmlEscape(htmlstr) {
	// Null
	if (htmlstr == null) {
    return htmlstr;
  }

	// Enforce String
	if (typeof htmlstr !== "string") {
    htmlstr = String(htmlstr);
  }

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
	// Null
	if (str == null) {
    return str;
  }

	// Enforce String
	if (typeof str !== "string") {
    str = String(str);
  }
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