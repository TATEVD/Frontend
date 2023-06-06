// Интерполяция
// Интерполяция - процесс, который дает возможность указать java-script выражение внутри строки

// let hi = 'Привет'
// let my = 'мой'
// let friend = 'друг' 

// Задание: сформировать из переменных предложение, соблюдая правила пунктуации. 
// Вывести это предложение в консоль

// Решение без интерполяции (конкатенация)

// console.log(hi + ', ' + my + ' ' + friend + '.')

// Решние с интерполяцией
// Правила:
// 1. Строка должна быть объявлена через апострофы
// 2. Выражение должно находиться внутри ${}

// console.log(`${hi}, ${my} ${friend}.`)

// Задача 1
// Есть переменные r, g, b с числовыми значениями. 
// Вывести в консоль строку “rgb(12, 34, 14)” используя конкатенацию и интерполяцию

// let r = 10
// let g = 20
// let b = 100

// Решение 1 (конкатенация)
// console.log('rgb(' + r + ', ' + g + ', ' + b +')') 

// Решение 2 (интерполяция)
// console.log(`rgb(${r}, ${g}, ${b})`)

// -------------------
// Что еще может делать интерполяция?

// console.log(`${6 ** 12} - это число`)
// console.log(`${6 / 12} - это число`)
// console.log(`${6 - 12} - это число`)


// ----------------------------------------------------
// Функция isNaN().

// В чем заключается проблема

// true
// console.log(10 == 10)

// Числовый тип NaN не равен самому себе
// console.log(NaN == NaN)

// Функция isNaN() возвращает булевый тип (true, false)

 /*let a = NaN
let a = 108

console.log(isNaN(a))*/

// Задача 2

// Написать программу, которая считывает значение из переменной value 
// и выводит фразу “Это значение можно преобразовать в число” или 
// “Это значение преобразовать в число не получится. Получится NaN”

// let value = '100'

// if (isNaN(+value)){
//     console.log('Это значение преобразовать в число не получится. Получится NaN')
// } else {
//     console.log('Это значение можно преобразовать в число')
// }




// Условный оператор 
// if ... else 

// let a = 10;

//  1 пример

// if (a > 10){
//     console.log(a + ' больше 10');
// } else if (a == 10){
//     console.log(a + ' равне 10');
// } else {
//     console.log(a + ' меьнше 10');
// };

// -------------

// Пример 2

// let a = 15;

// if (a > 10){
//     console.log('Верно!');
// };

// if (a > 20){
//     console.log('Верно!');
// };

// ---------------------------------
// Задача 1

// Задана переменная age. Напишите программу, которая будет в консоле опевщать: 
// является ли пользователь совершенолетним. Если да - в косноли нужно вывести сообщение 
// Совершеннолетний  
// В противном случае - Несовершеннолетний 

// Решение 
// ----------
// let age = 25

// 1 вариант
// if (age < 18){
//     console.log('Несовершеннолетний')
// } else {
//     console.log('Cовершеннолетний')
// }

// 2 вариант

// if (age >= 18){
//     console.log('Cовершеннолетний')
// } else {
//     console.log('Несовершеннолетний')
// }


// 3 вариант 

// if (age >= 18){
//     console.log('Cовершеннолетний')
// };

// if (a < 18){
//     console.log('Несовершеннолетний')
// };

// --------------------

// Задача 2

// Заданы две переменные a и b. 
// 1. Написать программу, которая получает два числа и выводит наибольшее
// 2. Если числа будут равны друг-другу, программа также должна написать об этом в консоле

// let a = 600;
// let b = 100;

// ---------------
// Решение 

// if (a > b){
//     console.log(a);
// } else if (a == b){
//     console.log('Переменные равны', a)
// } else {
//     console.log(b)
// };
