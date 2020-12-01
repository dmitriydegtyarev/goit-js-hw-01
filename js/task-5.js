let cost = 0;
let countryDelivery = '';
let country = '';


country = prompt('Укажите страну доставки');
// country = country.toLowerCase();

if (country === null) {
  alert('"Отменено пользователем!"');
} else {
  switch (country) {
  case 'китай':
    cost = 100;
    countryDelivery = 'Китай';
    break;
  
  case 'чили':
    cost = 250;
    countryDelivery = 'Чили';
    break;
  
  case 'австралия':
    cost = 170;
    countryDelivery = 'Австралию';
    break;
  
  case 'индия':
    cost = 80;
    countryDelivery = 'Индию';
    break;
  
  case 'ямайка':
    cost = 120;
    countryDelivery = 'Ямайку';
    break;
  
  default:
      alert('"Доставка в Вашу страну не осуществляется!"');
  }
  alert(`Доставка в ${countryDelivery} будет стоить ${cost} кредитов`);
} 

console.log(country);