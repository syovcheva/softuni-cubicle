const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: String,
    password: {
        type: String,
        // validate: {
        //     validator: function(value) {
        //         return this.repeatPassword === value;
        //         // this points to the document we are trying to create
        //     },
        //     message: `Password missmatch!`
        // }
    },
});
userSchema.virtual('repeatPassword')
    .set(function(value){
        if(value !== this.password) {
            throw new mongoose.MongooseError('Password missmatch!');
        }
    });

const User = mongoose.model('User', userSchema);

module.exports = User;