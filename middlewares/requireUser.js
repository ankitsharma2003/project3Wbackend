const { error } = require("../utils/responseWrapper")
const jwt = require('jsonwebtoken');

module.exports = async (req, res, next) => {
     if(!req.headers || !req.headers.authorization || !req.headers.authorization.startsWith('Bearer')) {
         return res.send(error(401, 'Authorization headers is required'));
     }

     const accessToken = req.headers.authorization.split(' ')[1];

     try {
        const decode = jwt.verify(accessToken, process.env.ACCESS_TOKEN_PRIVATE_KEY);
        req._id = decode._id;
        next();
     } catch (e) {
        return res.send(error(500, e.message));
     }
     
}