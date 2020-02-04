class Todo{
    constructor(kegiatan,gambar,hari){
        this.kegiatan=kegiatan,
        this.gambar=gambar,
        this.hari=hari
    }
}
var data=[
    new Todo('lari','https://cdn-brilio-net.akamaized.net/news/2018/02/25/139410/750xauto-ini-alasan-ilmiah-kakimu-gatal-saat-olahraga-lari-1802258.jpg', 'senin'),
    new Todo('shopping','https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQfA7Qutw8tBUHGyAyy7YXysRSBpBiLURssvE9VL1np2qEd8wvA', 'selasa'),
    new Todo('tidur', 'https://www.personneltoday.com/wp-content/uploads/sites/8/2019/12/good-quality-sleep-shutterstock_323458037.jpg','rabu')
]
const printdata=()=>{
    var output=''
    data.forEach((val,index)=>{
        output+=`<tr>
            <td>${index+1}</td>
            <td>${val.kegiatan}</td>
            <td><img src=${val.gambar} alt=${index} height='150px'></td>
            <td>${val.hari}</td>
        <td>
            <button>edit</button>
            <button>delete</button>
        </td>
                
                </tr>`
    })
    document.getElementsByTagName('tbody')[0].innerHTML=output
}
printdata()

const inputdataOnClick=()=>{
    var kegiatan=document.getElementById('kegiatan').value
    var kegiatan=document.getElementById('gambar').value
    var kegiatan=document.getElementById('hari').value
    if(kegiatan=''||gambar==''||hari==''){
        alert('coba input semua dulu')
    }else{
        data.push(new Todo(kegiatan,gambar,hari))
        var kegiatan=document.getElementById('kegiatan').value=''
        var kegiatan=document.getElementById('gambar').value=''
        var kegiatan=document.getElementById('hari').value=''
        printdata()
    }
}