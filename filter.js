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
    new Data(id1,'handphone','1000000','Elektronik',10),
    new Data(id1, 'pisang','10000','buah',5)
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




//  var newInput=document.getElementById('namainput').value
//     var filterTable=document.getElementById('test')
//     var tr=filterTable.getElementsById('tr')
//     for(var i=0;i<tr.length;i++){
//         if(newInput)
//     }