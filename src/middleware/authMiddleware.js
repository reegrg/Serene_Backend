const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

const authMiddleware = (req, res, next) => {
  const token = req.header('Authorization').replace('Bearer ', ''); //removing bearer word from the token

  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  try {
    //jwt.verify the token id and provides all the data related to the id
    const decoded = jwt.verify(token, process.env.JWT_SECRET); // decoded
    //console.log(decoded)
    req.user = decoded.user; //req.user is a special kind of variables and can be used in any file you will get the data of id who is logged in
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};

module.exports = authMiddleware;