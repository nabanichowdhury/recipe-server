import { ObjectId } from "mongodb";
import { recipes } from "../../../server.js";

const postRecipe = async (data) => {
  const result = await recipes.insertOne(data);
  const response = {
    statusCode: 201,
    success: true,
    message: "Recipe created successfully!",
    data: result,
  };
  return response;
};

const getAllRecipes = async () => {
  const result = await recipes.find().toArray();
  if (result.length > 0) {
    const response = {
      statusCode: 200,
      success: true,
      message: "Recipes found successfully!",
      data: result,
    };
    return response;
  } else {
    const response = {
      statusCode: 404,
      success: false,
      message: "No recipes found!",
      data: result,
    };
    return response;
  }
};

const getRecipeById = async (id) => {
  console.log("RecipeId", id);
  const result = await recipes.findOne({ _id: id });
  let response;
  if (result !== null) {
    response = {
      statusCode: 200,
      success: true,
      message: "Recipe Found SucessFully",
      data: result,
    };
  } else {
    response = {
      statusCode: 404,
      success: false,
      message: "This recipee Doesnot Exist",
      data: result,
    };
  }
  console.log("response", response);

  return response;
};

export const RecipeService = { postRecipe, getAllRecipes, getRecipeById };
