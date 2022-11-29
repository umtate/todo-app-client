import axios from "axios";

const BASE_URL = "http://localhost:4000/auth";

const authService = () => {
  const login = async (data) => {
    const todos = await axios
      .post(`${BASE_URL}/login`, data)
      .then((res) => res.data);
    return todos;
  };


  return {
    login,
  };
};

export default authService();
