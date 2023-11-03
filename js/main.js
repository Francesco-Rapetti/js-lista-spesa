const shoppingList = [ 'pane', 'latte', 'sapone', 'detersivo', 'shampoo', 'pasta', 'condimenti', 'carne'];
document.body.innerHTML += `<ol></ol>`;
const list = document.querySelector('ol');
let i = 0;
while (i < shoppingList.length) {
    console.log(i);
    list.innerHTML += `<li>${shoppingList[i]}</li>`
    i++;
}