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
//Используя функцию if...else,
//напишите код, который будет спрашивать:
//"Какое официальное название JavaScript?"
//Если пользователь вводит "ECMAScript",
//то показать через alert: "Верно!"
//в противном случае отобразить:"Не знаете? ECMAScript!"

// const nameJS = prompt("Какое официальное название JavaScript?")
// // if (nameJS === "ECMAScript") {
// //     alert("Верно!");
// // } else {
// //     alert("Не знаете? ECMAScript!")
// // }
// let message = "Не знаете? ECMAScript!"
// nameJS === "ECMAScript" ? message = "Верно!" : message;
// alert(message);

// function changeName(c1, c2, c3) {
//     let temp = c1;
//     c1 = c2;
//     c2 = c3;
//     c3 = temp;
//     console.log(c1, c2, c3);
// }
// changeName('Kuzkina', 'Olga', 'Vsevolodovna')
 
//Напишите цикл, который выводит в консоль
//числа от max до min по убыванию
// Додайте все четные числа от min до max
// const max = 50;
// const min = 23;
// let sum = 0

// for (let i = 50; i >= 23; i -= 1){
   
//     if (i % 2 === 0) {
        
//         continue;
//     }
//     console.log(i);
//     sum += i 
// }
// console.log(sum);

//Напишите цикл, который предлагает ввести
//число больше 100 через prompt.
//Если посетитель ввёл другое число - попросить
//ввести ещё раз и так далее.
//Цикл должет спрашивать число, пока посетитель не
//введёт число больше 100, либо не нажмет кнопку
//Отмена в prompt

// let newNumber = prompt('введите число больше 100') 
// console.log(newNumber);
// while (newNumber < 100 && newNumber !== null) {
//     newNumber = prompt('введите число больше 100');
// } 

//Елси число делиться на 3 возвращать
//fizz если делиться на 5 возвращать buzz
//елси делиться на 3 и на 5 возвращить fizzbuzz
 
// function fizzBuzz(number) {
//     for (let i = 1; i <= number; i+=1) {
//         if (i % 3 === 0 && i % 5 === 0) {
//             console.log('fizzbuzz');
//         } else if (i % 3 === 0) {
//             console.log('fizz');
//         } else if (i % 5 === 0) {
//             console.log('buzz');
//         } else {
//             console.log(i);
//         }
//     }
    
// }
// fizzBuzz(24)

//Напиши функцию findSmallerNumber(numbers)
//которая ищет самое маленькое число в массиве
//Добавь проверку что функция получает массив
//const numbers = [2, 5, 35, 56, 12, 24, 7, 80, 3];

// const numbers = [2, 5, 35, 56, 12, 24, 7, 80, 3, 1];

// function findSmallerNumber(numbers) {
//     let minNumber = numbers[0];
//     for (let i = 0; i < numbers.length; i += 1){
//         if (numbers[i] < minNumber){
//            minNumber = numbers[i]
            
//         }
//     }
//     console.log(minNumber);
// }
// function findSmallerNumber(numbers) {
//     let minNumber = [];
//     for (const number of numbers) {
//         console.log(number);
//     }
// }
// findSmallerNumber(numbers)
// const numbers = [5, 5, 5, 4, 7, 7, 7]
// console.log(numbers.reverse());
// for (let i = 0; i < numbers.length/2; i += 1){
//     let temp = numbers[i];
//     numbers[i] = numbers[numbers.length - 1 - i]
//     numbers[numbers.length - 1 -i] = temp

// }
// console.log(numbers);


//У нас есть объект, в котором храняться зарплаты
//нашей команды
//Напишите код для сумирования всех зарплат и
//сохраните его результат в переменной sum.
//Если объект salaries пуст, то результат должен быть 0
// const salaries = {
//   Mango: 100,
//   Poly: 160,
//   Ajax: 1470,
// };

// let sum = 0;
// const salarieValues = Object.values(salaries)
// console.log(salarieValues);
// for (const salarie of Object.values(salaries)) {
//     sum += salarie
// }
// console.log(sum);

//Напишите ф-цию calcTotalPrice(stones, stonesName),
//которая принимает массив объектов и
//строку с названием камня.
//Функция считает м возвращает общую стоимость камней
//с таким именем, ценой и количеством из объекта

// const stones = [
//     { name: "Изумруд", price: 1300, quantity: 4 },
//       { name: "Щебень", price: 150, quantity: 300 },
//   { name: "Бриллиант", price: 2700, quantity: 6 },
//   { name: "Сапфир", price: 400, quantity: 7 },
//   { name: "Щебень", price: 150, quantity: 100 },
// ];
// function calcTotalPrice(stones, stonesName) {
//     let sum = 0
//     for (const stone of stones) {
        
//         if (stone.name === stonesName) {
//             console.log(stone.name);
//             sum += stone.price * stone.quantity
           
//         }

//     }
//     return sum
// }
// console.log(calcTotalPrice(stones, 'Щебень'));
 
//Создайте объект calculator с тремя методами
//read(a, b) - принимает два аргумента и сохраняет их
//как свойства объекта
//sum() возвращает сумму сохраненных значений
//mult() перемножает сохраненные значения и возвращает результат

// const calculator = {
//     read(a, b) {
//         this.value1 = a;
//         this.value2 = b;

//   },
//     sum() {
//       return this.value1 + this.value2
//   },
//     mult() {
//       return this.value1 * this.value2
//   },
// };
// calculator.read(2, 3)
// console.log(calculator.mult()); 
// console.log(calculator.value1);

//Напишите функцию updateObject, которая принимает объект и возвращает
//новый объект без указанного параметра
//Ожидаемый результат ({a: 1. b: 2}, 'b') => {a: 1}
// ({a: 1, b: 2, c: 3}, 'b', 'a') => {c: 3}
// function updateObject(obj, ...removeKeys) {
//     console.log(removeKeys);
    // let newObject = { ...obj };
    // delete newObject[removeKeys]
    // return newObject
//     let newObject = { ...obj };
//     for (const key of removeKeys) {
//         delete newObject[key]
//     }
//     return newObject;
// }

// console.log(updateObject({ a: 1, b: 2, c: 3 }, 'b', 'a'));

// Напишите функцию, которая принимает как параметр объект
//и формирует объекты в новом массиве в формате [key, value]

// const user6 = {
//   name: "John",
//   surName: "Stones",
//   age: 20,
//   hobby: "tenis",
//   haveCar: true,
//   merried: false,
// };
// function createUsers(obj) {
//     const newUsers = Object.entries(obj)
    
//     console.log(newUsers);
// }
// createUsers(user6)

//Выполни рефакторинг makeDish так, чтобы не нужно было
//каждый раз передавать имя шефа.
//Напишите функцию makeShef(shefName) которая возвращает функцию
//makeDish(dish), помнящую имя шефа при её вызове

// const makeDish = function (shefName, dish) {

//   console.log(`${shefName} is cooking ${dish}`);
// };
// const makeShef = function (name) {
//     return function makeDish(dish) {
//         console.log(`${name} is cooking ${ dish }`);
//     }
// }
// const mango = makeShef('Mango')
// const poly = makeShef('Poly')
// mango('apple pie')
// poly('muffins')
// makeDish("Mango", "apple pie");
// makeDish("Poly", "muffins");

//Исправьте ошибки, чтобы код работал
// const product = {
//   price: 5000,
//   showPrice() {
//     console.log(this.price);
//   },
// };


// product.showPrice();

// // Исправьте ошибки, чтобы код работал
// const product = {
//   price: 5000,
//   showPrice() {
//     console.log(this.price);
//   },
// };

// function callAction(action) {
//   action();
// }

// callAction(product.showPrice.bind(product));

//6. Напишите функцию each(array, callback), которая
//первым параметром принимает массив, а вторым - функцию,
//которая применится к каждому элементу массива.
//Функция each должна вернуть новый массив, элементами
//которого будут результаты вызова callback
//callback функци должна умножать элементы на 2

// function each(array, callback) {
//     const newArray = [];
//     for (const key of array) {

//         newArray.push(callback(key))
//     }
// console.log(newArray);
// }

// const array = [3, 5, 6, 34, 8, 83, 12, 34];

// each(array, (number) => number * 2)

//Напишите функцию makeCounter, которая возвращает другую
//функцию, которая считает и логирует количество своих вызовов

// function makeCounter() {
//     let count = 0;
//     return function () {
//         count += 1;
//         console.log(count);
//     }
// }
// const counter = makeCounter()
// counter()
// counter()

//Напишите функцию savePassword(password) которая принимает
//пароль и возвращает внутреннюю функцию, которая принимает
//строку и возвращает буль true, если строка совпадает с сохраненным
//паролем и false - если не совпадает

// function savePassword(savedPassword) {
    
//     return function (password) {
//         return password === savedPassword;

//     }
    
// }
// const ourPassword = savePassword('1234')
// console.dir(ourPassword);
// console.log(ourPassword('1234'));

//Напишите функцию для хранения скидки.Функция возвращает
//другую функцию, которая принимает сумму покупки
//и возвращает финальную сумму с сохраненной скидкой.

// function saveDiscount(discount) {
//     return function makeDiscount(summ) {
//         return summ - summ * discount / 100
//     }
// }
// const discountPremium = saveDiscount(70)
// console.log(discountPremium(1200));

//Назначить скидку 20% на фрукты в массиве,
//присвоить id для каждого продукта

// const fruits = [
//   { name: 'apple', price: 200 },
//   { name: 'orange', price: 300 },
//   { name: 'grapes', price: 750 },
// ];
// const discountFruits = fruits.map((fruit) => {
//     return {...fruit, price: fruit.price * 0.8, id: Date.now()}
// })
// console.log(discountFruits);

//Реализовать фильтер по свойству amount и получить
//только название модели

// const vehicles = [
//   { make: 'Honda', model: 'CR-V', type: 'suv', amount: 14, price: 24045, onSale: true },
//   { make: 'Honda', model: 'Accord', type: 'sedan', amount: 2, price: 22455, onSale: true },
//   { make: 'Mazda', model: 'Mazda 6', type: 'sedan', amount: 8, price: 24195, onSale: false },
//   { make: 'Mazda', model: 'CX-9', type: 'suv', amount: 7, price: 31520, onSale: true },
//   { make: 'Toyota', model: '4Runner', type: 'suv', amount: 19, price: 34210, onSale: false },
//   { make: 'Toyota', model: 'Sequoia', type: 'suv', amount: 16, price: 45560, onSale: false },
//   { make: 'Toyota', model: 'Tacoma', type: 'truck', amount: 4, price: 24320, onSale: true },
//   { make: 'Ford', model: 'F-150', type: 'truck', amount: 11, price: 27110, onSale: true },
//   { make: 'Ford', model: 'Fusion', type: 'sedan', amount: 13, price: 22120, onSale: true },
//   { make: 'Ford', model: 'Explorer', type: 'suv', amount: 6, price: 31660, onSale: false },
// ];
// const filterCar = vehicles.filter(({amount}) => amount >= 12).map(({model}) => model)
// console.log(filterCar);

// const getAvailableCarNames = (cars, amountThreshold) => {
//     return cars.reduce((acc, car) => {
//         if (car.amount >= amountThreshold) {
//             return [...acc, car.model]
//         }
//         return acc
//     }, [])
    
// };

// console.table(getAvailableCarNames(vehicles, 10));

//Получить машины на распродаже и сортировать по убыванию цены

// const filterCar = vehicles.filter((car)=> car.onSale ).sort ((a, b) => b.price - a.price)
    
// console.table(filterCar);

//Собрать в allTopics массив всех предметов всех курсов
//Выполнить фильтрацию, оставив в uniqueTopics только уникальные элементы

// const courses = [
//   {
//     name: 'Basic HTML+CSS',
//     topics: ['VSCode', 'HTML', 'CSS', 'GitHub', 'GitHub Desctop'],
//   },
//   {
//     name: 'Intermediate HTML+CSS',
//     topics: ['VSCode', 'HTML', 'CSS', 'GitHub', 'Git', 'Terminal'],
//   },
//   {
//     name: 'Basic JavaScript',
//     topics: [
//       'VSCode',
//       'Type system',
//       'Loops',
//       'Function',
//       'Git',
//       'Conditions',
//       'Classes',
//       'GitHub',
//       'DOM',
//     ],
//   },
//   {
//     name: 'Intermediate JavaScript',
//     topics: ['VSCode', 'NPM', 'Bundlers', 'Transpiling', 'Git', 'Promises', 'AJAX', 'GitHub'],
//   },
// ];

// const allTopics = courses.flatMap(course => course.topics)
//     .filter((course, index, array) => array.indexOf(course) === index)
//     console.table(allTopics)

// const topic = courses.flatMap(course => course.topics).reduce((acc, topic) => {
//     return {...acc, [topic]: acc[topic] ? acc[topic] + 1 : 1}
// },{})
// console.log(topic);

//Узнать общие годы практики в объекте workers

// const workers = [
//   { id: 10, name: 'Mango', years: 14 },
//   { id: 2, name: 'Poly', years: 19 },
//   { id: 41, name: 'Ajax', years: 30 },
//   { id: 99, name: 'Kiwi', years: 22 },
// ];

// const allYears = workers.reduce((acc, { years }) => {
//     return acc += years
// }, 0)
// console.log(allYears);

// Дан массив с числами. Оставьте в нем только положительные числа.
//Затем извлеките квадратный корень и этих чисел.
// const array = [121, -2, 225, 0, 4, -5, 36, -11];
// const filterNum = array.filter(arr => arr > 0).map((arr) => {
// return Math.sqrt(arr)
// })


// console.log(filterNum);

//Создание массива значений Фаренгейта из массива значений Цельсия
// let celsius = [-15, -5, 0, 10, 16, 20, 24, 32];

// let farengeit = celsius.map((cel) => cel * 1.8 + 32)
    
// console.log(farengeit);

// Найти уникальные элементы с помощью reduce
// const numbers = [1, 9, 0, 1, 5, 9, 1, 6];

// const uniElement = numbers.reduce((acc, number) => {
//     if (acc.includes(number)) {
//      return acc
//     } else {
//         return [...acc, number]
//  }
//     return acc.includes(number) ? acc : [...acc, number]

// }, [])
// console.log(uniElement);

//Нужно проверить "same" массивы
//числа с первого в квадрате равны числам второго
const a = [121, 144, 19, 161, 19, 144, 19, 11, 5];
const b = [121, 14641, 20736, 361, 25921, 361, 20736, 361];

if (a.length !== b.length) {
    console.log('ne ravni');
}

const bRef = b.map((arr) => {
    return Math.sqrt(arr);
})

const sortA = [...a].sort((a, b) => a - b)
const sortB = [...bRef].sort((a, b) => a - b)

for (let i = 0; i <= sortA.length; i += 1){
    if (sortA[i] !== sortB[i]) {
        console.log(false);
        break
    }
}
console.log('true');

