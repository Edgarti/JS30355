let nombre="Edgar"
let apellido="Pirachican"
console.log(nombre+"-"+apellido)

const regex = /^[0-9]*$/;
const onlyNumbers = regex.test(`34563`); 
// prompt,alert,console

console.log("Pasar valor pesos a dolareas")
const dolar = 3973.23
let pesos =prompt("Cantidad en pesos para convertir en dolares" )
if (regex.test(pesos)){
console.log("Pesos : "+pesos);
console.log("Valor dolar: "+dolar);
console.log("Conversion:"+(pesos/dolar));}
else{
 console.log("Digitar solo números...!")
}

console.log("Presentar el dia del dia a string.")
const numeroDia = new Date().getDay();
let dia =".."
switch(numeroDia){
    case 1:
     dia="Lunes"
    break
    case 2:
        dia="Martes"
       break
       case 3:
        dia="Miercoles"
       break
       case 4:
        dia="Jueves"
       break
       case 5:
        dia="Viernes"
       break
       case 6:
        dia="Sabado"
       break
       case 7:
        dia="Domingo"
       break
}
console.log("Hoy es *"+dia+"* un dia mas para cumplir nuestros sueños");


console.log("Imprimir las vocales de una cadena.");
console.log("Cadena.");

let cadena=prompt("Digite cadena para extraer las vocales:");
console.log(cadena)
let vocales="";
for( letra=0;letra<cadena.length;letra++){
    let char=cadena.charAt(letra);
    if (char.toLowerCase()=="o"){
      vocales=vocales+char;
    }else
     if (char.toLowerCase()=="i"){
        vocales=vocales+char;
     }else
     if (char.toLowerCase()=="e"){
        vocales=vocales+char;
     }else
     if (char.toLowerCase()=="a"){
        vocales=vocales+char;
     }else
     if (char.toLowerCase=="u"){
        vocales=vocales+char;
     }
}
console.log("Vocales: "+vocales);


class camisa{
    constructor(codigo,talla,precio,moneda,stock){
        this.codigo=codigo;    
        this.talla= talla;
        this.precio=precio;
        this.moneda=moneda;
        this.stock=stock;
    }
    stocactual(){
        console.log("Stock:"+camisa.stock)
    } 
}

const addcamisaC0001 = new camisa("C0001","34",18,"USD",10)
const addcamisaC0002 = new camisa("C0002","38",20,"USD",18)

console.log("Listado de camisas codigo C001");
for (const c001 in addcamisaC0001){
    console.log(c001);
    console.log(addcamisaC0001[c001]);
}

let voc=(cadena) =>{
    let vocales="";
    for( letra=0;letra<cadena.length;letra++){
        console.log("nada")
        let char=cadena.charAt(letra);
        if (char=="o"){
          vocales=vocales+char;
        }else
         if ("i" == char.toLowerCase()){
            vocales=vocales+char;
         }else
         if (char.toLowerCase()=="e"){
            vocales=vocales+char;
         }else
         if (char.toLowerCase()=="a"){
            vocales=vocales+char;
         }else
         if (char.toLowerCase()=="u"){
            vocales=vocales+char;
         }
        }
        console.log(vocales);
}

voc(cadena)