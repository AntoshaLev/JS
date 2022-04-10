/*1. Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999, мы должны получить на выходе
объект, в котором в соответствующих свойствах описаны единицы, десятки и сотни. Например, для числа 245 мы должны
получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. Если число превышает 999, необходимо выдать
соответствующее сообщение с помощью console.log и вернуть пустой объект.*/
        var max = 999;
        var digit = {
          number: Math.round(Math.random() * max), /*запрос у пользователя +prompt('Введите число от 0 до 999'),*/
          units: 0,
          tens: 0,
          hundreds: 0,
        };
        if (digit.number <= 9){
          digit.units = digit.number;
        } else if (digit.number <= 999){
          digit.units = Math.floor(digit.number % 10);
          digit.tens = Math.floor(digit.number / 10 % 10);
          digit.hundreds = Math.floor(digit.number / 100 % 10);
        }else {
            digit.number = 0;
            console.log('Вы ввели число за диапазоном 0 - 999');
        }
        console.log(digit);


/*2.Продолжить работу с интернет-магазином:
2.1. В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими объектами можно заменить их элементы?
2.2. Реализуйте такие объекты.
2.3. Перенести функционал подсчета корзины на объектно-ориентированную базу.*/

function itemProduct(name, image, price, quantity, discount = 0) {
    this.name = name;
    this.image = `../img/${image}.png`;
    this.price = price;
    this.quantity = quantity;
    this.discount = discount;
    this.finalPrice = function () {
        if (this.discount != 0) {
            return this.price - this.price * this.discount / 100;
        } else {
            return this.price;
        }
    }
    this.showMyCart = function () {
        return `${this.name} (кол-во: ${this.quantity})`;
    }
}

let shoppingCart = []

shoppingCart.push(
    new itemProduct('product_1', 'product_img_1', 100, 55, 23)
);
shoppingCart.push(
    new itemProduct('product_2', 'product_img_2', 95, 10, 4)
);
shoppingCart.push(
    new itemProduct('product_3', 'product_img_3', 125, 25)
);

function finalChart(shoppingCart) {
    console.log('Ваш заказ: ');
    shoppingCart.forEach(item => {
        console.log(`${item.showMyCart()}.
        Цена с учетом скидки: ${item.finalPrice()}.
        Стоимость товара: ${item.quantity * item.finalPrice()}`);

    });
}

finalChart(shoppingCart);

function finalCost(shoppingCart) {
    return shoppingCart.reduce(function (acc, shoppingCart) {
        return acc + (shoppingCart.finalPrice() * shoppingCart.quantity)
    }, 0)
};
console.log(('Конечная стоимость заказа: ' + finalCost(shoppingCart)).toUpperCase());