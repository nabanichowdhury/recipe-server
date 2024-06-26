import { ObjectId } from "mongodb";
import { RecipeService } from "./recipe.service.js";

const postRecipe = async (req, res) => {
  const data = req.body;
  const result = await RecipeService.postRecipe(data);

  //   const responseData = {
  //     statusCode: result.statusCode,
  //     success: result.success,
  //     message: result.message || null,
  //     data: result.data || null,
  //   };
  //   res.status(data.statusCode).json(responseData);
  res.status(200).json(result);
};

const getAllRecipes = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const data = await RecipeService.getAllRecipes(page, limit);

  //   const responseData = {
  //     statusCode: data.statusCode,
  //     success: data.success,
  //     message: data.message || null,
  //     data: data.data || null,
  //   };
  res.status(200).json(data);
};

const getSingleRecipe = async (req, res) => {
  const id = new ObjectId(req.params.id);

  const data = await RecipeService.getRecipeById(id);
  res.status(200).json(data);
};

const updateCount = async (req, res) => {
  const id = req.params.id;
  const customerEmail = req.body.name;
  console.log(id, customerEmail);
  const result = await RecipeService.updateWatchCount(id, customerEmail);
  res.status(200).json(result);
};

export const RecipeController = {
  postRecipe,
  getAllRecipes,
  getSingleRecipe,
  updateCount,
};
