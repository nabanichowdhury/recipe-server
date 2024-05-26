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
const updateWatchCount = async (recipeId, customerEmail) => {
  try {
    console.log("inside updateWatchCount", recipeId, customerEmail);
    const recipe = await recipes.findOne({ _id: new ObjectId(recipeId) });
    console.log("recipe", recipe);
    if (!recipe) {
      // console.log("Recipe not found");
      const response = {
        statusCode: 404,
        success: false,
        message: "Recipe not found",
      };
      return response;
    }

    let updateOperation;

    if (!recipe.watchCount || typeof recipe.watchCount !== "number") {
      // watchCount field doesn't exist or has an invalid data type
      updateOperation = {
        $set: { watchCount: 1 },
      };
    } else {
      // watchCount field exists and has a valid data type
      updateOperation = {
        $inc: { watchCount: 1 },
      };
    }
    updateOperation.$push = { purchasedBy: customerEmail };

    const result = await recipes.updateOne(
      { _id: new ObjectId(recipeId) },
      updateOperation,
      { returnOriginal: false }
    );
    // console.log("result", result);

    const updatedRecipe = result;

    if (!updatedRecipe) {
      const response = {
        statusCode: 404,
        success: false,
        message: "Recipe not found",
      };
      return response;
    }

    const response = {
      statusCode: 200,
      success: true,
      message: "Watch count updated successfully",
      data: updatedRecipe,
    };
    return response;
  } catch (error) {
    // console.error("Error updating watch count:", error);
    const response = {
      statusCode: 500,
      success: false,
      message: "An error occurred while updating the watch count",
      error: error.message,
    };
    return response;
  }
};
const getAllRecipes = async (page, limit) => {
  const skip = (page - 1) * limit;
  const result = await recipes.find().toArray();
  const paginatedResult = await recipes
    .find()
    .skip(skip)
    .limit(limit)
    .toArray();
  const totalRecipes = await recipes.countDocuments();
  const totalPages = Math.ceil(totalRecipes / limit);

  const response = {
    statusCode: 200,
    success: true,
    message: "Recipes found successfully!",
    data: paginatedResult,

    page,
    limit,
    totalRecipes,
    totalPages,
  };

  return response;
};

const getRecipeById = async (id) => {
  // console.log("RecipeId", id);
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
  // console.log("response", response);

  return response;
};

export const RecipeService = {
  postRecipe,
  getAllRecipes,
  getRecipeById,
  updateWatchCount,
};
