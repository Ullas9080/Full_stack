import e from "express";
import { register,login,logout } from "../controller/user.js";
const router=e.Router()

router.route("/register").post(register)
router.route("/login").post(login)
router.route("/logout").post(logout)
export default router;