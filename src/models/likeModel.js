const mongoose = require('mongoose')
const { ref } = require('process')

const mongooseNewSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
        ref: 'User'
    },
    productId: {
        type: String,
        required: false,
        ref: 'Product'
    }
})

module.exports = mongoose.model('Like', mongooseNewSchema)
