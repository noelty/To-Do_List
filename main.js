let listInput = document.getElementById("list-input");
console.log(listInput);
let addBtn = document.getElementById("add-btn");
console.log(addBtn);
let list = document.getElementById("list");
console.log(list);
addBtn.addEventListener("click",function() {
    let listText = listInput.value;
    console.log(listText);
    let listItem = document.createElement("li");
    listItem.classList.add("list-item", "font-family-main", "padding-50", "margin-bottom-50");
    listItem.innerText = listText;
    list.appendChild(listItem);
})