const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MedallionSchema = new Schema({
    sender: {
        type: Schema.Types.ObjectId,
        required: true
    },
    recipient: {
        type: Schema.Types.ObjectId,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    dateCreated: {
        type: Date,
        default: Date.now
    },
    deadline: {
        type: Date
    }
})

const Medallion = new mongoose.model("Medallion", MedallionSchema);
module.exports = Medallion;