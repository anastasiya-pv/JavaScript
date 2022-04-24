// HW_2

//Напишите валидационный скрипт используя функции: 

 //1. Скрипт должен на вход принимать строку.
 //2. После проверки строки выводить в консоль сообщение где будет конкретно написано, что не так в ведённой строке.
 //3. Минимум 5 символов в строке
 //4. Максимум 64 символа в строке
 //5. В строке должны быть буквы
 //6. Должна быть хотя бы одна буква в верхнем регистре
 //7. Должна быть хотя бы одна цифра
 //8. Должна быть хотя бы одна @
 //9. Строка не должна быть пустой

 let data = "Test1@mail.ru"

 function index_data(data){
    if(typeof(data) != "string" ){
        console.log("Invalid data")
    }else if (data.length < 5 || data.length > 64){
        console.log("should be 5 to 64 characters long") 
    }else if(/[a-zа-яё]/.test(data) == false){
        console.log("Lower-case letter is required")
    }else if(/[A-ZА-ЯЁ]/.test(data) == false){
        console.log("Capital letter is required")
    }else if(/[0-9]/.test(data) == false){
        console.log("Number is required")
    }else if(/@/.test(data) == false){
        console.log("@ is required")
    }else if(data == ""){
        console.log("Empty data")   
    }else{
        console.log("Correct")
    }

}

index_data(data);