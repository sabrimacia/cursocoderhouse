/* EJERCICO CLASE 1
let nombre = prompt("Ingresa tu nombre");
let edadIngresada = prompt("Ingresa tu edad");
let edad = parseFloat(edadIngresada);
console.log("Bienvenido" + nombre );
let fecha_nacimiento = 1992;
let edad_actual = 29;
let suma = fecha_nacimiento + edad_actual;
alert("Hola" +  " " + nombre + " " + "estamos en el año" + " " + suma);

/*EJERCICIO CLASE 2 
let numero=prompt("Ingrese un numero por favor");
if(numero >1000){
    alert("El numero es mayor");
}

let texto=prompt("Ingrese un texto por favor");
if((texto == "hola") || (texto == "HOLA")){
    alert("Has dicho hola");
}

let numeroIngresado=prompt("Ingrese cualquier numero");
if((numeroIngresado >=10) && (numeroIngresado <=50)){
    alert("El numero ingresado esta entre 10 y 50");
}else{
    alert("Error");
}
*/

/* EJERCICIO CLASE 3 
let numero=parseInt(prompt("Ingrese un numero"));
for (let i=1; i<=10; i++){
    let resultado = numero + i ;
    console.log(numero + "+" + i  + "=" + resultado);
} 

 let texto = prompt("Ingresa tu nombre");
 while (texto != "ESC"){
     alert("Bienvenido" + texto);
     texto = prompt ("Ingresa tu apeliido");
 }
*/
let numero = prompt("Ingrese un numero");
while( numero != "ESC"){
    switch (numero){
        case "1":
            alert("Hola");
            break;
        case "2":
            alert("Hola");
            break;
        default:
            alert("Numero incorrecto")
            break;
    }

    numero= prompt("Ingrese un numero");

}
