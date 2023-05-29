/*let string = 'privet drug'
let result = string.slice(0,6);
console.log(result);*/
/*metod slice dlya vivoda pol predlojenie ili slova*/
/*let string = 'hallo Meine Liebe'
let result = string.slice(-3)
console.log(result)*/
/*let string = 'Hallo,hallo, hallo'
let result = string.substring(3,7)

console.log(result)*/
/*function checkEmail(string){
    if(string.includes ('@') && string.includes('.')){
        return true
    }else{
        return false
    }
}
let result1 = checkEmail('some@mail.com"')
let result2 = checkEmail('some@emailcom"')
console.log(result1, result2)
console.log('@'&& '.')*/
/*function initCap(string){
    let firstSymbol = string.slice(0,1)
    let otherSymbol = string.slice(1)
    return firstSymbol.toUpperCase() + otherSymbol
}
let result1 = initCap('sam')
let result2 = initCap('steven')
console.log(result1, result2);*/



/*let elems = [
    '<div><p class="text">Home</p></div>', 
    '<div><p class="text">About</p></div>', 
    '<div><p class="text">FAQ</p></div>', 
    '<div><p class="text">Contacts</p></div>' 
] 

function clearData(array){
    for(let i = 0; i < array.length; i++){
        let index = array[i].indexOf('</')
        array[i] = array[i].slice(21,index)
    }
    console.log(array)
}

clearData(elems)*/


/*let elems = [
    '<div><p class"text">Home</p></div>', 
    '<div><p id="text">About</p></div>', 
    '<div><p ref="text">FAQ</p></div>', 
    '<div><p example="text">Contacts</p></div>' 
]
function clearData(array){
    for(let i = 0; i < array.length; i++){
        let index = array[i].indexOf('text')+6
        array[i] = array[i].slice(21,index)
    }
    console.log(array)
}

clearData(elems)*/
/*let phones = [
    '+79123456789',
    '89123456589',
    '89123456489',
    '+79123456389',
    '89123456289',
    '+79123456189',

]*/
/*function changePhone(array){
       for(let i = 0; i < array.length; i++){
if(array[i]. startsWith ('8')){
    array[i] = array[i].replase('8','+7')
}
       }
    
    console.log(array);
    }
changePhone(phones)*/