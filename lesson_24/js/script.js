'use strict';
//Задание из нетрнета, интересны коментарии к коду)  он работает согласно задачи, но что можно улучшить?

/* Напишите код, который будет спрашивать логин с помощью prompt.
Если посетитель вводит «Админ», то prompt запрашивает пароль, если ничего не введено или нажата клавиша Esc – показать «Отменено», в противном случае отобразить «Я вас не знаю».

Пароль проверять так:
Если введён пароль «Я главный», то выводить «Здравствуйте!»,
Иначе – «Неверный пароль»,
При отмене – «Отменено». */

const admin = 'Админ';
const adminHello = 'Здравствуйте!';
const unknownUser = 'Я вас не знаю';
const incorrectPassword = 'Неверный пароль';
const canceled = 'Отменено';

let adminPassword = 'Я главный';
let login = prompt('Логин');

if (login == admin) {
	let password = prompt('Пароль');
	if (password == adminPassword) {
		alert(adminHello);
	} else if (password == null || password == '') {
		alert(canceled);
	} else {
		alert(incorrectPassword);
	}
} else if (login == null || login == '') {
	alert(canceled);
} else {
	alert(unknownUser);
}

//================================================= Домашка функции
function showName() {
	console.log('Вася!');
}
setTimeout(showName, 0);
console.log('Коля!');

//  Задание №4
let showMassage;
if (2 > 1) {
	showMassage = function showMessage() {
		console.log('Сообщение');
	};
}
showMassage();

//================================================= Домашка массивы
// Задача №2.
/*
Создайте массив users с элементами "Ваня" и "Иштван".
Добавьте "Оля" в конец.
Замените значение в "Иштван" на "Петя".
Ваш код для поиска значения должен
работать для массивов с любой длиной.
Удалите первый элемент массива и покажите его.
Вставьте "Маша" и "Паша" в начало массива.
*/
let users = ['Ваня', 'Иштван'];
// Добавляем Олю в конец массива
users.push('Оля');
// Меняем Иштвана на Петю таким образом, чтобы Иштвана мы нащли где угодно в массиве(если не находим - ничего не делаем)
let findValue = users.indexOf('Иштван');
if (findValue == 1) {
	users.splice(findValue, 1, 'Петя');
}
// Удаляем первое значение и выводим его в новую переменную, выводим ее.
let deletedUser = users.splice(0, 1);
console.log(deletedUser);
// // Добавляем в начало массива Машу и Пашу
users.unshift('Маша', 'Паша');

// Задача №3.
// Удалить элемент 'Иштван' и возвратить его в переменную
let arr = ['Ваня', 'Иштван', 'Оля'];

let deleted = arr.splice(1, 1);
console.log(deleted);

// // Задача №4.
// //Сделать из строки массив
let str = 'Ваня,Иштван,Оля';

let array = str.split(',');
console.log(array);

//================================================= Домашка DOM

// Задача №1.
// Получить в переменную элемент с атрибутом data-say-hi
// и прочитать значение этого атрибута
/* <div data-say-hi="yes">Привет!</div> */
const hiText = document.querySelector('[data-say-hi="yes"]');
console.log(hiText.getAttribute('data-say-hi'));

// Задача №2.
// Получить в переменную элемент с текстом Йончи
const yonchi = document.querySelector('ul.hidden');
const yonchiText = yonchi.firstElementChild;
console.log(yonchiText);

// Задача №3.
// Получить в переменную коллекцию элементов с классом like
const like = document.querySelectorAll('.like');
console.log(like);
