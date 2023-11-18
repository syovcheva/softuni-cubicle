const bcrypt = require('bcrypt');
const jwt=require('../lib/jwt');

const User = require('../models/User');

exports.register = (userData) => User.create(userData);
const SECRET = 'qwertyasdasdzxczxc';

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

    const payload = {
        _id: user._id,
        username: user.username
    };

    const token = await jwt.sign(payload, SECRET, {expiresIn: '2d'});

    // 3. return user
    return token;
}