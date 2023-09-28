/*Napravi function koji uzima array brojeva i returna “Boom!” ako se cifra 7 pojavi u array uostalom returna “nema 7 u arrayu*/
let array =[1,2,3,4,5,6,8]
const boom = array.filter((item)=>{return item == 7})
if (boom ==7){
    console.log('BOOM!')
}else{
    console.log('nema 7 u arrayu');
}
