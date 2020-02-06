class Data{
    constructor(id,nama,price,category,stock){
    this.id=id
    this.nama=nama
    this.price=price
    this.category=category
    this.stock=stock
    }
}
var id= new Date()
var id1=id.getTime()
// console.log(id1)
var table=[
    new Data(id1,'handphone','1000000','Elektronik',10)
]

const printTable=()=>{
    var output=''
    table.forEach((val,index)=>{
        output+=`
    <tr>
        <td>${val.id}</td>
        <td>${val.nama}</td>
        <td>${val.price}</td>
        <td>${val.category}</td>
        <td>${val.stock}</td>
    </tr>`
    })
    document.getElementById('listable').innerHTML=output
} 
printTable()

const input=()=>{
       var newnama=document.getElementById('inputname').value
       var newharga=document.getElementById('inputharga').value
       var newselect=document.getElementById('inputselect').value
       var newstock=document.getElementById('inputstock').value
table.push(
    new Data(id1,newnama,newharga,newselect,newstock)
)
printTable()
}
