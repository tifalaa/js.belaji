/*Napisati function koji izracunava ukupan otpor neke serijske veze otpornika*/
let array=[
    {otpor: 100},
    {otpor:330},
    {otpor: 1000},
    {otpor: 5000},

]
const serija= array.reduce((accumulator,item)=>{
    return accumulator + item.otpor
}, 0)
console.log(serija)