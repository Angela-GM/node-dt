const fs = require('fs'); //usar fs de nodejs

const data = fs.readFileSync('Readme.md', 'utf8'); //leer el arvhivo readme.md

const newData = data.replace(/React/ig, 'Angular'); //reemplazar del archivo readme (data) la palabra React por Angular

fs.writeFileSync('Readme-angular.md', newData); //crear un nuevo archivo con el contenido del readme(data) modificiado (newData)

