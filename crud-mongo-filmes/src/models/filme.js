const mongoose = require('mongoose')

const filmeSchema = new mongoose.Schema({
    //Title
    title: {
        type: String,
        required: true
    },
    //Author
    direction: {
        type: String,
        required: true
    },
    //duration
    duration: {
        type: Number,
        required: true
    },
    //genre
    genre: {
        type: String,
        required: true
    },
    //language 
    language: {
        type: String,
        required: true
    },
    //createdAt
    createdAt: {
        type: Date,
        required: true,
        default: new Date
    }

})

module.exports = mongoose.model('filme', filmeSchema)