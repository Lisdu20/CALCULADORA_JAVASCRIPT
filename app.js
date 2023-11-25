const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

buttons.forEach((btn)=> {
    btn.addEventListener("click", ()=> {
        if (btn.id === "="){
            display.value = eval(display.value);
        } else if (btn.id === "ac"){
            display.value = "";
        } else if (btn.id === "de"){
            display.value = display.value.slice(0, -1);
        } else {
            display.value += btn.id
        }
})
});
// buttons: Es un array en JavaScript que contiene elementos.

// forEach: Se utiliza para iterar sobre cada elemento de un array y ejecutar una función proporcionada para cada elemento.

// (btn) => { /* código */ }: Esta es una función de flecha (arrow function) que se pasa como argumento a forEach. 
// La función toma un parámetro, que en este caso se ha llamado btn (puede tener cualquier nombre válido de variable).
// La función entre las llaves {} es el bloque de código que se ejecutará para cada elemento del array.

// btn.id: Esto está accediendo a la propiedad id del objeto btn. Se utiliza para identificar qué botón específico se ha activado.

// ===: Este es el operador de igualdad estricta en JavaScript.
// Compara si el valor a la izquierda es igual al valor a la derecha, y también verifica que los tipos de datos sean iguales.
// En este caso, está comparando si el id del botón es igual a la cadena "=".

// Entonces, la condición if (btn.id === "=") se evalúa como verdadera si el id del botón es igual a la cadena "=".

// display.value: Se refiere al valor actual de la propiedad value del elemento con el nombre display. 
// Referencia a un elemento de entrada de texto, un cuadro de texto, o algún otro elemento que tenga una propiedad value.

// .slice(0, -1): Esto utiliza el método slice para obtener una porción (subcadena) del valor actual.
// En este caso, está obteniendo una subcadena desde el primer carácter (índice 0) hasta el último carácter excluido, es decir, eliminando el último carácter.

// Entonces, en resumen, la línea de código display.value = display.value.slice(0, -1); está eliminando el último carácter
//  del valor actual de la propiedad value del elemento display.