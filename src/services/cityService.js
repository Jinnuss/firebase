import { Getdb } from "../utils/request";
export const getListCity = async () => {
  try {
    const data = await Getdb('city');
    return data;
    // Sử dụng data ở đây
  } catch (error) {
    console.error('Error:', error);
  }
};