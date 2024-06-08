import { get } from "../utils/request";
import { Getdb } from "../utils/request";

export const getListTag = async () => {
  try {
    const data = await Getdb('tags');
    return data;
    // Sử dụng data ở đây
  } catch (error) {
    console.error('Error:', error);
  }
};