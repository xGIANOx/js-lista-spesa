let shoppingList = [
    'Sugar',
    'Milk',
    'Bread',
    'Friuts',
    'Beer'
];

const ulElement = document.querySelector('ul')

let i = 0;

while (i < shoppingList.length) {
    const liElement = `<li>${shoppingList[i]}</li>`;
    ulElement.innerHTML += liElement

    i++
    
}