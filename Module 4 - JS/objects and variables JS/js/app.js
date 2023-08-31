/* Контрольное задание 6 */

let mercedes = {
    name: 'Mercedes',
    model: 'GL450',
    engine: 4.0,
    year: 2015,
    color: 'black',
    hp: 300,
    forSale: true
};

let bmw = {
    name: 'BMW',
    model: 'X6',
    engine: 3.0,
    year: 2018,
    color: 'white',
    hp: 313,
    forSale: false
};

let audi = {
    name: 'Audi',
    model: 'Q7',
    engine: 3.0,
    year: 2021,
    color: 'blue',
    hp: 249,
    forSale: true
};

/* Часть 1 */

// 1.
let year = 2023;

// 2.
mercedes.carAge = year - mercedes.year; // 8
bmw.carAge = year - bmw.year; // 5
audi.carAge = year - audi.year // 2

// 3.
let names = (mercedes.name + " " + mercedes.model + ", " + bmw.name + " " + bmw.model + ", " + audi.name + " " + audi.model);
console.log(names); // Mercedes GL450, BMW X6, Audi Q7

// 4.
let averageAge = (mercedes.carAge + bmw.carAge + audi.carAge) / 3;
console.log(averageAge); // 5

// 5.
let atLeastOneForSale = mercedes.forSale || bmw.forSale || audi.forSale;
console.log("Хотя бы один автомобиль продаётся? - " + atLeastOneForSale); // true
// alert("Хотя бы один автомобиль продаётся? - " + atLeastOneForSale);

// 6.
let allYoungerThanFive = mercedes.carAge < 5 && bmw.carAge < 5 && audi.carAge < 5;
console.log("Все авто младше 5 лет? - " + allYoungerThanFive); // false
// alert("Все авто младше 5 лет? - " + allYoungerThanFive);

// 7.
let atLeastOneHasLittleHp = mercedes.hp < 250 || bmw.hp < 250 || audi.hp < 250;
console.log("Хоть один автомобиль имеет менее 250 лошадиных сил? - " + atLeastOneHasLittleHp); // true
// alert("Хоть один автомобиль имеет менее 250 лошадиных сил? - " + atLeastOneHasLittleHp);

/* Часть 2 */

// 1
let car = {
    name: 'BMW',
    model: 'X6',
    engine: 3.0,
    year: 2018,
    color: 'white',
    hp: 313,
    forSale: false,
    carAge: year - bmw.year // 5
}

// 2
if(car.name === 'Mercedes' && car.model === 'GL450') {
    console.log('Мой любимый мерседес');
    // alert('Мой любимый мерседес');
} else {
    console.log("Это - " + car.name + " " + car.model);
    // alert("Это - " + car.name + " " + car.model);
}

// 3
if(car.carAge < 1) {
    console.log("Новый автомобиль");
} else if (car.carAge <= 3) {
    console.log("Свежий автомобиль");
} else {
    console.log("Лет этому авто: " + car.carAge);
}

// 4
let consumption = car.engine > 3.0 ? "Прожорливый автомобиль" : "Экономичный автомобиль";
console.log(consumption);
// alert(consumption);

// 5
let russianColor;

switch (car.color) {
    case 'black':
        russianColor = 'черный';
        break;
    case 'silver':
        russianColor = 'серебристый';
        break;
    case 'red':
        russianColor = 'красный';
        break;
    case 'white':
        russianColor = 'белый';
        break;
    case 'gray':
        russianColor = 'серый';
        break;
    case 'blue':
        russianColor = 'синий';
        break;
    default:
        russianColor = 'Невозможно определить цвет автомобиля.';
}

console.log(russianColor); // белый
// alert(russianColor);


