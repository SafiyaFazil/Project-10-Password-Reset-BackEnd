import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const authMiddleware = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    console.log("token in bE", token);

    if (!token) {
      return res.status(401).json({ message: "Token missing" });
    }
    const decode = jwt.verify(token, process.env.SECRET_KEY);
    req.user = decode;
    console.log(req.user);
    next();
  } catch (error) {
    console.log(error);
    return res.status(401).json({ message: "Token invalid" });
  }
};
