import { users } from "../../../server.js";

const createUser = async (userData) => {
  console.log("userData from service", userData);
  const result = await users.insertOne(userData);

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
  return response;
};

const getUser = async (userEmail) => {
  // console.log("userEmail", userEmail);
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
  // console.log("response", response);

  return response;
};
const updateUserCoin = async (userData) => {
  // console.log("userData", userData);
  const updateValue = userData.coin;
  // console.log("updateValue", updateValue);
  const result = await users.findOneAndUpdate(
    { email: userData.email },
    { $inc: { coin: updateValue } },
    { returnOriginal: false }
  );

  let response;
  if (result !== null) {
    response = {
      statusCode: 200,
      success: true,
      message: "User Coin Updated Sucessfully!",
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
  // console.log("response", response);

  return response;
};

export const UserService = { createUser, getUser, updateUserCoin };
