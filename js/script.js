// 1. Realizar el diagrama de flujo para las siguientes operaciones matemáticas: 
// Suma, 
// Resta, 
// División, 
// Multiplicación 
// y el módulo de un número, partiendo de dos números 
// ingresados por el usuario. (1.5 Puntos)
 
document.write("<h2> Ejercicio 1</h2>")
// Se crean 2 Variables para sumar
var Num1 = 21;
var Num2  = 55;
// Se crea la variable, 'resultado' y se guarda el resultado de la operacion
var resultado = Num1 + Num2 ;
//Se muetsra el resultadod e la operacion por consola
document.write("El resultado de la suma es :" + resultado +  "<br>")




// Se crean 2 Variables para Restar
var Num1 = 55;
var Num2  = 21;
// Se crea la variable, 'resultado' y se guarda el resultado de la operacion
var resultado = Num1 - Num2 ;
//Se muetsra el resultadod e la operacion por consola
document.write("El resultado de la resta es :" + resultado +  "<br>")




// Se crean 2 Variables para Dividir
var Num1 = 90;
var Num2  = 10;
// Se crea la variable, 'resultado' y se guarda el resultado de la operacion
var resultado = Num1 / Num2 ;
//Se muetsra el resultadod e la operacion por consola
document.write("El resultado de la division es :" + resultado +  "<br>")




// Se crean 2 Variables para Multiplicar
var Num1 = 21;
var Num2  = 55;
// Se crea la variable, 'resultado' y se guarda el resultado de la operacion
var resultado = Num1 * Num2 ;
//Se muetsra el resultadod e la operacion por consola
document.write("El resultado de la multiplicacion es :" + resultado +  "<br>")

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 2. Realizar operaciones con dos números. Pedir al usuario que ingrese dos números 
// diferentes y mayores a cero. Para ambos números, calcular lo siguiente: (1.5 Puntos)
// ● Suma
// ● Resta
// ● División
// ● Multiplicación
// ● Módulo
document.write("<h2> Ejercicio 2</h2>")

//Se crean las variables que recibiran los numeros
var Numero1 = Number(prompt('Ingrese el primer valor mayor a 0'))
var Numero2 = Number(prompt('Ingrese el segundo valor mayor a 0'))

//se generan 5 variables para almacenar los resultados
var resultadoSuma = Numero1 + Numero2;
 var resultadoResta = Numero1 - Numero2;
 var resultadoDivicion = Numero1 / Numero2;
 var resultadoMultiplicacion = Numero1 * Numero2;
 var resultadoModulo = Numero1 % Numero2;

//Se muestran los resultados de la operacion
document.write("El resultado de la suma es : " + resultadoSuma + "<br>")
document.write("El resultado de la resta es : " + resultadoResta + "<br>")
document.write("El resultado de la divicion es : " + resultadoDivicion + "<br>")
document.write("El resultado de la multiplicacion es : " + resultadoMultiplicacion + "<br>")
document.write("El resultado del modulo es : " + resultadoModulo + "<br>")

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 3. Crear un programa que pida al usuario ingresar la temperatura en grados Celsius y que 
// la transforme a grados Kelvin y Fahrenheit. (2 Puntos)
// Se debe considerar la siguiente información respecto a la equivalencia de las escalas 
// de temperatura: 
// ● 0 Grados Celsius corresponden a 273,15 Kelvin. La fórmula para convertirlos 
// es 0 °C + 273.15 = 273.15 K
// ● 0 Grados Celsius corresponden a 32 Fahrenheit. La fórmula para convertirlos 
// es (0 °C × 9/5) + 32 = 32 °F
document.write("<h2> Ejercicio 3</h2>")

//se crea la variable para recibir las tmperatura en grados celcius
var Celcius = Number(prompt("Ingrese un valor en Grados Celcius: "))

//se crea la variable para guardar el resultado de la operacion
var Kelvin = Celcius + 273.15;
var Fahrenheit = (Celcius * 9/5) + 32;

//Se muestran los resultados de la operacion
document.write("La Temperatura el grados Kelvin es :" + Kelvin + "°K <br>")
document.write("La Temperatura el grados Fahrenheit es :" + Fahrenheit + "°F <br>")
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Crear un programa que pida al usuario una cantidad de días y que muestre su 
// equivalente en Años, Semanas y Días. Por ejemplo, si el usuario ingresa 373, el 
// resultado debe ser 1 año, 1 semana y 1 día. (3 Puntos)
// Se debe considerar lo siguiente: 
// ● 1 año tiene 365 días
// ● 1 semana tiene 7 días
// Se recomienda usar la función Math.floor para obtener la parte entera de un número 
// decimal.
document.write("<h2> Ejercicio 4</h2>")

// se crean las variables para guardar el numero ingresado por el usuario
var NumeroDias = Number(prompt("Ingrese los dias a Convertir"))

// se dividen los dias por 365 para calcular la cantidad de años
var AñosTotales = Math.floor(NumeroDias / 365);

// se calcula el residuo de la división de NumeroDias por 365,y el 
// resto se divide por 7 para calcular las semanas
var SemanasTotales = Math.floor((NumeroDias % 365) / 7);

// se calcula el residuo de la división de NumeroDias por 7, para
// calcular las semanas completas  
var DiasTotales = NumeroDias % 7;

//Se muestran los resultados de la operacion
document.write(AñosTotales + " Años , " + SemanasTotales  + " Semanas  y " + DiasTotales + " dias.<br>" )
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// 5. Crear un programa que solicite al usuario 5 números y realice los cálculos que se piden 
// a continuación. (2 Puntos)
// ● La suma de todos los números.
// ● El promedio de los 5 números ingresa

document.write("<h2> Ejercicio 5</h2>")


//se crean las variables para guardar los datos
var numero1 = Number(prompt("Ingrese el primer valor (1 de 5)"))
var numero2 = Number(prompt("Ingrese el primer valor (2 de 5)"))
var numero3 = Number(prompt("Ingrese el primer valor (3 de 5)"))
var numero4 = Number(prompt("Ingrese el primer valor (4 de 5)"))
var numero5 = Number(prompt("Ingrese el primer valor (5 de 5)"))

//se crea varibles y se sumas todos los numeros
var resultadoSuma = numero1 + numero2 + numero3 + numero4 + numero5;
//se crea variable para guardar el promedio
var resultadoPromedio = (numero1 + numero2 + numero3 + numero4 + numero5) / 5

document.write("El resultado de sumar :" + numero1 + ","+ numero2 + ","+ numero3 + ","+ numero4 + ","+ numero5 + " es :" + resultadoSuma + "<br>")
document.write("el promedio de la operacion anterior es : " + resultadoPromedio)

