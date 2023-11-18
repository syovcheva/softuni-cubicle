const bcrypt = require('bcrypt');
const User = require('../models/User');

exports.register = (userData) => User.create(userData);

exports.login = async (username, password) => {
    // 1. find user - check if user exists
    const user = await User.findOne({username});

    // 2. validate password - check if the password is correct

    if(!user) {
        throw new Error('Cannot find username or password');
    }
    const isValid = await bcrypt.compare(password, user.password);

    if(!isValid) {
        throw new Error('Cannot find username or password');
    }
    // 3. return user
    return user;
}