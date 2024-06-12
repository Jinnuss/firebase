import { get1, patch, post } from "../utils/request";
import { Getdb } from "../utils/request";
import { GetdbLogin, PostDBRegister, updateCompany } from "../utils/requestLogin";
export const login = async (email, password) => {
  const childKey = 'email';
  const value = email;
  console.log(value);
  try {
    const data = await Getdb('company', childKey, value);
    for (const key in data) {
      if (data[key].email === email) {
        const newData = [data[key]];
        console.log(newData);
        return newData;
      }
    }
  } catch (error) {
    console.error('Error:', error);
  }
  // const result = await Getdb(`company?email=${email}${pass}`);
  // console.log(result);
  // return result;
};

export const checkExist = async (type, value) => {
  try {
    const data = await Getdb('company', type, value);
    for (const key in data) {
      if (data[key][type] === value) {
        const newData = data[key];
        console.log(newData);
        return newData;
      }
    }
  } catch (error) {
    console.error('Error:', error);
  }
  // const result = await get1(`company?${type}=${value}`);
  // return result;
};

export const createCompany = async (values) => {
  const result = await PostDBRegister(`company`, values);
  return result;
};

export const getDetailCompany = async (id) => {
  console.log(id);
  try {
    const resultNew = await Getdb(`company/${parseInt(id)}`);
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

export const editCompany = async (id, values) => {
  const result = await updateCompany(id, values);
  console.log(result);
  return 1;
};

export const getAllCompany = async () => {
  try {
    const data = await Getdb('company');
    console.log(data);
    return data;
  } catch (error) {
    console.error('Error:', error);
  }
};