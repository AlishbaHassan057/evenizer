import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { adminService } from "./adminService";

const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
  user: user ? user : null,
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: "",
};

export const registerAdminData = createAsyncThunk(
  "admin/register",
  async (data, thunkAPI) => {
    try {
      return await adminService.AdminsignUP(data);
    } catch (error) {
      const message = error.response.data.error;
      return thunkAPI.rejectWithValue(message);
    }
  }
);
// Login
export const loginAdmin = createAsyncThunk(
  "admins/login",
  async (data, thunkAPI) => {
    try {
      return await adminService.AdminsignIn(data);
    } catch (error) {
      const message = error.response.data.error;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// signout

export const AdminlogOut = createAsyncThunk("admins/logout", (_, thunkAPI) => {
  try {
    adminService.AdminsignOut();
  } catch (error) {}
});

const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerAdminData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerAdminData.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
      })
      .addCase(registerAdminData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(loginAdmin.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginAdmin.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
      })
      .addCase(loginAdmin.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(AdminlogOut.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(AdminlogOut.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = "An Error Ocuured";
      })
      .addCase(AdminlogOut.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.user = null;
      });
  },
});

export const { admin, reset } = adminSlice.actions;
export default adminSlice.reducer;
