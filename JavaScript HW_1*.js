//HW_1* 

//1*:Преобразовать написанный код в 26-33 пунктах в функцию, принимающую на вход возраст.
//Пример: const checkAge = function(age) {
//Ваши преобразования}
let age_1 = 10
let age_2 = 18
let age_3 = 60

const checkAge = function(age_1) {
    if (age_1 < age_2) {
    console.log("You don’t have access cause your age is "+ age_1+ " It’s less then "+ age_2)
}
else if (age_1 >=  age_2 && age_1 < age_3) {
    console.log("Welcome  !");
}
else if (age_1 > age_3) {
    console.log("Keep calm and look Culture channel");
}
else{
    console.log("Technical work");
  }
} 
//Вывести в консоль результат работы функции с возрастами 17, 18, 61
checkAge(17)
checkAge(18)
checkAge(61) 

//2*:Преобразовать задание 1* таким образом, чтобы первым делом в функции проверялся тип данных. И если он не Number - кидалась ошибка.

const checkAge_numbers = function (age_1) {
    if (typeof age_1 !== 'number') {
      console.log('Please input numeric characters only');
    } else if (age_1 < age_2) {
        console.log("You don’t have access cause your age is "+ age_1+ " It’s less then "+ age_2)
    }
    else if (age_1 >=  age_2 && age_1 < age_3) {
        console.log("Welcome  !");
    }
    else if (age_1 > age_3) {
        console.log("Keep calm and look Culture channel");
    }
    else{
        console.log("Technical work");
      }
    } 

checkAge_numbers(17);
checkAge_numbers(18);
checkAge_numbers(61);
checkAge_numbers('letters');

//3**:Преобразовать 2* таким образом, чтобы значение '2' (строка в которой лежит ТОЛЬКО ЦИФРА) пропускалось, преобразовываясь в number

//4***Преобразовать задание 3* таким образом, чтобы возраст вводится используя функцию prompt в привязанной верстке
