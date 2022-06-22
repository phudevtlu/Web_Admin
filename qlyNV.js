const sidebarBtn = document.querySelectorAll('.item')
const sidebarMenu = document.querySelectorAll('.menu')

sidebarBtn.forEach(function(item, i){
    sidebarBtn[i].addEventListener('click', () => {
        sidebarMenu[i].classList.toggle('active')
    })
})
// THÊM, SỬA, XÓA SẢN PHẨM

var data1 = [
    {
        Id1 : 1,
        Name1 : 'Tang Tu Phu',
        Date : '04/04/2002',
        Sex : 'Nam',
        Position : 'Staff',
        Address : 'Hai Duong',
        Phone : '0934399176'
    }
]

render1()

function Add1() {
    var item_Id = document.getElementById('id1').value;
    var item_Name = document.getElementById('name1').value;
    var item_Date = document.getElementById('date').value;
    var item_Sex = document.getElementById('sex').value;
    var item_Position = document.getElementById('position').value;
    var item_Address = document.getElementById('address').value;
    var item_Phone = document.getElementById('phone').value;

    var iTem = {
        Id1 : item_Id,
        Name1 : item_Name,
        Date : item_Date,
        Sex : item_Sex,
        Position : item_Position,
        Address : item_Address,
        Phone : item_Phone
    }
    
    var index1 = data1.findIndex((x)=>x.Id1 == iTem.Id1)
    if(index1 >= 0){
        data1.splice(index1, 1, iTem)
    }else {
        data1.push(iTem) 
    }
    render1()
    clear1()
}

function render1() {
    table = `<tr>
    <th>ID</th>
    <th>Name</th>
    <th>Date</th>
    <th>Sex</th>
    <th>Position</th>
    <th>Address</th>
    <th>Phone Number</th>
    <th>Actions</th>
</tr>`
    for(var i = 0; i < data1.length; i++) {
        table += `<tr>
        <td>${data1[i].Id1}</td>
        <td>${data1[i].Name1}</td>
        <td>${data1[i].Date}</td>
        <td>${data1[i].Sex}</td>
        <td>${data1[i].Position}</td>
        <td>${data1[i].Address}</td>
        <td>${data1[i].Phone}</td>
        <td>
            <button onclick ="deleteItem1(${data1[i].Id1})"><i class="fa-solid fa-xmark"></i></button>
            <button onclick ="editItem1(${data1[i].Id1})"><i class="fa-solid fa-pen-to-square"></i></button>
        </td>
    </tr>`
    }
    document.getElementById('render1').innerHTML = table
}
function clear1() {
    document.getElementById('id1').value = "";
    document.getElementById('name1').value = "";
    document.getElementById('date').value = "";
    document.getElementById('sex').value = "";
    document.getElementById('position').value = "";
    document.getElementById('address').value = "";
    document.getElementById('phone').value = "";
}

function deleteItem1(id) {
    for(var i = 0; i< data1.length; i++) {
        if(data1[i].Id1 == id) {
            data1.splice(i,1);
            render1();
        }
    }
}

function editItem1(id) {
    for(var i = 0; i < data1.length; i++){
        if(data1[i].Id1 == id) {
            document.getElementById('id1').value = data1[i].Id1;
            document.getElementById('name1').value = data1[i].Name1;
            document.getElementById('date').value = data1[i].Date;
            document.getElementById('sex').value = data1[i].Sex;
            document.getElementById('position').value = data1[i].Position;
            document.getElementById('address').value = data1[i].Address;
            document.getElementById('phone').value = data1[i].Phone;
        }
    }
}