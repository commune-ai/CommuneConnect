import axios from "axios";
import { Console } from "console";
const API_URL = 'http://135.181.214.161:5000';
export const getInfos = async () => {
  try {
    const res = await axios.get(API_URL + "/info");
    return res.data;
  } catch (error) {
    console.error("Error fetching modules:", error);
  }
};
export const getHistory = async () => {
  try {
    const res = await axios.get(API_URL + "/modules/history");
    return res.data;
  } catch (error) {
    console.error("Error fetching modules:", error);
  }
};

export const getMetaData = async () => {
  try {
    const response = await axios.get(`${API_URL}/modules`);
    const modules = response.data;
    let newModules = [];

    for (const module of modules) {
      try {
        const response1 = await axios.get(`${API_URL}/modules/active_thread_count`, {
          params: {
            module_name: module.Name
          }
        });
        
        const response2 = await axios.get(`${API_URL}/modules/metadata`, {
          params: {
            module_name: module.Name
          }
        });

        newModules.push({
          email: module.Email,
          name: module.Name,
          invoked: response1.data,
          metadata: response2.data,
        });
      } catch (moduleError) {
        console.error(`Error fetching data for module ${module.Name}:`, moduleError);
        newModules.push({
          email: module.Email,
          name: module.Name,
          error: moduleError.message,
        });
      }
    }

    return newModules;
  } catch (error) {
    console.log("Error fetching modules:", error);
    throw error;
  }
};

export const server_analytics = async () => {
  try {
    const res = await axios.get("https://api.comstats.org/validators");
    const sorted_data = res.data?.validators.sort(
      (a, b) => b.balance - a.balance
    );
    return sorted_data;
  } catch (error) {
    console.error("Error fetching modules:", error);
  }
};

export const getStats = async () => {
  try {
    const res = await axios.get("https://api.comstats.org/stats");
    return res.data;
  } catch (error) {
    console.error("Error fetching modules:", error);
  }
};
