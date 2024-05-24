import axios from "axios";
const API_URL = 'http://135.181.214.161:5000';
export const getModules = async () => {
  try {
    const res = await axios.get(API_URL + "/modules");
    return res.data;
  } catch (error) {
    console.error("Error fetching modules:", error);
  }
};
