// debugger
// let input = prompt ('Enter number')
// while(!input?.trim() || isNaN(input)){
//     input = prompt ('Invalid number.Enter your number')
//     if(input === null){
//         break;
//     }
// }
// if(input === null ){
//     alert('Okay..')
// }
// else{
// const num = +input
// alert (num +'^ 2= ' + num **2)}
// debugger
// // const numbers = [5, 8, -1, '-6', 11, 'ololo', '-2']
// // let sum = 0
// // for ( let i = 0; i < numbers.length; i++ ){
// //     sum += numbers [i]
// // }
// // alert('Sum is ' + sum)
// const a = 'abc' && 10 || null && true
// console.log(a)
// if ( (" " && Number)|| (null && true)){
//     alert("here")
//     const w = prompt('SFDSF')
// }
// else if (w){
//     alert('Не вийшло')
// }

// let i = 0
// while( i <= 5) {
//     // alert(i)
//     console.log(i)
//     i++
    
// }
// let x = prompt('Enter your number')
// while(!x?.trim() || isNaN(x)){
//     x = prompt ('Invalid number.Enter your number')
//     if(x===null){
//         break;
//     }
// }
// if(x === null){
//     alert('Okay....')
// }
// else{
//     const num = +x
// alert(num + '^ 2 =' + num ** 2)
// }
// let num = 123456

// let result = ''
// while(num > 0){
//     result = ' ' + (num % 10) + result
//     num = (num - num % 10) / 10
    
// }
// alert ('result :' + result)
// const j =  -912312
// let absNum = Math.abs(num)
// let result =" "
// while (absNum > 0){
//     result = " " + (absNum % 10)
// }
// debugger
// const num = -12312
// console.log(num)
// let absNum = Math.abs(num)
// console.log(absNum)
// let result = ""
// console.log(result)
// while(absNum > 0){
//     const lastDigit = absNum % 10
//     result = ' ' +lastDigit + result //// 
//     console.log(result)
//     absNum = ( absNum - absNum % 10)/10
//     console.log(absNum)
// }
// alert('Result:' + ( num < 0 ? '-' : '') + result.trim())
// console.log('Result:' + ( num < 0 ? '-' : '') + result.trim())
debugger
// const numbers = [5,8,-1,'-6',11,'ololo','-2'] 
// const userNumber = isNaN(numbers)
// let sum = 0
// for(let i = 0; i< numbers.length; i++){
//     const ValueNumber = parseFloat(numbers[i])
//     sum += isNaN(ValueNumber)?0 : ValueNumber;
   
// }
// alert('Sum is ' + sum)

let userHryvnya = 40 ;

for(let dollars = 10; dollars <= 100;dollars+=10) {
    let Valuta = dollars * userHryvnya;
    alert(`${dollars} долларів = ${Valuta} гривень`)}

// const userEnterValidNum = +prompt('Enter number')

// if (userEnterValidNum === null ){
//     alert('As you wish')
// }
// else if (!userEnterValidNum.trim() || isNaN(userEnterValidNum)){
//     alert('Error: invalid number!')
// }
// else{
//     const numberPrime = +userEnterValidNum
//     if(!Number.isInteger(numberPrime) || numberPrime < 0){
//         alert(`This ${numberPrime} is not prime number`)
//     }
//     else{
        
        
//         for(let i =2; i <= n;i++ ){
//             for(let j = 2; j < i; j++){
//                 if(i%j === 0)continue 
//             }
//             alert(i);
//         }
//     }
// }
const userEnterValidNum = prompt('Введіть число');

if (userEnterValidNum === null) {
  alert('Як ви бажаєте');
} else {
  const parsedNum = +userEnterValidNum;

  if (isNaN(parsedNum) || parsedNum < 2 || !Number.isInteger(parsedNum)) {
    alert('Помилка: невірне число!');
  } else {
    const numberPrime = parsedNum;
    let isPrime = true;

    for (let i = 2; i <= Math.sqrt(numberPrime); i++) {
      if (numberPrime % i === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      alert(`${numberPrime} є простим числом`);
    } else {
      alert(`${numberPrime} не є простим числом`);
    }
  }
}
let UserAddNumber = prompt('Введіть число')

if(UserAddNumber % 3 === 0 && UserAddNumber){
    alert('Число можно отримати')
}
else {
    alert('Число не можно отримати')
}

