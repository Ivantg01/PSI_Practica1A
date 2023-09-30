import {assertEquals} from "https://deno.land/std@0.202.0/assert/mod.ts";
import test = Deno.test;


//ejercicio 1.1
type Pasajero = {
    lugar_origen?: string;
    nombre?: string;
    altura: number;
    edad: number;
    peso: number;
    genero: string;
}
const pasajero1: Pasajero={
    lugar_origen: "Peru",
    nombre: "Manolo",
    altura: 1.40,
    edad: 40,
    peso: 180,
    genero: "M",
}

const pasajero2: Pasajero={
    lugar_origen: "Ohio",
    nombre: "Walter White",
    altura: 1.80,
    edad: 50,
    peso: 80,
    genero: "M",
}

const pasajero3: Pasajero={
    lugar_origen: "Missisipi",
    nombre: "Jesse Pinkman",
    altura: 1.70,
    edad: 30,
    peso: 70,
    genero:" M",
}

const pasajero4: Pasajero={
    lugar_origen: "Espana",
    nombre: "Ivan",
    altura: 1.80,
    edad: 20,
    peso: 65,
    genero: "M",
}

const pasajero5: Pasajero={
    lugar_origen: "Espana",
    genero: "F",
    altura: 1.60,
    edad: 40,
    peso: 80,
}

const pasajero6: Pasajero={
    nombre: "Juan",
    edad: 30,
    genero: "M",
    altura: 1.70,
    peso: 70,
}
console.log("Ejercicio 1.1: pasajeros de la capsula creados");

//ejercicio 1.2
interface Nave{
    peso: number;
    dimension: number;
    vel_curvatura: boolean;
    lista_pasajeros: Pasajero[];
}

const capsula:Nave = {
    peso: 100,
    dimension: 10,
    vel_curvatura: false,
    lista_pasajeros: [pasajero1,pasajero2,pasajero3,pasajero4,pasajero5,pasajero6],
}
console.log("\nEjercicio 1.2: creada la capsula");
console.log(capsula)

//ejercicio 1.3
let Enterprise:Nave = {
    peso: 1000,
    dimension: 100,
    vel_curvatura: true,
    lista_pasajeros: [],
}

let spock={
    lugar_origen: "Vulcano",
    nombre: "Spock",
    altura: 1.80,
    edad: 50,
    peso: 100,
    genero: "M",
}

let kirk={
    lugar_origen: "Iowa",
    nombre: "Kirk",
    altura: 1.70,
    edad: 40,
    peso: 90,
    genero: "M",
}
let scott={
    lugar_origen: "Escocia",
    nombre: "Scott",
    altura: 1.75,
    edad: 30,
    peso: 95,
    genero: "M",
}

Enterprise.lista_pasajeros.push(spock);
Enterprise.lista_pasajeros.push(kirk);
Enterprise.lista_pasajeros.push(scott);

console.log("\nEjercicio 1.3: creada la nave Enterprise");
console.log(Enterprise);

//ejercicio 1.4

console.log("\nEjercicio 1.4: pasajeros con nombre");
const pasajeros_con_nombre = capsula.lista_pasajeros.filter((pasajero)=>pasajero.nombre);
console.log("Total pasajeros con nombre: ",pasajeros_con_nombre.length);

console.log("Lista de pasajeros con nombre: ");
pasajeros_con_nombre.forEach((pasajero)=>{
    const keys = Object.keys(pasajero);
    const values = Object.values(pasajero);
    console.log("----Pasajero----");
    for (let i = 0; i < keys.length; i++) {
        console.log(keys[i],":",values[i]);
    }
});


//EJERCICIO 2.1
//extendemos la clase Parajero con el atributo infeccion
type PasajeroExtendido = Pasajero &{
    infeccion: boolean;
}

spock.infeccion=true;
kirk.infeccion=false;
scott.infeccion=false;

console.log("\nEjercicio 2.1: Estado de la tripulacion");
console.log("Tripulantes sanos: ");

Enterprise.lista_pasajeros.forEach((pasajero)=>{
    if(!pasajero.infeccion){
        console.log(pasajero.nombre);
    }
});

//EJERCICIO 2.2
console.log("\nEjercicio 2.2: Informacion para Kirk");
//A
console.log("Hay algun tripulante infectado?");
const unInfectado =Enterprise.lista_pasajeros.some((pasajero)=> pasajero.infeccion);
console.log(unInfectado);
//B
console.log("Todos los tripulantes estan sanos?");
const todosSanos= Enterprise.lista_pasajeros.every((pasajero)=>!pasajero.infeccion);
console.log(todosSanos);
//C
console.log("Encuentra el primer tripulante infectado:");
const proxInfectado = Enterprise.lista_pasajeros.find((pasajero)=> pasajero.infeccion);
console.log(proxInfectado);


//EJERCICIO 3.1
console.log("\nEjercicio 3.1: Datos recuperados de fechas");
//array con informacion de fechas recuperadas
const fechas = [
    "qaweqw","as892saaaswlkjoiuasd","2020-12-12","a12","2022-01-01T02:30:00",
    "2024-11-05T22:30:47","12213123","2002-06-01T12:30:11"
]

//definimos la funcion isDate para comprobar si un string es una fecha o no
function isDate(dateString: string) {
    return !isNaN(new Date(dateString).getDate());
}
//const pasajeros_con_nombre = capsula.lista_pasajeros.filter((pasajero)=>pasajero.nombre);
const fechasValidadas = fechas.filter((elem)=>isDate(elem));

console.log("Listado total de fechas: ");
console.log(fechas);
console.log("Listado solo con fechas validas: ");
console.log(fechasValidadas);

//EJERCICIO 3.2
//Funcion map String con dia mes año hora minuto y segundo a DATE
console.log("\nEjercicio 3.2: Datos recuperados transformables");
console.log("Listado de fechas transformadas: ");
const fechasTransformadas = fechasValidadas.map(function(elem){
    if (isDate(elem)) {
        let myDate = new Date(elem);
        console.log(myDate);
        return myDate;
    }
});


//EJERCICIO 4.1
console.log("\nEjercicio 4.1: Problemas con los tribbles");
//listado de averias en los conductores
type DatoSensor = {
    idConductor: number;
    averias: number;
    tribbles: number;
}

let datosSensores: DatoSensor[] = [
    { idConductor: 1, averias: 1, tribbles: 5},
    { idConductor: 2, averias: 10, tribbles: 16},
    { idConductor: 3, averias: 21, tribbles: 2},
    { idConductor: 4, averias: 30, tribbles: 10},
];
console.log("Datos recuperados de los sensores de los conductores:")
console.log(datosSensores);

//número total de tribbles en todos los turbo conductores con  más de 20 daños
//reduce
const totalTribbles = datosSensores.reduce((contador,elem)=>elem.averias>20?contador+=elem.tribbles:contador,0);
//const totalTribbles = datosSensores.reduce<number>((total: number, dato: DatoSensor) => total += dato.tribbles, 0);
console.log("Numero total de tribbles en cond. con mas de 20 averias: " + totalTribbles);

//señal lisa de un nivel que pase en serie el número del turbo conductor, sus daños y el número de tribbles, uno tras otro
//flat
console.log("Datos de los sensores en serie:");
//unimos los componentes del tipo DatoSensor
const datosSensoresFlat = datosSensores.map( function(datoSensor){
    return [datoSensor.idConductor, datoSensor.averias, datoSensor.tribbles];
});
//unimos el array de array anterior
console.log(datosSensoresFlat.flat());

//Idem, solo datos de peligro o no, si el número de tribbles supera en un 50% al de los daños
//flatmap
console.log("Datos de peligro en serie:");
const datosSensoresFlatDanger = datosSensores.flatMap(datoSensor => (datoSensor.tribbles/datoSensor.averias>1.5)?"peligro":"no peligro");
console.log(datosSensoresFlatDanger);

//Deno.test("test_1 suma",()=>{
//    const a=1;
//	const b=2;
//    assertEquals(suma(a,b),[3]);
//});

