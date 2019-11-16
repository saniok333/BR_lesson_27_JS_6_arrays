// Создать массив, описывающий чек в магазине. 
// Каждый элемент массива состоит из названия товара, количества и цены за единицу товара. 
// Написать следующие функции:

// Распечатка чека на экран;

// Подсчет общей суммы покупки;

// Получение самой дорогой покупки в чеке;

// Подсчет средней стоимости одного товара в чеке.

let receipt = [{
        prodName: "Milk",
        prodQty: 5,
        prodPice: 10
    },
    {
        prodName: "Banana",
        prodQty: 10,
        prodPice: 2
    },
    {
        prodName: "Bread",
        prodQty: 20,
        prodPice: 5
    },
    {
        prodName: "Water",
        prodQty: 30,
        prodPice: 10
    },
];

function displayReceipt(receiptArrName) {
    let str = ``;
    let i = 1;
    for (let prod of receiptArrName) {
        str += `${i}. Product: ${prod.prodName}, Qty: ${prod.prodQty}, Price: ${prod.prodPice};\n`;
        i++;
    }
    alert(str);
}

function calcCommonAmount(receiptArrName) {
    let comAmount = 0;
    for (let prod of receiptArrName) {
        comAmount += prod.prodQty * prod.prodPice;
    }
    alert(`The coommon amount of the purchase: ${comAmount}$.`);
}

function calcMostExpensivePurchase(receiptArrName) {
    let tempArr = receiptArrName.slice(0);
    tempArr.sort((a, b) => b.prodQty * b.prodPice - a.prodQty * a.prodPice);
    alert(`The most expensive purchase in the recipt:\nProduct: ${tempArr[0].prodName}, Qty: ${tempArr[0].prodQty}, Price: ${tempArr[0].prodPice}.`);
}

function calcAveragePrice(receiptArrName) {
    let amountOfPrices = 0;
    for (let prod of receiptArrName) {
        amountOfPrices += prod.prodPice;
    }
    alert(`The coommon amount of the purchase: ${amountOfPrices/(receiptArrName.length)}$.`);
}

// displayReceipt(receipt);

// calcCommonAmount(receipt);

// calcMostExpensivePurchase(receipt);

calcAveragePrice(receipt);