// Типы данных

// -------------------
// тип Number
// мат. операции: 
// +,-,/,*
// **   - возведение в степень
// %    - остаток от деления

/*let a = 12
let b = a % 4

console.log(b)*/

// дробное значение пишется через точку
// let b = 10.52

// ------
// Новые значения типа Number
// Плюс и минус бесконечность

// let a = -Infinity
// let b = +Infinity

// console.log(b > 10000000000000000000)

// ----
// NaN  Not a Number (тоже является числом (тип Number))
// let c = NaN

// console.log(10 / 40 + 50 - NaN ** 4 % 5)

// ------------------------
// Строковый тип данных (string)
// 3 вида определения строкового типа:


// Ординарные и двойные кавычки ничем друг от друга не отличаются
// Они не позволяют совершить вынос строки (будет ошибка)

// let a = 'string'
// let b = "string"

// Апострофы позволяют сделать вынос строки

// let c = `str
// ing`

// console.log(a)
// console.log(b)
// console.log(c)


// -------------------------
// Как узнать тип данных? 
// Оператор typeof

// let a = 10
// let b = +Infinity
// let c = NaN
// let d = 'Hello world!'

// console.log(typeof(a))      - number
// console.log(typeof(b))      - number
// console.log(typeof(c))      - number
// console.log(typeof(d))      - string

// ---------------------
// Boolean (булевый тип)

// true
// false

// let a = true
// let b = false

// console.log(typeof(a))

// ----------------------
// Object

// // массив
// let array = [1,'2',3,4,true]

// // объект
// let obj = {
//     name: 'Tigran',
//     salary: 1000
// }

// console.log(typeof(obj))
// console.log(typeof(array))

// --------------------------
// Function

// Обяъвление функции
// function handle(){
//   console.log(1)
//   console.log(2)
//   console.log(3)
// }

// Вызов функции
// handle()

// console.log(typeof(handle))

// -----------------------------
// BigInt

// let a = 10000000000000000n

// console.log(typeof(a))
