import axios from "axios";
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
