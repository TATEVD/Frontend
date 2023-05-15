//
//console.log('Hello'.repeat(2))
//let string = 'Tatevik'
//let result = string.includes('vik')
//console.log(result)
//function checkString(string,substring){
    //if(string.includes(substring)){
       // console.log("dannaya podstraka sushestvuet v stroke")
   // }else{
        //console.log("danniy podstroka ne sushestvuet v stroke")
    //}
//}
//checkString("Solnce", "Sol")
//let string = 'Hay Denis'
//let result = string.includes('is')
//let string = 'Privet'
//let result = string.startsWith('Pri')
//console.log(result)
//let string = 'Hallo'
//let result = string.endsWith('o')
//console.log(result)
//let string = 'Privet mir'
//let result = string.indexOf('Privet')
//console.log (rezult)
// Задача 1.
// Определить индекс второй подстроки 'date' у переменной string.
// Код должен работать на 2 тестах
// 1-ый тест
 //let string = 'date 10.10.10 date 20.20.20 date 30.30.30' 
// 14    

// 2-ой тест
// let string = '10.10.10.10.10.10 date 20.20.20 date 30.30.30 date'   
// 32

let result = string.indexOf('date', string.indexOf('date') +1)
console.log(result)