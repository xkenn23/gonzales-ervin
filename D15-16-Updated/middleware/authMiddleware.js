import jwt, { decode } from "jsonwebtoken";

const authMiddleWare = (req, res, next) => {
  const authHeader = req.header(`Authorization`);
  if (!authHeader)
    return res.status(400).json({ error: `No token, authorization denied` });

  const token = authHeader.split(" ")[1];
  if (!token)
    return res.status(401).json({ error: `No token, authorization denied` });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      return res.status(401).json({ error: "Token expired" });
    }
    return res.status(401).json({ error: "Invalid token" });
  }
};

export default authMiddleWare;
