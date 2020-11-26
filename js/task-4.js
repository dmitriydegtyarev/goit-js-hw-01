let credits = 23580;
let pricePerDroid = 3000;
let order = Number;

order = prompt('Введите колличество ремонтных дроидов');

let totalPriceNegative = Number;
let totalPrice = Number;

totalPriceNegative = order * pricePerDroid - credits;
totalPrice = credits - (order * pricePerDroid);

if (order === null) {
  alert('"Отменено пользователем!"');
} else if (order == 0) {
  alert('Вы указали недопустимое значение, укажите количество дроидов от 1 шт и выше!');
} else if (order * pricePerDroid > credits){
  alert(`Недостаточно средств на счету! Вам не хватает ${totalPriceNegative} кредитов`);
} else if (order * pricePerDroid < credits) {
  alert(`Вы купили ${order} дроидов, на счету осталось ${totalPrice} кредитов.`);
} else {
  alert('Повторите ввод, необходимо ввести цифровое значение');
}