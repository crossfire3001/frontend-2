/* ===== Функция parseInt ===== */

// Приводит строку с целому числу
let number = '123c';
let result = parseInt(number);
console.log(result); // 123

/* ===== Функция parseFloat ===== */

// Приводит строку к дробному числу
let number2 = '12.3c';
let result2 = parseFloat(number2);
console.log(result2); // 12.3

/* ===== Ошибки в коде ===== */

// Обработка ошибок try/catch
try {
    // любой код, который потенциально может вызвать ошибку
} catch (переменная) {
    // любой код обработки этой ошибки
}

// пример 2
try {
    console.log(a);
} catch (error) {
    console.log(error);
}


