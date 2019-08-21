// 1. Update the 'Coffee' item to say 'Fair Trade Coffee'
// 2. Remove 'Twinkies' from the list
// 3. Add an item 'Cheese Whiz'
// 4. Clear the list and programmatically add items 
//      from the array ['protein powder', 'muscle milk', 'power bars']
// 5. Add the class 'important' to the muscle milk item.

var listEls = document.querySelector('#list');

console.log(listEls)
listEls.children[1].innerHTML = "Fair Trade Coffee";
listEls.children[2].remove();

var newLi = document.createElement('li');
newLi.innerHTML = "Cheese Whiz";
listEls.appendChild(newLi);

var arr = ['protein powder', 'muscle milk', 'power bars'];
listEls.innerHTML = '';

arr.forEach(item=>{
    var newLi = document.createElement('li');
    newLi.innerHTML = item;
    listEls.appendChild(newLi);
});

listEls.children[1].className = 'important';

