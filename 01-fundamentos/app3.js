const fs = require('fs');
const content = fs.readFileSync('README.md', 'utf8');

const words = content.split(' ');
const reactWordCount = content.match(/React/ig ?? []).length;
const reactWordCount2 = words.filter((word) => word.toLocaleLowerCase().includes('react')).length;


console.log('Palabras', words.length)
console.log('Palabras React', reactWordCount)
console.log('Palabras React 2', reactWordCount2)