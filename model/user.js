const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    id_user: {
        type: Number,
        required: true
    },
    nik: {
        type: String,
        required: true,
        validate: {
            validator: function(v){
                return v.length === 16
            },
            message: "NIK Yang Anda Masukan Salah"
        }
    },
    nama: {
        type: String,
        required: true
    },
    nopolisi: {
        type: String,
        required: true
    },
    priode_waktu: {
        type: String,
        required: true,
        default: () => {
            const currenDate = new Date()
            const nextYearDate = new Date(currenDate.getFullYear() + 1, currenDate.getMonth(), currenDate.getDate())

            return `${currenDate.toISOString().slice(0, 10)} ${currenDate.toTimeString().slice(0, 8)} - ${nextYearDate.toISOString().slice(0, 10)} ${nextYearDate.toTimeString().slice(0, 8)}` 
        }
        
    }, 
    jenis_kendaraan: {
        type: String,
        enum: ['R2', 'R4'],
        required: true
    },
    harga: {
        type: Number,
        required: true
    }
});

const User = mongoose.model('User', userSchema)

module.exports = User;