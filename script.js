var quest = +prompt('Введите свой возраст');
if (quest > 0 && quest <= 18 ) {
    alert('Вы ещё молоды, Вам нужно учиться');
}
else if (quest > 18 && quest <= 50 ) {
    alert('Вам нужно работать');
}
else if (quest > 50 && quest <= 59 ) {
    alert('Вам скоро на пенсию');
}
else if (quest > 59 && quest <= 150 ) {
    alert('Вы пенсионер');
}
else {
    alert('Что то пошло не так');
}