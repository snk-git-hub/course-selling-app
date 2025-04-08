const mongoose =require ("mongoose");
const user = require("./routes/user");

const Schema =mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;


const userSchema=new Schema({
    email:{type:String,unique:true},
    password:String,
    firstname:String,
    lastname:String,
});
const courseSchema = new Schema({
    title:String,
    description:String,
    price:Number,
    ImageUrl:String,
    creatorId:ObjectId
});
const adminSchema = new Schema({
    email: { type: String, unique: true },
    password: String,
    firstName: String,
    lastName: String,
});

const PurchaseSchema = new Schema({
    userId:ObjectId,
    courseId:ObjectId
})
const userModel = mongoose.model("User2",userSchema);
const adminModel = mongoose.model("admin", adminSchema);
const purchaseModel = mongoose.model("purchase",PurchaseSchema);
const courseModel = mongoose.model("course",courseSchema);


module.exports={
    userModel,
    adminModel,
    purchaseModel,
    courseModel
}