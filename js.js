debugger
let userHryvnya = 40 ;

for(let dollars = 10; dollars <= 100;dollars+=10) {
    let Valuta = dollars * userHryvnya;
    alert(`${dollars} долларів = ${Valuta} гривень`)}


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

let UserAddNumber = prompt('Введіть число');

if (UserAddNumber === null || isNaN(UserAddNumber)) {
    alert('Введіть число!');
  } else {
    // Перетворення введеного рядка в число
    UserAddNumber = +UserAddNumber;
  
    // Флаг для визначення, чи число можна отримати
    let isNumberObtainable = false;
  
    // Перевірка, чи число можна отримати для значень від 1 до введеного числа
    for (let i = 1; i <= UserAddNumber; i++) {
      if (UserAddNumber % i === 0 && i % 3 === 0) {
        isNumberObtainable = true;
        break; 
      }
    }
  
    
    if (isNumberObtainable) {
      alert('Число можна отримати');
    } else {
      alert('Число не можна отримати');
    }
  }