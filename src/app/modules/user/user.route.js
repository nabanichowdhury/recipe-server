import { UserController } from "./user.controller.js";
import express from "express";
const router = express.Router();
router.post("/create-user", UserController.createUser);
router.get("/get-user/:email", UserController.getUser);
export const UserRoutes = router;
