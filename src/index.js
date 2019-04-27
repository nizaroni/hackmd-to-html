const { md } = require('codimd/public/js/extra.js')
const { preventXSS } = require('codimd/public/js/render.js')

function hackmdToHtml(markdown) {
	return preventXSS(md.render(markdown))
}

module.exports = hackmdToHtml
