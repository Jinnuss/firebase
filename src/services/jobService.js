import { del, get, patch, post } from "../utils/request";
import { Getdb } from "../utils/request";
export const createJob = async (options) => {
  const result = await post(`jobs`, options);
  return result;
};

export const updateJob = async (id, options) => {
  const result = await patch(`jobs/${id}`, options);
  return result;
};

export const deleteJob = async (id) => {
  const result = await del(`jobs/${id}`);
  return result;
};

export const getListJob = async (id) => {
  try {
    const data = await Getdb(`jobs`);
    const newData = data.filter(item => {
      return parseInt(item.idCompany) === parseInt(id);
    })
    console.log(newData);
    return newData;
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
    const data = await Getdb('jobs');
    return data;
    // Sử dụng data ở đây
  } catch (error) {
    console.error('Error:', error);
  }
};