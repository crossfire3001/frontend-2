let button = document.querySelector('.button');

function f(e) {
    console.log(e.target);
}

button.addEventListener('click', f);

button.removeEventListener('click', f);

// Остановка события
let link = document.querySelector('a');
link.addEventListener('click', (e) => {
    e.preventDefault();
});

// Распространение событий
let btn = document.querySelector('.btn');
let div = document.querySelector('div');

btn.addEventListener('click', (e) => {
   console.log('btn');
   e.stopPropagation();
});

/* div.addEventListener('click', (e) => {
    console.log(e.target.nodeName);
    if (e.target.nodeName.toLowerCase() === 'div') {
        console.log(e.target);
    }
}); */

// Запрет на распространения событий
//event.stopPropagation(); // Событие не будет распространяться дальше и всплывет только у основного элемента

div.addEventListener('click', (e) => {
    let element = e.target;
    if(element.nodeName.toLowerCase() === 'button') {
        element = element.parentElement;
    }
    element.style.backgroundColor = 'green';
})


//
let input = document.getElementById('input');
input.onkeydown = (e) => {
    let number = parseInt(e.key);
    if (isNaN(number)) {
        return false; // запрет на ввод букв в инпут
    }
};

input.onfocus = (e) => {
  console.log('ON-FOCUS');
};

input.onblur = (e) => {
    e.target.value = e.target.value.slice(0, 3) + '-' + e.target.value.slice(3, 5) + '-' + e.target.value.slice(5, 7);
};

// Событие изменения значения элемента - onchange (возникает как только у элемента изменится value)
input.onchange = (e) => {
    e.target.value = e.target.value.slice(0, 3) + '-' + e.target.value.slice(3, 5) + '-' + e.target.value.slice(5, 7);
};

// Событие при отправке формы - onsubmit
form.onsubmit = (e) => {
    e.preventDefault(); // отменить отправку формы
    // return false; - второй вариант отмены
}

// Событие загрузки страницы - onload (всплывает, когда страница полностью загружена)
window.onload = function () {
    // страница полностью загружена
}






