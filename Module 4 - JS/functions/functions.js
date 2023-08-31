/* Передача параметров в функцию */
function showMessage(message) {
    let result = 'Ваше сообщение: ' + message;
    console.log(result);
}

showMessage('ni hai 1');
showMessage('ni hai 2');
showMessage('ni hai 3');


/* Передача нескольких параметров */
function sum(a, b) {
    let sum = a + b;
    console.log('Сумма: ' + sum);
}

sum(1, 2);
sum(3, 4);

// отсутствие второго аргумента
sum(10) // NaN

// параметры по умолчанию если 2-й параметр не был передан
function minus(a, b = 1) {
    let minus = a - b;
    console.log('Сумма: ' + minus);
}

minus(10); // 9

let one = 1;
let two = 2;
let three = 3;

// передача внешних переменных
minus(three, two);


/* Возвращение результата */

function my(a, b) {
    return a + b;
}

let total = my(1, 3);
console.log(total); // 4

// пример 2
function f(a, b) {
    let sum = a + b;
    return sum;
}

let results = f(3, 10);
console.log(results);
console.log('Результат ' + f(three, two));

/* Функция может быть в переменной */
let os = function(a, b) {
    return a + b;
} // В отличие от обычной функции ее можно вызывать только после объявления

/* Функция в составе объекта */
let object = {
    multiply: function(a, b) { // анонимная функция
        return a * b;
    }
}

console.log(object.multiply(3, 6));

/* Использование анонимных функций */

function func(param) {
    param();
}

func(function () {
    console.log('1'); // передача анонимной функции
});

/* Преждевременное использование return сразу завершает функцию */

function f1(a, b) {
    let sum = a + b;
    return;
    // тут код уже не выполнится
}

// пример 2
let obj = {
    sumTwo: function(a, b) {
        if(a === 0) {
            return null;
        }
        return a + b;
    }
}

let resTwo = obj.sumTwo(1, 3);
console.log(resTwo); // 4
let resThree = obj.sumTwo(0, 3);
console.log(resThree); // null

/* Области видимости функций */

function f2(b) {
    let a = 1;
}

// console.log(a); // ошибка

/* Правильная функция */

function whatToDo(weather) {
    if (weather) {
        switch (weather) {
            case 'дождь':
                return 'Взять зонт!';
            case 'град':
                return 'Одеть шапку!';
            }
        } else {
            return 'Невозможно определить погоду';
        }
}

whatToDo('дождь');
whatToDo('град');

console.log('Если будет дождь, то я буду ' + whatToDo('дождь') + ', ' +
    'но если будет град, то я буду ' + whatToDo('град'));

/* Использование объектов */

let person = {
    name: 'Alex',
    age: 20
}

let person2 = {
    name: 'Sofia'
}


function checkAge(object) {
    if (!object.age) {
        return;
    }
    if (object.age >= 18 && object.age < 30) {
        console.log('Возраст подходит');
    } if (object.age !== 25) {
        console.log('Не четверть века');
    }
}

checkAge(person);
checkAge(person2);
checkAge({name: 'bobby', age: 29});

// пример 2

function checkAgeTwo(age) {
    if (!age) {
        return;
    }
    if (age >= 18 && age < 30) {
        console.log('Возраст подходит');
    } if (age !== 25) {
        console.log('Не четверть века');
    }

}

checkAgeTwo(person.age);
checkAgeTwo(person2.age);
checkAgeTwo(29);


