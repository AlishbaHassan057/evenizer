import axios from "axios";

export const addRegisters = async (formData) => {
  try {
    const response = await axios.post(
      "https://evenizer-production.up.railway.app/api/register/add-register",
      formData
    );
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};
export const getRegisters = async () => {
  const response = await axios.get(
    "https://evenizer-production.up.railway.app/api/register/get-register"
  );
  return response.data;
};

export const registerService = {
  addRegisters,
  getRegisters,
};
