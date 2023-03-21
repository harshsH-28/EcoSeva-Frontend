import axios from "axios";

const API_URL = "http://157.245.98.1:8000/api/";

class EcoService {
  async getEcoData() {
    const data = await axios.get(API_URL + "eco-data/");
    return data.data;
  }

  async getDustinList() {
    const data = await axios.get(API_URL + "list-dustbins/");
    return data.data;
  }
}

export default new EcoService();
