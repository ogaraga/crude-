import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    name:{
        type: String,
        require: true,
        minLength: 3
    },
    sectors: {
        type: String,
        require: true,
    },
    agreed:{
        type: Boolean,
        require: true
    },
})
const User =mongoose.model('user', userSchema);
export default User;