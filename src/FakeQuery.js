// Fake jQuery object
class FakeQuery extends Array {
	constructor(html) {
		// update emoji html before adding to array
		if (html.startsWith('<img')) {
			html = html.replace('/build/emojify.js/dist', 'https://cdnjs.cloudflare.com/ajax/libs/emojify.js/1.1.0')
			html = html.replace('></img>', '/>')
		}

		// add an object with outerHTML to array
		super({ outerHTML: html })

		// setup a variable for later conditions
		if (html.includes('youtube')) {
			this.type = 'youtube'
		}
	}

	// this will add the video ID
	attr(name, value) {
		if (this.type === 'youtube') {
			// create iframe HTML with video ID
			const src = `src="https://www.youtube.com/embed/${value}"`
			const iframe = `<iframe ${src} frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>`

			// add iframe HTML to div
			this[0].outerHTML = this[0].outerHTML.replace('><', `>${iframe}<`)
		}
	}

	// append method as a NOOP
	append() {}
}

module.exports = FakeQuery
