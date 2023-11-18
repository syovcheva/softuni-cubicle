const { promisify } = require('util');

const jsonwebtoken = require('jsonwebtoken');

const jwt = {
    sign: promisify(jsonwebtoken.sign),
    verify: promisify(jsonwebtoken.verify),
};

module.exports=jwt;

// jsonwebtoken doesn't support promise syntax, works with callbacks instead
// in order to convert callbacks to promises, we use the syntax above
