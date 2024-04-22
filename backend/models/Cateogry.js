const mongoose = require("mongoose");

const cateogrySchema = new mongoose.Schema({
 name:{
    type:String,
    required:true
 },
 description:{
    type:String
 },
 Courses:[
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course",
    },
],

});

module.exports = mongoose.model("Cateogry", cateogrySchema);