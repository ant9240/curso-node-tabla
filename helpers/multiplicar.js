const fs = require('fs');
const colors = require('colors');

const crearArchivo = async(base, listar = true, hasta=10) => {

  try {
    
    let salida = '';
    for (let i = 1; i <= hasta; i++) {
      
      salida +=  `${base}`.yellow + ' x '.red + `${i}`.green + ' = '.cyan + `${base * i} \n`.brightWhite;
      
    }

    if(listar){
      console.log('==========='.green);
      console.log(`TABLA DEL ${base}`.rainbow.bgGray);
      console.log('==========='.green);
      console.log(salida);
    }

    fs.writeFileSync(`./salida/Tabla-del-${base}.txt`, salida);

    return `Tabla-del-${base}.txt`;

  } catch (error) {
    throw error

  }
}

module.exports = {crearArchivo};