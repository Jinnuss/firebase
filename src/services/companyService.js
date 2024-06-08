import { GetdbLogin, get1, patch, post } from "../utils/request";
import { Getdb } from "../utils/request";
export const login = async (email, password = "") => {
  console.log(email);
  email = email.replace('@', '_').replace('.', '_');
  console.log(email);
  let pass = "";
  if (password !== "") {
    pass = `&password=${password}`;
  }
  const result = await GetdbLogin(`company?email=${email}${pass}`);
  return result;

  // try {
  //   const data = await Getdb(`company?email=${email}${pass}`);
  //   console.log(data);
  //   return data;
  // } catch (error) {
  //   console.error('Error:', error);
  // }
  // const result = await get(`company?email=${email}${pass}`);
  // console.log(result);
  // return result;
};

export const checkExist = async (type, value) => {
  const result = await get1(`company?${type}=${value}`);
  return result;
};

export const createCompany = async (options) => {
  const result = await post(`company`, options);
  return result;
};

export const getDetailCompany = async (id) => {
  try {
    const data = await Getdb(`company/${id}`);
    return data;
    // Sử dụng data ở đây
  } catch (error) {
    console.error('Error:', error);
  }
};

export const editCompany = async (id, options) => {
  const result = await patch(`company/${id}`, options);
  return result;
};

export const getAllCompany = async () => {
  try {
    const data = await Getdb('company');
    return data;
    // Sử dụng data ở đây
  } catch (error) {
    console.error('Error:', error);
  }
};