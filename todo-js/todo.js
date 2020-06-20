// JavaScript source code
todoList = [];
function keyDownFunction(event) {
    if (event.keyCode === 13) {
        let newItem = {
            id: todoList.length + 1,
            item: document.getElementById("inp-item").value,
            status: "NEW"
        };

        document.getElementById("inp-item").value = "";
        addNewItem(newItem);
    }
}

function addNewItem(newItem) {
    let teplate = document.createElement('div');
    teplate.id = `content-${newItem.id}`;
    document.getElementById('item-container').append(teplate);

    let btnClose = document.createElement('span');
    btnClose.className = "fa fa-close remove-item";
    btnClose.addEventListener('click', removeItem);

    let element = document.getElementById(`content-${newItem.id}`);
    element.innerHTML = newItem.item;
    element.className = "alert alert-warning";
    element.addEventListener('click', updateStatus);
    element.append(btnClose);
    todoList.push(newItem);
}

function updateStatus(event) {
    event.toElement.className = "alert alert-success";
}

function removeItem(event) {
    event.toElement.parentElement.remove();
}