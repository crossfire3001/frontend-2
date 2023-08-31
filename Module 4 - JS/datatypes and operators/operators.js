/* === Операции и операторы === */

let result = 2 + 5 + (3 + 7) * 3; // 37
console.log(result);

/* === Деление по модулю === */

// Нахождение остатка от деления чисел 10 % 3 = 1, 10 % 2 = 0, 15 % 11 = 4
// Используется для определения четности/нечетности чисел

/* === Инкремент и декремент === */
let a = 5;
a++; // a = a + 1
console.log(a); // 6

let b = 10;
++b;
console.log(b); // 11

let c = 15;
let res = c++;
console.log(c); // 16
console.log(res); // 15

let d = 3;
let resx = ++c;
console.log(d); // 3
console.log(resx); // 4

let ab = 5;
ab += 10;
console.log(ab); // 15

/* === Операторы сравнения в JS === */

// Обычно сравниваются 2 операнда (числа, строки, объекты и др.) - Возвращают логическое значение (true/false)

let kk = 1;
let abc = 3;
let resa = kk === abc;
console.log(resa); // false
