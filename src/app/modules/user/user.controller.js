import { UserService } from "./user.service.js";

const createUser = async (req, res) => {
  const userData = req.body;
  console.log("userData from controller", userData);
  const result = await UserService.createUser(userData);

  //   const responseData = {
  //     statusCode: result.statusCode,
  //     success: result.success,
  //     message: result.message || null,
  //     data: result.data || null,
  //   };
  //   res.status(data.statusCode).json(responseData);
  res.status(200).json(result);
};

const getUser = async (req, res) => {
  const userEmail = req.params.email;
  const data = await UserService.getUser(userEmail);

  //   const responseData = {
  //     statusCode: data.statusCode,
  //     success: data.success,
  //     message: data.message || null,
  //     data: data.data || null,
  //   };
  res.status(200).json(data);
};

const updateUserCoin = async (req, res) => {
  const userData = req.body;
  const data = await UserService.updateUserCoin(userData);

  //   const responseData = {
  //     statusCode: data.statusCode,
  //     success: data.success,
  //     message: data.message || null,
  //     data: data.data || null,
  //   };
  res.status(200).json(data);
};

export const UserController = { createUser, getUser, updateUserCoin };
