debugger
const userHryvnya = 40 ;

for(let dollars = 10; dollars <= 100;dollars+=10) {
    let valuta = dollars * userHryvnya;
    alert(`${dollars} долларів = ${valuta} гривень`)}


const userEnterValidNum = prompt('Введіть число');

if (userEnterValidNum === null) {
  alert('Як ви бажаєте');
} else {
  const input = userEnterValidNum.trim(); 
  const parsedNum = +input;

  let isPrime = true;

  if (!input || !Number.isInteger(parsedNum) || parsedNum < 2) {
    isPrime = false;
  } else {
    const numberPrime = parsedNum;

    for (let i = 2; i <= Math.sqrt(numberPrime); i++) {
      if (numberPrime % i === 0) {
        isPrime = false;
        break;
      }
    }
  }

  if (!isPrime) {
    alert(` Не є простим числом `);
  } else {
    alert(`Є простим числом`);
  }
}


let UserAddNumber = prompt('Введіть число');


if (UserAddNumber === null) {
  alert('Як ви бажаєте');
} else {
  
  const trimmedInput = UserAddNumber.trim();

  if (trimmedInput === '' || isNaN(trimmedInput)) {
    alert('Помилка: введено некоректне число або порожній рядок');
  } else {
   
    UserAddNumber = +trimmedInput;

    
    let isNumberObtainable = false;

    
    for (let i = 1; i <= UserAddNumber; i++) {
      if (UserAddNumber % i === 0 && (i % 3 === 0 )) {
        isNumberObtainable = true;
        break;
      }
    }
    alert(
      trimmedInput === '' || isNaN(trimmedInput) || /^0\d+/.test(trimmedInput) || trimmedInput <= 0
        ? 'Число не можна отримати або введено некоректне число'
        : `Число ${+trimmedInput % 3 === 0 ? 'можна отримати' : 'не можна отримати'}`
    );
}}
