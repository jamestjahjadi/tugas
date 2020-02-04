const question=[
    {
    pertanyaan:'Siapakah President Ketiga Republik Indonesia?',
    answer:[
    'Prof.B.J.Habibie',
    'Abdurrahman Wahid',
    'Ir.Soekarno',
    'Joko Widodo']}, 
    {
    pertanyaan:'Berikut Adalah Bahasa Pemrograman, kecuali...',
    answer:[
    'HTML',
    'Java',
    'Phyton',
    'JavaScript']}, 
    {
    pertanyaan:'Apa Judul lagu yang diduga plagiat oleh lagu "sayang" Via Valen',
    answer:[
    'Qing Fei De Yi',
    'Ting Hai',
    'Mirai E Kiroro',
    'Hau Siang Hau Siang']},
    {
    pertanyaan:'Siapakah sosok di balik batman?',
    answer:[
    'Bruce Wayne',
    'clark kent',
    'Peter Parker',
    'Uncle'
    ]},
]

question.forEach((val,index)=>{ 
    var x=((`${index+1}. `+val.pertanyaan))
    
    for(i=0;i<val.answer.length;i++){
        console.log(x+val.answer[i])
    }
})


const question=[
    {
    pertanyaan1:'Siapakah President Ketiga Republik Indonesia?',
    answer:{
    a:'Prof.B.J.Habibie',
    b:'Abdurrahman Wahid',
    c:'Ir.Soekarno',
    c:'Joko Widodo'}}, correctAnswer='a',
    {
    pertanyaan2:'Berikut Adalah Bahasa Pemrograman, kecuali...',
    answer:{
    a:'HTML',
    b:'Java',
    c:'Phyton',
    d:'JavaScript'}}, correctAnswer='a',
    {
    pertanyaan3:'Apa Judul lagu yang diduga plagiat oleh lagu "sayang" Via Valen',
    answer:{
    a:'Qing Fei De Yi',
    b:'Ting Hai',
    c:'Mirai E Kiroro',
    d:'Hau Siang Hau Siang'}},correctAnswer='c',
    {
    pertanyaan4:'Siapakah sosok di balik batman?',
    answer:{
    a:'Bruce Wayne',
    b:'clark kent',
    c:'Peter Parker',
    d:'Uncle'
    }},correctAnswer='a',
]

question.forEach((val,index)=>{
    
})