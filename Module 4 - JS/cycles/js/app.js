/* Цикл for */

let array = [1, 5, 10, 8, 15, 108];
let sum = 0;

for (let i = 0; i < array.length; i++) {
    sum = sum + array[i];
}

console.log(sum); // 147

/* Операторы прерывания циклов */

// break - полностью завершает цикл
// continue - завершает итерацию (текущий шаг) и переходит к следующей

let array2 = [1, 5, 10, 8, 15, 108];
let sum2 = 0;

for (let i = 0; i < array2.length; i++) {
    if (array2[i] > 5) {
        break;
    }
    console.log(array2[i]); // 1,5
}

// пример 2
let array3 = [1, 5, 10, 8, 15, 108];
let sum3 = 0;

for (let i in array3) {
    if (array3[i] > 5) {
        continue;
    }
    console.log(array3[i]);
}

// пример 3
for (let item of array3) {
    if (array3[item] > 5) {
        continue;
    }
    console.log(array3[item]);
}

/* Цикл forEach */

let array4 = [1, 3, 6, 10, 111];

array4.forEach((item, index) => {
    if(item === 6) {
        return; // пропускает 6
    }
    console.log(item, index);
});

/* Цикл while */

let num3 = 35;
let i = 0; // можно узнать сколько раз происходил цикл

while (num3 % 100 !== 0) {
    num3 += 35;
    i++;
}

console.log(num3); // 700

/* Циклы while и do/while */

// while(условие) {..выполняется, пока условие true}

// do {..выполняется 1 раз точно, далее пока условие true} while (условие)

let num4 = 35;

do {
    num4 += 35;
} while (num4 < 50);

console.log(num4);

/* Пример отправки e-mail пользователю */

let result = false;
let sendMail;

while (!result) {
    result = sendMail();
} // даже не попытается отправить письмо, ведь result - undefined

// пример 2

do {
    result = sendMail();
} while (!result); // будет пытаться отправить письмо, пока не получит result отличное от false





