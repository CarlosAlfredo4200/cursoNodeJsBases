// Escribe un programa que utilice una única operación sincronizada del sistema de ficheros a la consola(stdout), similar a ejecutar cat fichero | wc -l.

const fs = require('fs'); 
const filename = process.argv[2];

const file = fs.readFileSync(filename);//buffers
const content = file.toString();
const lines = content.split('\n'.length);
console.log(lines);