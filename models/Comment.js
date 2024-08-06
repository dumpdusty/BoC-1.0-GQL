const mongoose = require('mongoose')
const {model, Schema} = require('mongoose')
mongoose.Schema.Types.String.set('trim', true)


const commentSchema = new Schema({
        _id: mongoose.Schema.Types.ObjectId,
        firstName: {
            type: String,
            trim: true,
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
        },
        createdAt: {
            type: Date
        },
        rating: {
            type: String,
            trim: true,
        },
        title: {
            type: String,
            trim: true
        },
        description: {
            type: String,
            trim: true,
        },
    }
)

module.exports = model('Comment', commentSchema)