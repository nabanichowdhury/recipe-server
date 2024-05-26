import { UserController } from "./user.controller.js";
import express from "express";
const router = express.Router();
router.post("/create-user", UserController.createUser);
router.get("/get-user/:email", UserController.getUser);
router.put("/update-user-coin", UserController.updateUserCoin);
export const UserRoutes = router;
