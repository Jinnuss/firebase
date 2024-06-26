import { Getdb, del, get1, patch, post } from "../utils/request";
import { GetdbLogin, PostDBCreateCV, delCV, updateStatusCv } from "../utils/requestLogin";

export const getListCV = async (id) => {
  // const result = await get1(`cv?idCompany=${id}`);
  // return result;
  console.log(id);
  try {
    const data = await Getdb(`cv`);
    const myArray = Object.keys(data).map(key => data[key]);
    console.log(myArray);
    const newData = myArray.filter(item => {
      return parseInt(item.idCompany) === parseInt(id);
    })
    console.log(newData);
    return newData;
    // Sử dụng data ở đây
  } catch (error) {
    console.error('Error:', error);
  }
};

export const getDetailCV = async (id) => {
  // const result = await get1(`cv/${id}`);
  // return result;
  try {
    const data = await Getdb(`cv/${id}`);
    return data;
    // Sử dụng data ở đây
  } catch (error) {
    console.error('Error:', error);
  }
};

export const changeStatusCV = async (id, values) => {
  const result = await updateStatusCv(id, values);
  return result;
};

export const deleteCV = async (id) => {
  const result = await delCV(id);
  return 1;
};

export const createCV = async (values, idJob, idCompany, creatAt) => {
  const result = await PostDBCreateCV(values, idJob, idCompany, creatAt);
  console.log(result);
  return 1;
};