const hackmdToHtml = require('../dist/main.js')

let markdown = `
# Nizar's Draft

:dart:

*$blah* *$blah*

![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

<iframe height="265" style="width: 100%;" scrolling="no" title="&quot;Cropping&quot; an Image With CSS" src="//codepen.io/nizaroni/embed/pKmBag/?height=265&theme-id=light&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/nizaroni/pen/pKmBag/'>&quot;Cropping&quot; an Image With CSS</a> by Nizar Khalife
  (<a href='https://codepen.io/nizaroni'>@nizaroni</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

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
