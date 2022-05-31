let nombre="Edgar"
let apellido="Pirachican"
console.log(nombre+"-"+apellido)
console.log("Desafio array y objectos")

const regex = /^[0-9]*$/;
// const onlyNumbers = regex.test(`34563`); 
// // prompt,alert,console

// console.log("Pasar valor pesos a dolareas")
// const dolar = 3973.23
// let pesos =prompt("Cantidad en pesos para convertir en dolares" )
// if (regex.test(pesos)){
// console.log("Pesos : "+pesos);
// console.log("Valor dolar: "+dolar);
// console.log("Conversion:"+(pesos/dolar));}
// else{
//  console.log("Digitar solo números...!")
// }

// console.log("Presentar el dia del dia a string.")
// const numeroDia = new Date().getDay();
// let dia =".."
// switch(numeroDia){
//     case 1:
//      dia="Lunes"
//     break
//     case 2:
//         dia="Martes"
//        break
//        case 3:
//         dia="Miercoles"
//        break
//        case 4:
//         dia="Jueves"
//        break
//        case 5:
//         dia="Viernes"
//        break
//        case 6:
//         dia="Sabado"
//        break
//        case 7:
//         dia="Domingo"
//        break
// }
// console.log("Hoy es *"+dia+"* un dia mas para cumplir nuestros sueños");


// console.log("Imprimir las vocales de una cadena.");
// console.log("Cadena.");

// let cadena=prompt("Digite cadena para extraer las vocales:");
// console.log(cadena)
// let vocales="";
// for( letra=0;letra<cadena.length;letra++){
//     let char=cadena.charAt(letra);
//     if (char.toLowerCase()=="o"){
//       vocales=vocales+char;
//     }else
//      if (char.toLowerCase()=="i"){
//         vocales=vocales+char;
//      }else
//      if (char.toLowerCase()=="e"){
//         vocales=vocales+char;
//      }else
//      if (char.toLowerCase()=="a"){
//         vocales=vocales+char;
//      }else
//      if (char.toLowerCase()=="u"){
//         vocales=vocales+char;
//      }
// }
// console.log("Vocales: "+vocales);
// class camisa{
//     constructor(codigo,talla,precio,moneda,stock){
//         this.codigo=codigo;    
//         this.talla= talla;
//         this.precio=precio;
//         this.moneda=moneda;
//         this.stock=stock;
//     }
//     stocactual(){
//         console.log("Stock:"+camisa.stock)
//     } 
// }

// const addcamisaC0001 = new camisa("C0001","34",18,"USD",10)
// const addcamisaC0002 = new camisa("C0002","38",20,"USD",18)

// console.log("Listado de camisas codigo C001");
// for (const c001 in addcamisaC0001){
//     console.log(c001);
//     console.log(addcamisaC0001[c001]);
// }

// let voc=(cadena) =>{
//     let vocales="";
//     for( letra=0;letra<cadena.length;letra++){
//         console.log("nada")
//         let char=cadena.charAt(letra);
//         if (char=="o"){
//           vocales=vocales+char;
//         }else
//          if ("i" == char.toLowerCase()){
//             vocales=vocales+char;
//          }else
//          if (char.toLowerCase()=="e"){
//             vocales=vocales+char;
//          }else
//          if (char.toLowerCase()=="a"){
//             vocales=vocales+char;
//          }else
//          if (char.toLowerCase()=="u"){
//             vocales=vocales+char;
//          }
//         }
//         console.log(vocales);
// }

// voc(cadena)

//***************************************************/
//**************** Array y Objectos desafio******** */
//+++++++++++++++++++++++++++++++++++++++++++++++++++/

//definir array
const tallas =[ 32,34,40]
let coleccionTallas = ''
console.log("tallas Iniciales:"+tallas);

let ti =prompt("Agregar tallas:");
tallas.unshift(ti);

for (let i=3; i<5; i++){
 let t =prompt("Agregar tallas:");
 tallas.push(t);
}

let tf =prompt("Agregar tallas:");
tallas.unshift(tf);

console.log("tallas Finales:"+tallas);
console.log(tallas);




// Objeto//
console.log("Crear objetos camisa")
const camisa = {
    codigo:"C0001",
    talla: 32,
    precio:18,
    modeda:"USD",
    imagen: "",
    promocion:"N"

}
console.log(camisa)

const camisa02 = {
    codigo:"C0002",
    talla: 32,
    precio:19,
    modeda:"USD",
    imagen: "",
    promocion:"N"

}

console.log("Referencia:"+camisa02.codigo+" Precio:"+camisa02.precio+" Stock:13")

console.log("Actualizar precios")
camisa02.precioenvio=1;
camisa02.precio=20;
console.log(camisa02)

//lista de objectos
console.log("Crear una lista de objectos camisas")
const cami =[camisa,camisa02]

//recorrer la lista de objetos
console.log("Recorrer una lista de objectos")
cami.forEach(x=>{
    console.log("Codigo: "+x.codigo);
    console.log("talla: "+x.talla);
    console.log("precio: "+x.precio);
})

// for(i=0 ; i<tallas.length; i++{
//    for(j=1; j<tallas.length-1;j++){
//       if (tallas)
//    }
// }


//acceder y recorrer



//Propiedades  y metos

//combinacion array objectos
