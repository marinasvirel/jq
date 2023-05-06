$('a'); // Выборка по тегу
$('.logo'); // Выборка по классу
$('#recive'); // Выборка по id
$('nav menu'); // Вложенная выборка
$('.icons > div'); // Дочерний селектор
$('.icons img + h4'); // Соседний элемент (следующий после объявленного (+))
$('img[height=150]'); // Элементы по атрибутам (по высоте)
$('img[src$=".png"]'); // Элементы по записи (конец записи)

//Фильтрация выборок
$('menu li:even'); // нечётные элементы (счет от нуля не так как в css)
$('menu li:odd'); // чётные элементы (счет от нуля не так как в css)
$('img:not(.logo img)'); // кроме выбранного 
$('li:has(a)'); // имеет внутри себя
$('p:contains(client)'); // имеет внутри себя контент
$('li:first'); // первый элемент
$('li:last'); // последний элемент
$('div:hidden'); // скрытые элементы

//Выбор нескольких элементов
$('img, a');

//Переменные
var tagP = $('.mainText p');

//Функция text()
// alert(tagP.text()); //Извлечение
// tagP.text('Новый текст для тега p'); // Изменение

//Функция hide(), show()
// tagP.hide(); //Скрыть элемент
// tagP.hide(3000); //Скрыть элемент за 30 млск
// tagP.show(); //Показать элемент
// tagP.show(3000); //Показать элемент за 30 млск

//Цепные функции
// tagP.hide(3000).show(3000);

// Автоматические циклы
// $('.icons > div').hide(3000);

// Изменение высоты и ширины элементов
var btn = $('.btn');
// alert(btn.width()); //Вывод ширины
// alert(btn.height()); //Вывод высоты
// btn.width(300);
// btn.height(300);

//Метод html()
// alert($('.mainText').html());
// $('.mainText').html('<b>Новый заголовок</b>');

// Анимация fadeIn(), fadeOut()
// $('.mainText').fadeOut(2000).fadeIn(2000);

//Прозрачность элемента fadeTo()
// $('.mainText').fadeTo(2000, 0.5);
// $('.mainText').fadeTo(2000, 0.5).fadeTo(2000, 1);

//Свернуть-развернуть элемент slideUp() slideDown()
// $('.mainText').slideUp(2000).slideDown(2000);

//Добавление и удаление атрибутов attr(), removeAttr()
// var src = $('.logo img').attr('src'); //Извлечение
// alert(src);
// var src = $('.logo img').attr('src', 'img/icon1.png'); // Изменение
// var src = $('.logo img').attr('title', 'Подсказка'); // Добавление
// var src = $('.logo img').removeAttr('src'); // Удаление

//Добавление и удаление классов addClass(), removeClass()
// $('nav menu').addClass('border');
// $('nav menu').removeClass('border');

//Добавление стилей без css
// $('nav menu').css('font-size');
// alert($('nav menu').css('font-size'));
// $('nav menu li a').css('color', 'red');
// $('nav menu li a').css('color', 'red').css('font-size', '20px');
//Объект для множества стилей
// $('nav menu li a').css({
//   'color': 'red',
//   'font-size': '20px',
//   'padding': '20px',
// });

//Анимация
// $('nav menu li a').animate({
//   // Цвет изменить нельзя. Анимация работает только для числовых свойств
//   'font-size': '20px',
//   'padding': '20px',
// }, 3000);

//Добавление html кода
// $('.mainText').before('<span>Новый блок перед</span>');
// $('.mainText').after('<span>Новый блок после</span>');
// $('.mainText').append('<span>Новый блок внутри в конце</span>');
// $('.mainText').prepend('<span>Новый блок внутри в начале</span>');

//Ручные циклы
// $('.icons img').each(function () {
//   if ($(this).attr('src') == 'img/icon3.png') {
//     $(this).fadeOut(1000);
//   }
// });

//Количество элементов в выборке
// $('div').length;
// alert($('div').length);

//Клонирование объекта
// var mainText = $('.mainText').clone();
// $('body').append(mainText);

// События
// $('.logo').mouseover(); // Наведение мыши
// $('.logo').mouseout(); // Отведение мыши
// $('.logo').mousemove(); // Передвижение мыши
// $('.logo').mouseup(); // Нажатие мыши
// $('.logo').click(); // Клик
//
// Реакция на событие
// $('.logo').mouseup(function(){
//   alert('Событие');
// });
//
//submit - нажата кнопка типа submit
//focus - фокус для input
//blur - снятие фокуса для input
//change - изменение для input
//reset - для кнопки с типом reset
//Для клавиатуры
//keypress - нажатие кнопки на клавиатуре
//keydown - кнопка нажата, но еще не отпущена
//keyup - момент, когда кнопка отпускается
// Глобальные события
//load - проверяет загружен ли документ
//resize - проверяет меняется ли размер окна браузера
//scroll - проверяет скролл

//Модель событий
// $(window).scroll(function(){
//   alert("Scroll");
// });
//
// $('.arrowDown').click(function(){
//   var clone = $(this).clone();
//   $(this).after(clone);
// });
//
// var link = $('menu li a');
// link.mouseover(function(){
//   $(this).addClass('border');
// });
// link.mouseout(function(){
//   $(this).removeClass('border');
// });
//

// Объект события eventObject
// $('.mainText').click(function(e){
//   alert(e.screenX);
// });

// Отмена обычного поведения элемента
// $('.btn').click(function(e){
//   e.preventDefault();
// });