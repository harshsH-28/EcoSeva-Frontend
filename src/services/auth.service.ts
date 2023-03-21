import axios from "axios";

const API_URL = "http://157.245.98.1:8000/api/";

interface User {
  name?: string;
  email: string;
  dob?: string;
  phone?: string;
}

class AuthService {
  async login(user: User) {
    console.log("login called");

    const tokens = await axios.post(
      API_URL + "login/",
      {
        email: user.email,
        password: "password",
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(tokens.data);

    if (tokens.data.access) {
      const userData = await axios.get(API_URL + "user-data/", {
        headers: {
          Authorization: `Bearer ${tokens.data.access}`,
        },
      });
      const fetchedUser = {
        ...userData.data,
        access_token: tokens.data.access,
        refresh_token: tokens.data.refresh,
      };
      localStorage.setItem("user", JSON.stringify(fetchedUser));
      return fetchedUser;
    } else {
      return null;
    }
  }

  logout() {
    localStorage.removeItem("user");
  }

  async register(user: User) {
    console.log(user);

    const tokens = await axios.post(
      API_URL + "register/",
      {
        name: user.name,
        email: user.email,
        dob: user.dob,
        phone: user.phone,
        password: "password",
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (tokens.data.access) {
      const userData = await axios.get(API_URL + "user-data/", {
        headers: {
          Authorization: `Bearer ${tokens.data.access}`,
        },
      });
      const fetchedUser = {
        ...userData.data,
        access_token: tokens.data.access,
        refresh_token: tokens.data.refresh,
      };
      localStorage.setItem("user", JSON.stringify(fetchedUser));
      return fetchedUser;
    } else {
      return null;
    }
  }

  getCurrentUser() {
    const userStr = localStorage.getItem("user");
    if (userStr) return JSON.parse(userStr);
    return null;
  }
}

export default new AuthService();
