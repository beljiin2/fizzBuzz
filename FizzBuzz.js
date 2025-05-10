//# 🧠 Ejercicio: FizzBuzz Prodevs Academy

//Este es un pequeño desafío de programación para practicar lógica condicional en JavaScript en Prodevs Academy.

//## 📝 Instrucciones

//Debes completar la función FizzBuzz(num).

//La función debe devolver:

//- `"FizzBuzz"` si el número es divisible por **3 y 5**.
//- `"Fizz"` si el número es divisible solo por **3**.
//- `"Buzz"` si el número es divisible solo por **5**.
//- El **número mismo** en cualquier otro caso.

//### 📌 Ejemplos

//```js
//FizzBuzz(3)   // "Fizz"
//FizzBuzz(5)   // "Buzz"
//FizzBuzz(15)  // "FizzBuzz"
//FizzBuzz(7)   // 7



// Ejecuta en la consola npm install y luego ejecuta npm test para correr el test del ejercicio



function FizzBuzz(num) {
    
        if (num % 3 === 0 && num % 5 === 0) {
            return "FizzBuzz"
        } else if (num % 3 === 0) {
            return "Fizz"
        } else if (num % 5 === 0) {
            return "Buzz"
        } else {
            return num
        }
}

module.exports = FizzBuzz;
