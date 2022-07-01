const express = require('express')
const app = express()


app.get('/',function(req,res){function toplam(a,b) {             // k'da bahsettigim fonskiyonu buraya entegre 
    let toplama = a+b; return toplama}                           // ederek calismasini sagladim . Fakat hala 
    res.send(`${toplam(5,6)} + get send gonderdi + Hello World`) // ilk halinin neden calsitirmadigini anlayamadim
});

app.get('/',function(req,res){function toplam(a,b) {// (k) burayi ek olarak fonskiyon ekleyip calistirmak icin actim  
    let toplama = a+b; return toplama}              // fakat calistirmadi
    res.send(`${toplam(5,6)}`)

});

app.post('/',function(req,res){
 res.send("post send donderdi + Hello World")
});


app.listen(4000)
