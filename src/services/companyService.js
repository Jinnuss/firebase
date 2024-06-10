import { Getdb1, GetdbLogin, get1, patch, post } from "../utils/request";
import { Getdb } from "../utils/request";
export const login = async (email, password = "") => {
  let pass = "";
  if (password !== "") {
    pass = `&password=${password}`;
  }
  const result = await get1(`company?email=${email}${pass}`);
  console.log(result);
  return result;
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
    const resultNew = await Getdb(`company/${parseInt(id) - 1}`);
    if (resultNew === null) {
      console.error('No data found in resultNew');
      // Xử lý trường hợp không có dữ liệu ở đây
    } else {
      console.log('Result from Getdb:', resultNew);
      const result = resultNew;
      console.log(result);
      return result;
      // return resultNew
      // Điều chỉnh code của bạn dựa trên kết quả resultNew ở đây
    }
  } catch (error) {
    console.error('Error while getting data from Getdb:', error);
    // Xử lý lỗi tại đây
  }
  // try {
  //   const result1 = await Getdb(`company/${id}`);
  //   console.log(result1);
  //   return result1;
  // } catch (error) {
  //   console.error('Error:', error);
  // }
};

export const editCompany = async (id, options) => {
  const result = await patch(`company/${id}`, options);
  console.log(result);
  return result;
};

export const getAllCompany = async () => {
  try {
    const data = await Getdb('company');
    return data;
  } catch (error) {
    console.error('Error:', error);
  }
};