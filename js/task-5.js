let cost = 0;
let countryDelivery = '';
let country = '';
let delivery;

country = prompt('Укажите страну доставки');

if (country === null) {
  alert('"Отменено пользователем!"');
} else if (country !== null) {
  country = country.toLowerCase();
} 
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
      delivery = false;
  }   

if (delivery !== false && country !== null) {
  alert(`Доставка в ${countryDelivery} будет стоить ${cost} кредитов`);
}

console.log(country);