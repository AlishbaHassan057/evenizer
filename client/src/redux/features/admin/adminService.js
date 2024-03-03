import axios from "axios";
const base_url = "http://localhost:5175/api/admin";

// register
const AdminsignUP = async (userData) => {
  const response = await axios.post(`${base_url}/register-admin`, userData);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

// LOGIN PART
//
const AdminsignIn = async (userData) => {
  const response = await axios.post(`${base_url}/login-admin`, userData);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

// Logout the user
const AdminsignOut = () => {
  localStorage.removeItem("user");
};

export const adminService = {
  AdminsignUP,
  AdminsignIn,
  AdminsignOut,
};
