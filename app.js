const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
const colors = require('colors');

console.clear();

console.log(argv);

crearArchivo(argv.b, argv.l, argv.h)
  .then( nombreArchivo => {
    console.log(`${nombreArchivo} Creada`.blue)
  })
  .catch( error => {
    console.log(error)
  })