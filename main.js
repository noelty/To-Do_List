document.addEventListener('DOMContentLoaded', () => {
    const listInput = document.getElementById("list-input");
    const addBtn = document.getElementById("add-btn");
    const list = document.getElementById("list");

    function addListItem() {
        if (listInput.value !== "") {
            const listText = listInput.value;
            const listItem = document.createElement("li");
            listItem.classList.add("list-item", "font-family-main", "padding-50", "margin-bottom-50");
            listItem.innerText = listText;
            list.appendChild(listItem);
            listInput.value = "";
        }
    }

    addBtn.addEventListener("click", addListItem);

    listInput.addEventListener("keydown", (event) => {
        if (listInput.value !== "" && event.key === "Enter") {
            addListItem();
        }
    });
});
