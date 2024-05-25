import { RecipeController } from "./recipe.controller.js";

import express from "express";
const router = express.Router();
router.post("/post-recipe", RecipeController.postRecipe);
router.get("/get-recipe/:id", RecipeController.getSingleRecipe);
router.get("/get-all-recipe", RecipeController.getAllRecipes);
export const RecipeRoutes = router;
