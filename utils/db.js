const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://sonimaulanam111:sukapura2023@gis.h3x3hp7.mongodb.net/eparkir?retryWrites=true&w=majority")

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Kesalahan Koneksi Database MONGODB'))
db.once('open', function () {
    console.log('Terhubung Ke MongoDB Cloud')
})