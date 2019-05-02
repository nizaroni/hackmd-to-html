const FakeQuery = require('./FakeQuery.js')
const emojify = require('emojify.js')

const window = {
	location: {
		pathname: '',
	},
	navigator: {
		userAgent: 'MSIE 9.',
		mimeTypes: {},
	},
	document: Object.create({
		getElementsByTagName: function () {
			return []
		},
	}),
	Cookies: {
		get: function () {},
	},
	$: function (html) {
		return new FakeQuery(html)
	},
	RegExp: global.RegExp,
	serverurl: '',
	emojify,
}

window.$.fn = {}

global.RegExp.escape = escapeRegExp

module.exports = window


// From lodash: https://github.com/lodash/lodash/blob/master/escapeRegExp.js
const reRegExpChar = /[\\^$.*+?()[\]{}|]/g
const reHasRegExpChar = global.RegExp(reRegExpChar.source)

function escapeRegExp(string) {
  return (string && reHasRegExpChar.test(string))
    ? string.replace(reRegExpChar, '\\$&')
    : string
}
