const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    dateofbirth:{type:Date,required:true}
    
});

const UserModel = mongoose.model('logincollection', userSchema);

module.exports = {
    UserModel
};
