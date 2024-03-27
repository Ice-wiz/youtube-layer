const jwt = require("jsonwebtoken");
const secret = JWT_SECRET.process.env;

//authentication middleware
function authenticatejwt(req, res, next) {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split("")[1];
    jwt.verify(token, secret, function (error, user) {
      if (error) {
        return res.send("could not find payload/error");
      }
      req.user = user;
      console.log(req.user);
      next();
    });
  } else {
    res.send("authenticatejwt wont let u in cuz no token");
    res.sendStatus(401);
  }
}

//authorization middleware (role)

function requireYoutuber(req, res, next) {
    if (req.user && req.user.role === 'youtuber') {
      next();
    } else {
      res.status(403).json({ message: 'Forbidden: Insufficient permissions' });
    }
  }
  



module.exports = {
  authenticatejwt,
  requireYoutuber
};
