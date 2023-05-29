/*1. Задача*/
/*let array =[5,3,2,6,7,8,7,10,40,32,1,45]
for(let i = 0; i< array.length; i ++){
    if(array[i]% 2 !==0){
        console.log(array[i]);
    }
}*/



/*2. Задача---------------*/
/*let array =[5,3,2,6,7,8,7,10,40,32,1,45];
for(let i = 0; i < array.length; i++){
    if(array[i]% 10===0){
        console.log(array[i]);
    }
}*/



/*3.Задача______________________*/
/*let array =[5,3,2,6,7,8,7,10,40,32,1,45];
for (let i = 0; i < array.length; i ++){
    if(array[i] >=10 && array[i] <= 99){
        console.log(array[i]);
    }
}*/


  /*4.  Задача--------------------------------- */
 /* let phones = [
    '+7912345549',
    '+7912346579',
    '891234547489',
    '+79123451234',
    '89123451238',
    '+73123456789',
    '+73123456569',
    '81123451238'
  ];
  let phones1 = [];
  let phones2 = [];
  for(let i = 0; i < phones.length; i++){
    if(phones[i].startsWith('+7')){
        phones1.push(phones[i]);
    }else{
        phones2.push(phones[i])
    }
  }
  console.log('phones1:', phones1);
  console.log('phones2',phones2);*/



 /* 5.Задача_________________________*/
 /*let names = [
    'Steven',
    'Alex NULL',
    'Glandel NULL',
    'Neena',
    'John',
    'Peter NULL'
 ]
 for(let i = 0; i <names.length; i ++){
    if(names[i].includes('NULL')){
        names[i]= names[i].split( ' ')[0];
    }
 }
 console.log(names);*/
    

 /*6.Задача-------------------------------------*/
 /*let contacts = [
    'example@mail.com 89012345675',
    'test@mail.ru',
    'example@google.pop',
    '89011235678',
    'stevem@mail.net',
    'neena@amazon.ru 81232345676',
    'peter@great.ru 89012341238'
 ];
 let phones = [];
 let emails = [];
 for (let i = 0; i <contacts.length; i ++){
    let contact = contacts [i];
    let contact1 = contact.split( ' ');
    for (let j = 0; j< contact1.length; j++){
        let red = contact1[j];
        if (red.includes('@')){
            emails.push(red);

        }else{
            phones.push(red);
        }
    }
 }
 console.log('phones:', phones);
 console.log('emails:',emails);*/
 