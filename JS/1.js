// Создать массив «Список покупок». Каждый элемент массива является объектом, который содержит название продукта, 
// необходимое количество и куплен или нет. Написать несколько функций для работы с таким массивом.

// Вывод всего списка на экран таким образом, чтобы сначала шли некупленные продукты, а потом – купленные.

// Добавление покупки в список. Учтите, что при добавлении покупки с уже существующим в списке продуктом,
//  необходимо увеличивать количество в существующей покупке, а не добавлять новую.

// Покупка продукта. Функция принимает название продукта и отмечает его как купленный.


let shoppngList = [{
        prodName: "Milk",
        prodQty: 5,
        isBought: true
    },
    {
        prodName: "Banana",
        prodQty: 5,
        isBought: false
    },
    {
        prodName: "Bread",
        prodQty: 5,
        isBought: true
    },
    {
        prodName: "Water",
        prodQty: 5,
        isBought: false
    },
];

function displayShoppingList(shoppListArrName) {
    let tempArr = shoppListArrName.slice(0);
    tempArr.sort((a, b) => a.isBought - b.isBought);
    let str = ``;
    let i = 1;
    let isBought = ``;
    for (let prod of tempArr) {
        if (prod.isBought) {
            isBought = `Product is bought`;
        } else {
            isBought = `Product is not bought`;
        };
        str += `${i}. Product: ${prod.prodName}, Qty: ${prod.prodQty}, ${isBought};\n`;
        i++;
    }
    alert(str);
}

function addProduct(shoppListArrName, newProdObj) {
    let ind = shoppListArrName.findIndex(prod => prod.prodName == newProdObj.prodName);
    if (ind != -1) {
        shoppListArrName[ind].prodQty += newProdObj.prodQty;
    } else {
        shoppListArrName.push(newProdObj);
    }
}

function makePurchase(shoppListArrName) {
    let myProdName = prompt(`Enter the produt's name:`);
    let ind = shoppListArrName.findIndex(prod => prod.prodName == myProdName);
    if (ind != -1) {
        shoppListArrName[ind].isBought = true;
    }
}

let newPr = {
    prodName: "Cherry",
    prodQty: 5,
    isBought: false
};

makePurchase(shoppngList);
console.log(shoppngList);

// addProduct(shoppngList, newPr);
// console.log(shoppngList);

// displayShoppingList(shoppngList);