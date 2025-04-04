const jwt = require("jsonwebtoken");

const authenticate = (req, res, next) => {
  // Get token from cookies
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({ error: "No token provided" });
  }

  // Verify token
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: "Invalid token" });
    }
    // Attach decoded payload (e.g., user id) to the request object.
    req.user = decoded;
    next();
  });
};

module.exports = authenticate;
