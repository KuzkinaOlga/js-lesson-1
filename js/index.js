// Напишите функцию delete_characters(str, length), которая возвращает подстроку, состоящую из указанного количества символов.

// const str = 'Каждый охотник желает знать';
// const delete_characters = (str, length) => {

//     return str.slice(0, length);

// };

// console.log(delete_characters(str, 7)); // Каждый

// Напишите функцию insert_dash(str), которая принимает строку str в качестве аргумента и вставляет тире (-) между словами. При этом все символы строки необходимо перевести в верхний регистр.

// const str = "HTML JavaScript PHP";

// function insert_dash(str) {
//     str = str.toUpperCase();
//     console.log(str)
//     const words = str.split(" ")
//     console.log(words)
// // Ваш код
//     return words.join("-")

// }

// console.log(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'

// Переделайте приведенный код так, чтобы в нем использовались операции +=, -=, *=, /=, ++, --. Количество строк кода при этом не должно измениться. Код для переделки:

// let num = 1;
// num += 12;
// num -= 14;
// num *= 5;
// num /= 7;
// num += 1;
// num -= 1;
// Напишите функцию copyArr(arr), которая копирует массив не изменяя иригинал.

// const vegetables = ['Капуста', 'Репа', 'Редиска', 'Морковка'];
// function arrayClone(arr) {
//     const newArr = [...arr];
// // Ваш код
// return newArr
// }

// const arr = arrayClone(vegetables);

// console.log(arr === vegetables); // ['Капуста', 'Репа', 'Редиска', 'Морковка']
// Напишите код, который преобразовывает и объединяет все элементы массива в одно строковое значение. Элементы массива будут разделены запятой. Получите результат двумя разными методами.

// var vegetables = ['Капуста', 'Репа', 'Редиска', 'Морковка'];

// Ваш код

// document.writeln(str1); // "Капуста, Репа, Редиска, Морковка"
// document.writeln(str2); // "Капуста, Репа, Редиска, Морковка"



// рядок як аргумент та замінює регістр кожного символу на протилежний.
// Наприклад, якщо вводиться «КаЖдЫй ОхОтНиК», то на виході повинен бути масив "кАжДыЙ оХоТнИк".

// function changeRegister(str) {
//     let newStr = "";
//     for (let i = 0; i < str.length; i += 1){
//         if (str[i] === str[i].toUpperCase()) {
//             newStr += str[i].toLowerCase()
//         } else {
            
//             newStr += str[i].toUpperCase();
//         }
        
//         console.log(str[i]);
        
//     }
//     return newStr;
// }
// console.log(changeRegister("КаЖдЫй ОхОтНиК"))
// Підрахуйте суму чисел у діапазоні від 1 до 10 за допомогою циклу
//for, while та do...while.

// let summ = 0;
// for (let i = 1; i < 10; i += 1){
//     summ += i;
// }
// console.log(summ)

// let summ = 0;
// let counter = 1
// while (counter < 10) {
//     summ += counter;
//     counter += 1;
// }
// console.log(summ)

// let summ = 0;
// let counter = 1
// do {
//     summ += counter
//     counter +=1
// } while (counter < 10)
// console.log(summ)


