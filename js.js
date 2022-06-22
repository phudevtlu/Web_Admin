const sidebarBtn = document.querySelectorAll('.item')
const sidebarMenu = document.querySelectorAll('.menu')

sidebarBtn.forEach(function(item, i){
    sidebarBtn[i].addEventListener('click', () => {
        sidebarMenu[i].classList.toggle('active')
    })
})

// THÊM, SỬA, XÓA SẢN PHẨM

var data = [
    {
        Id : 1,
        Name : 'Basic Tee',
        Img : './',
        Price : '299.000',
        Quantity : 99
    },
    {
        Id : 2,
        Name : 'Clownz T-Shirt',
        Img : './',
        Price : '349.000',
        Quantity : 99
    }
]

render()

function Add() {
    var itemId = document.getElementById('id').value;
    var itemName = document.getElementById('name').value;
    var itemImg = document.getElementById('img').value;
    var itemPrice = document.getElementById('price').value;
    var itemQuantity = document.getElementById('quantity').value;

    var item = {
        Id : itemId,
        Name : itemName,
        Img : itemImg,
        Price : itemPrice,
        Quantity : itemQuantity
    }
    
    var index = data.findIndex((c)=>c.Id == item.Id)
    if(index >= 0){
        data.splice(index, 1, item)
    }else {
        data.push(item) 
    }
    render()
    clear()
}

function render() {
    table = `<tr>
    <th>ID</th>
    <th>Name</th>
    <th>Images</th>
    <th>Price</th>
    <th>Quantity</th>
    <th>Actions</th>
</tr>`
    for(var i = 0; i < data.length; i++) {
        table += `<tr>
        <td>${data[i].Id}</td>
        <td>${data[i].Name}</td>
        <td>${data[i].Img}</td>
        <td>${data[i].Price}</td>
        <td>${data[i].Quantity}</td>
        <td>
            <button onclick ="deleteItem(${data[i].Id})"><i class="fa-solid fa-xmark"></i></button>
            <button onclick ="editItem(${data[i].Id})"><i class="fa-solid fa-pen-to-square"></i></button>
        </td>
    </tr>`
    }
    document.getElementById('render').innerHTML = table
}
function clear() {
    document.getElementById('id').value = "";
    document.getElementById('name').value = "";
    document.getElementById('img').value = "";
    document.getElementById('price').value = "";
    document.getElementById('quantity').value = "";
}

function deleteItem(id) {
    for(var i = 0; i< data.length; i++) {
        if(data[i].Id == id) {
            data.splice(i,1);
            render();
        }
    }
}

function editItem(id) {
    for(var i = 0; i < data.length; i++){
        if(data[i].Id == id) {
            document.getElementById('id').value = data[i].Id;
            document.getElementById('name').value = data[i].Name;
            document.getElementById('img').value = data[i].Img;
            document.getElementById('price').value = data[i].Price;
            document.getElementById('quantity').value = data[i].Quantity;
        }
    }
}