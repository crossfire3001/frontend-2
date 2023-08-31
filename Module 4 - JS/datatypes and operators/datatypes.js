/* === Типы данных === */

// 1. Числа (Number) - 1, 1982, 0.4, -444
// 2. Строки (String) - a, hi, (пробелы), абзацы, #$%@
// 3. Логический (Boolean) - true/false
// 4. Пустое значение (null) - Значение "пусто"
// 5. Отсутствие значения (undefined) - значения не существует
// 6. Объект (Object) - структура данных, содержащая простые типы: {name: "Anton", last_name: "Fedorovic", age: 18}
// 7. Массив (Array) - Набор данных (на основе объекта) в определенной последовательности: [1, 2, 3, 4, 5],
// [{name: "Alex", age: 25}, {name: "Sofia", age: 22}]

/* === Переменные === */

// Переменная - контейнер, хранящий данные в памяти компьютера five = 5

// В JS нет типизации - это значит, что тип данных в переменной может быть любой
// number = 5; --> number = "Привет"; --> number = null;

// Создание переменной в JS - var название = значение;

/* === Примеры переменных === */

// Числа (Number) - var five = 5
// Строки (String) - var hello = "hello"
// Логический (Boolean) - var condition = true
// Пустое значение - var empty = null
// Отсутствие данных - var noData = undefined <-- этого не существует
// Объект (Object) - var obj = {five: 5}
// Массив - var numbers = [1,2,3,4,5]

/* === Изменение значения переменной === */

let five = 5;
five = 9;
console.log(five); // 9

let nine = 3;
nine = 9 > 3;
console.log(nine); // true

let ten;
console.log(ten); // undefined

/* === Объект в переменной === */
let obj = {
    name: "Jerry",
    lastName: "Jefferson",
};

let car = {
  name: "Ford Mustang",
  color: "red",
  hp: 500,
};

/* === Доступ к свойствам объекта === */
console.log(car.name);

/* === Добавление свойств объекта === */
car.year = 2010;
console.log(car.year);

/* === Копирование из одной переменной в другую === */
let my1 = 1;
let my2 = 2;

my2 = my1;

console.log(my2);