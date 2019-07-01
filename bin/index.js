#!/usr/bin/env node

const fs = require('fs');
const readline = require('readline');

const hackmdToHtml = require('../dist/main.js')

function help() {
  return `Convert hackMD syntax to HTML:

  npx hackmd-to-html MDFILE

  npx hackmd-to-html <MDFILE

  cat MDFILE | npx hackmd-to-html

  echo "# Hello" | npx hackmd-to-html

  npx hackmd-to-html
`;
}

let html;
try {
  let markdown = '';

  function thenMarkdown() {
    html = hackmdToHtml(markdown);

    console.log(html);
    process.exit(0);
  }

  //
  // stdin > markdown variable
  //
  process.stdin.setEncoding('utf8');
  process.stdin.on('readable', () => {
    let chunk;
    while ((chunk = process.stdin.read()) !== null) {
      markdown += chunk;
    }
  });
  process.stdin.on('end', () => {
    thenMarkdown()
  });

  const argv2 = process.argv[2] && process.argv[2].trim();
  const mdfilepath = argv2 || '-'; // default to '-'

  if (argv2 === '--help' || argv2 === '-h') {
    console.log(help());
    process.exit(0);
  } else if (mdfilepath === '-') {
    var rl = readline.createInterface({
      input: process.stdin,
      prompt: ''
    });

    rl.prompt();
  } else {
    markdown = fs.readFileSync(mdfilepath, "utf8");
    thenMarkdown();
  }
} catch(e) {
  console.log(help());

  console.log(e);
  process.exit(1);
}