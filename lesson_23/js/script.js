//Циклы FOR и WHILE ================================================

//Задание 1, цикл while:
let num = '';
while (num < 5) {
	++num;
	console.log(num);
}

//Задание 1, цикл while, вариант 2:
let num1 = 0;
while (num1 !== 5) {
	++num1;
	console.log(num1);
}

//Задание 1, цикл do while:
let num2 = '';
do {
	num2++;
	console.log(num2);
} while (num2 < 5);

//Задание 1, цикл do while, вариант 2:
let num3 = 0;
do {
	++num3;
	console.log(num3);
} while (num3 !== 5);

//Задание 1, цикл for:
let num4 = 0;
for (num4; num4 < 5; ) {
	++num4;
	console.log(num4);
}

//Задание 1, цикл for, вариант 2:
for (let num5 = 1; true; num5++) {
	console.log(num5);
	if (num5 == 5) break;
}

//Задание 3, переписать цикл на while:
/* for (let key = 0; key < 3; key++) {
	console.log(`Число: ${key}`);
} */
let key = 0;
while (key < 3) {
	console.log(`Число: ${key}`);
	++key;
}

//Задание 4: Прекратить работу цикла 1 когда size равна 1.
key2cycle: for (let key2 = 0; key2 < 3; key2++) {
	for (let size = 0; size < 3; size++) {
		console.log(size);
		if (size == 1) {
			break key2cycle;
		}
	}
}

//Числа в JAVASCRIPT ================================================

// Задание №1. Получить верное значение округления
let numOne = Math.round((1.005 + Number.EPSILON) * 100) / 100;
console.log(numOne);

// Задание №2. Получить число 135.58 из строки
let value = '135.58px';
console.log(parseFloat(value));

// Задание №3. Посттроить верное условное ветвление
let value2 = 58 + 'Фрилансер';
// if (value2 == '58Фрилансер') вариант решения номер 1 по идее он хуже второго?
if (isNaN(value2)) {
	console.log('Результат выражения NaN');
}

// Задание №4.
// Найти максимальное число из
let maxValue = Math.max(0, 58, 39, -150, 0);
console.log(maxValue);

// Задание №5.
// Округлить число 58.858 до числа 58
let number = Math.floor(58.858);
console.log(number);

//Строки в JAVASCRIPT ================================================

//Задание №2.
// Получить букву 'н' из строки:
let text = 'фрилансер';
console.log(text[5]);

console.log(text.at(-4));

let symbol = text[text.length - 4];
console.log(symbol);

//Задание №4.
// Получить стркоу в верхнем регристре:
let testText = 'фрилансер';
console.log(testText.toUpperCase());

//Задание №5.
// Получить подстроку 'лан' из строки:

let textTest = 'фрилансер';
console.log(textTest.slice(3, 6));

console.log(textTest.includes('лан',4));
