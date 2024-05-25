import { users } from "../../../server.js";

const createUser = async (userData) => {
  const result = await users.insertOne(userData);
  const response = {
    statusCode: 201,
    success: true,
    message: "User created successfully!",
    data: result,
  };
  return response;
};

const getUser = async (userEmail) => {
  console.log("userEmail", userEmail);
  const result = await users.findOne({ email: userEmail });
  let response;
  if (result !== null) {
    response = {
      statusCode: 200,
      success: true,
      message: "User found successfully!",
      data: result,
    };
  } else {
    response = {
      statusCode: 404,
      success: false,
      message: "User not found!",
      data: result,
    };
  }
  console.log("response", response);

  return response;
};

export const UserService = { createUser, getUser };
