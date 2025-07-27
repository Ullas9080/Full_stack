import jwt from "jsonwebtoken";

export const isAuthenicated = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({
        sucess: false,
        message: "token has been Expired! Pleaee Login",
      });
    }

    const decoded = jwt.verify(token, process.env.SECRET_KEY);

    if (!decoded) {
     return res
        .status(404)
        .json({ sucess: false, message: "Invalid token! Please Login again" });
    }
    req.id=decoded
    next()
  } catch (error) {
    console.error(error);
  }
};
