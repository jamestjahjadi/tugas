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
var table=[
    new Data(1581063530374,'handphone','1000000','elektronik',10),
    new Data(1581063423214,'pisang','1000','buah',5),
    new Data(1581063540317,'hoodie','50000','pakaian','8')
]
                            
const printTable=(list)=>{
    var output=''
    list.forEach((val,)=>{
        output+=`
    <tr>
        <td>${val.id}</td>
        <td>${val.nama}</td>
        <td>${val.price}</td>
        <td>${val.category}</td>
        <td>${val.stock}</td>
        <td><button onclick="delete()">delete</button></td>
        <td><button onclick="edit()">edit</button></td>
    </tr>`
    })
    document.getElementById('listable').innerHTML=output
} 
printTable(table)

const input=()=>{
    var id= new Date()
var id2=id.getTime()
       var newnama=document.getElementById('inputname').value
       var newharga=document.getElementById('inputharga').value
       var newselect=document.getElementById('inputselect').value
       var newstock=document.getElementById('inputstock').value
table.push(
    new Data(id2,newnama,newharga,newselect,newstock)
)
printTable(table)
}

var namezero=[]
const funcName=()=>{
    var namainput=document.getElementById('namainput').value
    var arr=[]
    table.forEach((val,index)=>{
        if(namainput==val.nama){
            arr.push(val)
        }
    }) 
    printTable(arr)
    if(namainput==''){
        printTable(table)
    }
}


const categorysel=()=>{
    var filtcategory=document.getElementById('kategori').value
    var arrselect=[]
    table.forEach((val)=>{
        if(filtcategory==val.category){
            arrselect.push(val)
        }
    })
    printTable(arrselect)
    if(filtcategory=='All'){
        printTable(table)
    }
}

// const pricefunc=()=>{
//     var output=[]
//     var min=document.getElementById('range1').value
//     var max=document.getElementById('range2').value
//     if(min=='' || max==''){
//         output.push(val)
//     }
// }

