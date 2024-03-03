import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { registerService } from "./registerService";

const initialState = {
  reloading: false,
  reerror: false,
  resuccess: false,
  message: "",
  registers: [],
};

export const addNewRegister = createAsyncThunk(
  "register/add-register",
  async (data, thunkAPI) => {
    try {
      return await registerService.addRegisters(data);
    } catch (error) {
      if (error.response && error.response.data && error.response.data.error) {
        const message = error.response.data.error;
        return thunkAPI.rejectWithValue(message);
      } else {
        return thunkAPI.rejectWithValue(
          "An error occurred during the blog addition process"
        );
      }
    }
  }
);
// get-register

export const getRegisterData = createAsyncThunk(
  "reg/get-register",
  async (_, thunkAPI) => {
    try {
      return await registerService.getRegisters();
    } catch (error) {
      thunkAPI.rejectWithValue(error.response.data.error);
    }
  }
);
const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    reset: (state) => {
      state.reloading = false;
      state.resuccess = false;
      state.reerror = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addNewRegister.pending, (state) => {
        state.reloading = true;
      })
      .addCase(addNewRegister.fulfilled, (state, action) => {
        state.reloading = false;
        state.resuccess = true;
        state.registers.push(action.payload);
      })
      .addCase(addNewRegister.rejected, (state, action) => {
        state.reloading = false;
        state.reerror = true;
        state.message = action.payload;
      })
      .addCase(getRegisterData.pending, (state) => {
        state.reloading = true;
      })
      .addCase(getRegisterData.fulfilled, (state, action) => {
        state.reloading = false;
        state.resuccess = true;
        state.registers = action.payload;
      })
      .addCase(getRegisterData.rejected, (state, action) => {
        state.reloading = false;
        state.reerror = true;
        state.message = action.payload;
      });
  },
});

export const { register, reset } = registerSlice.actions;
export default registerSlice.reducer;
