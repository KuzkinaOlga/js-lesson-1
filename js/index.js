// // Напишите функцию delete_characters(str, length), которая возвращает подстроку, состоящую из указанного количества символов.

// // const str = 'Каждый охотник желает знать';
// // const delete_characters = (str, length) => {

// //     return str.slice(0, length);

// // };

// // console.log(delete_characters(str, 7)); // Каждый

// // Напишите функцию insert_dash(str), которая принимает строку str в качестве аргумента и вставляет тире (-) между словами. При этом все символы строки необходимо перевести в верхний регистр.

// // const str = "HTML JavaScript PHP";

// // function insert_dash(str) {
// //     str = str.toUpperCase();
// //     console.log(str)
// //     const words = str.split(" ")
// //     console.log(words)
// // // Ваш код
// //     return words.join("-")

// // }

// // console.log(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'

// // Переделайте приведенный код так, чтобы в нем использовались операции +=, -=, *=, /=, ++, --. Количество строк кода при этом не должно измениться. Код для переделки:

// // let num = 1;
// // num += 12;
// // num -= 14;
// // num *= 5;
// // num /= 7;
// // num += 1;
// // num -= 1;
// // Напишите функцию copyArr(arr), которая копирует массив не изменяя иригинал.

// // const vegetables = ['Капуста', 'Репа', 'Редиска', 'Морковка'];
// // function arrayClone(arr) {
// //     const newArr = [...arr];
// // // Ваш код
// // return newArr
// // }

// // const arr = arrayClone(vegetables);

// // console.log(arr === vegetables); // ['Капуста', 'Репа', 'Редиска', 'Морковка']
// // Напишите код, который преобразовывает и объединяет все элементы массива в одно строковое значение. Элементы массива будут разделены запятой. Получите результат двумя разными методами.

// // var vegetables = ['Капуста', 'Репа', 'Редиска', 'Морковка'];

// // Ваш код

// // document.writeln(str1); // "Капуста, Репа, Редиска, Морковка"
// // document.writeln(str2); // "Капуста, Репа, Редиска, Морковка"



// // рядок як аргумент та замінює регістр кожного символу на протилежний.
// // Наприклад, якщо вводиться «КаЖдЫй ОхОтНиК», то на виході повинен бути масив "кАжДыЙ оХоТнИк".

// // function changeRegister(str) {
// //     let newStr = "";
// //     for (let i = 0; i < str.length; i += 1){
// //         if (str[i] === str[i].toUpperCase()) {
// //             newStr += str[i].toLowerCase()
// //         } else {
            
// //             newStr += str[i].toUpperCase();
// //         }
        
// //         console.log(str[i]);
        
// //     }
// //     return newStr;
// // }
// // console.log(changeRegister("КаЖдЫй ОхОтНиК"))
// // Підрахуйте суму чисел у діапазоні від 1 до 10 за допомогою циклу
// //for, while та do...while.

// // let summ = 0;
// // for (let i = 1; i < 10; i += 1){
// //     summ += i;
// // }
// // console.log(summ)

// // let summ = 0;
// // let counter = 1
// // while (counter < 10) {
// //     summ += counter;
// //     counter += 1;
// // }
// // console.log(summ)

// // let summ = 0;
// // let counter = 1
// // do {
// //     summ += counter
// //     counter +=1
// // } while (counter < 10)
// // console.log(summ)

// //Создать небольшую игру:)
// // - Изначально на экране пользователя будет отображаться
// //какая - то форма (круг, квадрат, прямоулольник)
// // - При нажатии на нее в рандомном порядке форма должна
// //меняться на другую
// // - Форма каждый раз должна появляться в разных местах на странице
// // - Цвет формы в рандомном порядке меняется,

// const forms = [
//   'width: 100px; height: 100px; border-width: 1px; border-color: #000000',
//   'width: 100px; height: 100px; border-radius: 50%; border-width: 1px; border-color: #000000',
//   'width: 150px; height: 100px; border-width: 1px; border-color: #000000',
//   'width: 200px; height: 100px; border-radius: 100px / 50px;',
//   'width: 150px; height: 100px; transform: skew(20deg);',
// ];

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

// const randomither = max => {
//   return Math.floor(Math.random() * max);
// };

const containerRef = document.querySelector('.container')
// console.log(containerRef);


// const formEl = document.createElement('div')
// containerRef.append(formEl)
// function generateForm() {
//     const randomIndex = randomither(forms.length)
//     formEl.style.cssText = forms[randomIndex]
//     formEl.style.backgroundColor = getRandomHexColor();
//     formEl.style.position = 'absolute'

//     let height = 100 - (formEl.clientHeight * 100) / document.documentElement.clientHeight
//     let width = 100 - (formEl.clientWidth * 100) / document.documentElement.clientWidth
//     formEl.style.top = `${randomither(height)}%`
//     formEl.style.left = `${randomither(width)}%`
//     console.log(height);
// }


// generateForm();
// formEl.addEventListener('click', generateForm)

//Создать маркированный список.
//Создать кнопки "Add" "Remove", которые будут менять состав списка
//Создать input с которого будем получать значение, которое будет в li
//Для выполнения задания используйте createElement

// const listEL = document.createElement('ol')
// const btnAdd = document.createElement('button')
// const btnRemove = document.createElement('button')
// const inputEl = document.createElement('input')

// btnAdd.textContent = "add"
// btnRemove.textContent = "remove"
// containerRef.append(listEL, btnAdd, btnRemove, inputEl)
// btnAdd.addEventListener('click', () => {
//     const itemEl = document.createElement('li')
//     itemEl.textContent = inputEl.value ? inputEl.value : 'nothing'
//     listEL.append(itemEl)
//     inputEl.value = ""
// })
// btnRemove.addEventListener('click', () => {
//     listEL.innerHTML = '';
// })
