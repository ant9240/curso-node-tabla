const argv = require('yargs')
      .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la base de Multiplicar'
      })
      .option('l', {
        alias: 'listar',
        type: 'boolean',
        demandOption: false,
        default: false,
        describe: 'Muestra la Tabla en la Consola'
      })
      .option('h', {
        alias: 'hasta',
        type: 'number',
        demandOption: false,
        describe: 'Determina la cantidad de veces que quieres que se multiplique el número'
      })
      .check( (argv, options) => {
        if (isNaN(argv.b)) {
          throw 'La base tiene que ser un numero'
        }
        return true
      } )
      .argv;

module.exports = argv;