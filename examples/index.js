const hackmdToHtml = require('../dist/main.js')

let markdown = `
# Nizar's Draft

:dart:

*$blah* *$blah*

![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

---------------------------------------------------

Boom
----

This is stuff and more stuff.

[Maybe a link.](https://giphy.com)

:::info
:memo: This is an **alert**.
:::

\`\`\`js
console.log("hello");
\`\`\`
`

let html = hackmdToHtml(markdown)

console.log(html)
