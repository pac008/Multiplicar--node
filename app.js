const argv   = require('./config/yargs').argv;
const colors = require('colors/safe');
const { crearArchivo, listarTablas } = require('./multiplicar/multiplicar');


//console.log(argv.limite);

let comando = argv._[0];

switch (comando) {
        case 'listar':
                listarTablas(argv.base,argv.limite);
                break;
        case 'crear': 
                
                crearArchivo(argv.base,argv.limite)
                            .then( archivo => console.log(`Archivo creado:`, colors.green(archivo)))
                            .catch(error => console.log(error)); 
                break;

        default:
                console.log('Comando no reconocido');
                break;
}



/* base = argv.split('=')[1];
console.log(base);

 */