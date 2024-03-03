import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import eventReducer from "../features/event/eventSlice";
import blogReducer from "../features/blog/blogSlice";
import adminReducer from "../features/admin/adminSlice";
import registerReducer from "../features/register/registerSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    blog: blogReducer,
    event: eventReducer,
    register: registerReducer,
    admin: adminReducer,
  },
});
