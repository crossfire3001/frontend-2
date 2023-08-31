/* Доступ к свойствам объекта */

let obj = {
    prop: {
        prop1: {
            prop2: {
                prop3: 'value'
            }
        }
    }
}

console.log(obj.prop.prop1.prop2.prop3); // value
console.log(obj['prop']['prop1']['prop2']['prop3']); // value

// пример 2
let obj2 = {
    prop: 'test'
}

console.log(obj2.prop); // через точку
console.log(obj2['prop']); // через []

// Пример доступа к свойству через значение в переменной
let obj3 = {
    prop: 'apple'
}

let propKey = 'prop';
console.log(obj3[propKey]); // не знаете какое свойство там может находиться и будет найдено по ключу

// пример 3
let person = {
    name: 'Kudzu'
}

console.log(person['name']);

// пример 4
let person2 = {
    name: 'Kudzu'
}

let name = 'name';

console.log(person2['name']);

/* Доступ к данным внутри объекта */

let person3 = {
    name: 'Josef',
    personalData: {
        age: 20,
        job: {
            salary: 2000,
            company: {
                title: 'Google',
                country: 'USA'
            }
        }
    }
}

/* Стандартные функции объекта */

person.hasOwnProperty('name'); // true
person.hasOwnProperty('lastName'); // false

/* Массивы */

// Изменение 2 значения в массиве
let basket = ['яблоко', 'апельсин', 'банан'];
basket[1] = 'киви'; // массив стал таким ['яблоко', 'киви', 'банан']

/* Добавление элемента в конце массива */

basket.push('рыба');
console.log(basket); // ['яблоко', 'киви', 'банан', 'рыба']

/* Удаление последнего элемента из массива */

basket.pop();
console.log(basket); // ['яблоко', 'киви', 'банан']

/* Удаление конкретного элемента из массива */

basket.splice(1, 1);
console.log(basket); // ['яблоко', 'банан']
console.log(basket.indexOf('яблоко')); // 0

/* Массив объектов */

let people = [
    {
        name: 'Ivan',
        lastName: 'Ivanov'
    },
    {
        name: 'George',
        lastName: 'Wilson'
    }
]

/* Свойство массива length */

let trash = ['apple', 'ginger', 'spice'];

console.log(trash.length) // 3;

/* Количество элементов в объекте */

console.log(Object.keys(person3)); // name, personalData
console.log(Object.keys(person3).length); // 2

/* Разные данные в массиве */

let array = [{
    name: 'Evangelos'
    },
    13,
    'string',
    true
]

console.log(array[0].name) // Evangelos

/* Глобальные объекты в JS */

// Специальные объекты, доступные в любом месте кода

// объект Math
console.log(Math.pow(2,2)); // 4

let number = 7;
console.log(Math.pow(number, 3)); // 343

/* Свойства у строк */

let name2 = 'John';
console.log(name2.length); // 4











