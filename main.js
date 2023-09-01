let listInput = document.getElementById("list-input");
// console.log(listInput);
let addBtn = document.getElementById("add-btn");
// console.log(addBtn);
let list = document.getElementById("list");
// console.log(list);
addBtn.addEventListener("click",function() {
    if(listInput.value != ""){
        let listText = listInput.value;
        let listItem = document.createElement("li");
        listItem.classList.add("list-item", "font-family-main", "padding-50", "margin-bottom-50");
        listItem.innerText = listText;
        list.appendChild(listItem);
        listInput.value = "";        
    }

})

listInput.addEventListener("keydown",function(event) {
    if(listInput.value != "" && event.key == "Enter"){
        let listText = listInput.value;
        let listItem = document.createElement("li");
        listItem.classList.add("list-item", "font-family-main", "padding-50", "margin-bottom-50");
        listItem.innerText = listText;
        list.appendChild(listItem);
        listInput.value = "";  
        console.log(event);      
    }

})