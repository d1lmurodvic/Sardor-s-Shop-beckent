const mongoose = require('mongoose')

const mongooseNewSchema = new mongoose.Schema([
    {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        image: {
            type: String,
            required: true,
        },
        status: {
            type: String,
            required: true,
        },
        category: {
                type: String,
                required: true,
        },
        rating: {
            type: Number,
            required: true,
        }
    }
])

module.exports = mongoose.model('Product', mongooseNewSchema)