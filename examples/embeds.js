const hackmdToHtml = require('../dist/main.js')

let markdown = `
# Videos Are Cool :movie_camera:

Awesome video time!

{%youtube kJQP7kiw5Fk %}
`

let html = hackmdToHtml(markdown)

console.log(html)
