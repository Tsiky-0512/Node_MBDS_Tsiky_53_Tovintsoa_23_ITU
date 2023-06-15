const jwt = require("jsonwebtoken");
const token_secret =
  "dvf025vx4d2vs5vs2vqe1bf2ds5gbsfd6sf52sd2fxb5sdgb8gf5dh5z5rdf6hbdfb9d8gbrs74b1fg"; // Secret keys that should never come back
const ROLE = ["ADMIN", "USER", "FREEMIUM", "PREMIUM"];

module.exports.authentification = (req, res, next) => {
  try {
    let userId = -1;
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, token_secret);
    if (decodedToken != null) {
      userId = decodedToken.userId;
    }
    if (userId < 0) {
      throw "Invalid user ID";
    } else {
      res.userId = userId ;
      next();
    }
  } catch {
    res.status(401).json({
      error: "You should first log in!",
    });
  }
};

module.exports.generateToken = (userData) => {
  return jwt.sign({ userId: userData }, token_secret, { expiresIn: "24h" });
};

module.exports.role = ROLE;
module.exports.token = token_secret;
