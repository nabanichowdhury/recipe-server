import express from "express";

import { UserRoutes } from "../modules/user/user.route.js";
import { RecipeRoutes } from "../modules/recipe/recipe.route.js";
const router = express.Router();
const moduleRoutes = [
  {
    path: "/users/",
    route: UserRoutes,
  },
  {
    path: "/recipe/",
    route: RecipeRoutes,
  },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
