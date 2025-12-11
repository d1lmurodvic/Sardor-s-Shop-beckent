const mongoose = require('mongoose')

const swiperNewSchema = new mongoose.schama({
    description: {
        type: String,
        required: true
    }, 
    title: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('banners', swiperNewSchema)