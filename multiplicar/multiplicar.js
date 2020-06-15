//requireds
const fs     = require('fs');
const colors = require('colors');

let listarTablas = (base,limite) => {
        console.log(`Tabla de multiplicar del ${ base } con límite de ${ limite }`.green);
        console.log(`-------------------------`.green);
    for(let i =1 ;i<=limite; i++){
        console.log(`${ base } * ${ i } = ${ base * i}`);
    }


}


let crearArchivo = (base,limite) => {

  return  new Promise( (resolve, reject ) => {

                if(!Number(base)){
                    reject(`EL valor introducido '${base}', no es un número`);
                    return;
                }
        

            let data = `Tabla de multiplicar del ${ base } con limite de ${ limite }\n`;
            for(let i =1; i<=limite; i++){
            
                data += (`${ base } * ${ i } = ${i * base} \n`); 
            }

            fs.writeFile(`tablas/tabla-${base}`, data, error => {
                if(error) 
                        reject(error)
                else
                resolve(`tabla-${base}`)
                
            
            },)


    })


}

module.exports = {
    crearArchivo,
    listarTablas
}