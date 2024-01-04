const express = require('express')
const app = express()
const port = 3000;
const expressLayout = require('express-ejs-layouts')
const methodOverrid = require('method-override')
const bodyParser = require('body-parser')

const fs = require('fs');
const path = require('path');
const qrCode = require('qrcode-reader');
const Jimp = require('jimp');

// jalankan ejs
app.set('view engine', 'ejs')

// jalankan methode
app.use(methodOverrid('_method'))

// jalankan third middleware
app.use(expressLayout)

// built in middleware
app.use(express.static("public"))
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json())


app.get('/', (req, res) => {
    res.render('camera', {
        tittle: 'Halaman Camera',
        layout: 'layouts/main-layouts'
    });
  });




app.use('/', (req, res) => {
    
})


app.listen(port, () => {
    console.log(`Server Sedang Berjalan ${port}`)
})