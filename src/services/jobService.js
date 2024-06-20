import { del, get, patch, post } from "../utils/request";
import { Getdb } from "../utils/request";
import { PostDBCreateJob, delJob, updateJobRequest } from "../utils/requestLogin";
export const createJob = async (values, idCompany, createAt) => {
  const result = await PostDBCreateJob(values, idCompany, createAt);
  console.log(result);
  return 1;
};

export const updateJob = async (id, values) => {
  const result = await updateJobRequest(id, values);
  console.log(result);
  return 1;
  // const result = await patch(`jobs/${id}`, options);
  // return result;
};

export const deleteJob = async (id) => {
  const result = await delJob(id);
  return 1;
};

export const getListJob = async (id) => {
  try {
    const data = await Getdb(`jobs`);
    const myArray = Object.keys(data).map(key => data[key]);
    const newData = myArray.filter(item => {
      return parseInt(item.idCompany) === parseInt(id);
    })
    // const newArray = newData.filter(item => {
    //   return item.status === true;
    // })
    // console.log(newArray);
    return newData;
    // Sử dụng data ở đây
  } catch (error) {
    console.error('Error:', error);
  }
};
export const getListJobHome = async (id) => {
  try {
    const data = await Getdb(`jobs`);
    const myArray = Object.keys(data).map(key => data[key]);
    const newData = myArray.filter(item => {
      return parseInt(item.idCompany) === parseInt(id);
    })
    const newArray = newData.filter(item => {
      return item.status === true;
    })
    console.log(newArray);
    return newArray;
    // Sử dụng data ở đây
  } catch (error) {
    console.error('Error:', error);
  }
};

export const getDetailJob = async (id) => {
  try {
    const data = await Getdb(`jobs/${id}`);
    return data;
    // Sử dụng data ở đây
  } catch (error) {
    console.error('Error:', error);
  }
};

export const getAllJob = async () => {
  try {
    const data = await Getdb(`jobs`);
    const myArray = Object.keys(data).map(key => data[key]);
    console.log(myArray);
    console.log(myArray);
    return myArray;
    // Sử dụng data ở đây
  } catch (error) {
    console.error('Error:', error);
  }
};