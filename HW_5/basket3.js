/*
2. С этого урока начинаем работать с функционалом интернет-магазина. Предположим, есть сущность корзины.
Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров.
*/
var basket = []; // массив для хранения товаров
const product1 = { name: "товар 1", price: 100 };
const product2 = { name: "товар 2", price: 110 };
const product3 = { name: "товар 3", price: 20 };
const product4 = { name: "товар 4", price: 55 };

basket.push(product1, product2, product3, product4);

var basketSum = 0;

function countBasketPrice() {
    document.write("<p>Содержимое корзины:<p> ");
    for (var item in basket) {
        basketSum += basket[item].price; // подсчет стоимости.
        document.write("<i>" + basket[item].name + " </i><b>цена: </b><i>" + basket[item].price + "</i><br>");
    };
    document.write("<br>Oбщая стоимость корзины =  <b>" + basketSum + "</b><br>");
};
countBasketPrice();

document.write("<br><b>*Задание 4: цикл for без тела.</b><br>");