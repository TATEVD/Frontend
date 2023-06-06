/*1.  Задачаю*/
/*function getKeys(obj){
    let keys = [];
    for(let key in obj) {
        if(obj.hasOwnProperty(key)){
            keys.push(key);
        }
    }

return keys;
}
let someObj= {
    key1: 'value1',
    key2: 'value2',
    key3:'value3',
    key4: 'value4'
}
console.log(getKeys(someObj));*/



//_____________________________________________________//
   /*2.Задача
   function getAvg(arr){
let sum = 0;
for(let i = 0; i <arr.length; i ++){
    sum += arr[i];
}
return sum/arr.length;
   }
   
   console.log(getAvg([1,2,3,4,5])); */

  // ------------------------------------------------------------------------//

 /*3. Задача
   function countString(arr){
    let count = 0;
    for(let i = 0; i < arr.length; i ++){
        if(typeof arr[i] ==="string"){
            count++;
        }
    }
        console.log(count);
    
   }
   countString([1, true, "3","value1", 9, "key"]);*/



   //-----------------------------------------------------------------------------//
    /* 4.Задача */
    /*function getEntries(obj){
        let entries = [];
        for(let key in obj){
            entries.push([key, obj[key]]);
        }
        return entries;
    }
    let someObj = {
        key1: 'value1',
        key2: 'value2',
        key3: 'value3',
        key4: 'value4'
    };
    console.log(getEntries(someObj));*/




    //--------------------------------------------------------------//
   /* 5.Задача 
     

   function arrayToObject(arr){
    let obj = {};
    for(let i = 0; i<arr.length; i ++){
        obj["key" + (i + 1)] = arr[i];
    }
    return obj;
   }
   console.log(arrayToObject([1, true,"3","value1",9, "key"]));*/
     