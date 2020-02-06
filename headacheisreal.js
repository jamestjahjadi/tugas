class DataBarang{
    constructor(nama,harga,kondisi,kategori){
        this.nama=nama
        this.harga=harga
        this.kondisi=kondisi
        this.kategori=kategori
    }
}
var dataForm=[
    // new DataBarang('Handphone', '1000000','baru','elektronik'),
]

// var barang=document.getElementById('databarang').value 

const printData=()=>{
    var output1='' 
    dataForm.forEach((val,index)=>{
        output1+=  `<tr>
        <td>${val.nama}</td>
        <td>${val.harga}</td>
        <td>${val.kondisi}</td>
        <td>${val.kategori}</td>
        </tr>
        `
    })
    document.getElementById('databarang').innerHTML=output1
}
printData()

const tambahkanbarang=()=>{
    var newBarang=document.getElementById('namaproduct').value
    var newHarga=document.getElementById('hargabarang').value
    var newKondisi=''
    var newKategori=document.getElementById('kategori').value

    document.getElementById('baru').checked?newKondisi+='baru':newKondisi+='second' 

    dataForm.push(
        new DataBarang(newBarang,newHarga,newKondisi,newKategori)
    )
    printData()   
}

class Binatang{
    constructor(name,umur,kelamin,status){
        this.name=name
        this.umur=umur
        this.kelamin=kelamin
        this.status=status
    }
}
var formBinatang=[
    new Binatang('anjing', '5','jantan','jinak'),
]


const printAnimal=()=>{
    var outputBinatang='' 
    formBinatang.forEach((val,index)=>{
        outputBinatang+=  `<tr>
        <td>${val.name}</td>
        <td>${val.umur}</td>
        <td>${val.kelamin}</td>
        <td>${val.status}</td>
        </tr>
        `
    })
    document.getElementById("datahewan").innerHTML=outputBinatang
}
printAnimal()

const tambahkanhewan=()=>{
    var newBinatang=document.getElementById('NamaHewan').value
    var newUmur=document.getElementById('UmurHewan').value
    var newKelamin=''
    var newStatus=''

    document.getElementById('jantan').checked?newKelamin+='jantan':newKelamin+='betina'
    document.getElementById('liar').checked?newStatus+='liar':newStatus+='jinak' 

    formBinatang.push(
        new Binatang(newBinatang,newUmur,newKelamin,newStatus)
    )
    printAnimal()   
}