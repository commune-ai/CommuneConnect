import axios from "axios";

export const getModules = async () => {
  try {
    const res = await axios.get("http://localhost:5000/modules");
    return res.data;
  } catch (error) {
    console.error("Error fetching modules:", error);
  }
};
