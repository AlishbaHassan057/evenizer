import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { eventService } from "./eventService";

const initialState = {
  eeloading: false,
  eerror: false,
  eesuccess: false,
  message: "",
  events: [],
  imgs: [],
};

export const addNewEvent = createAsyncThunk(
  "events/add-event",
  async (data, thunkAPI) => {
    try {
      return await eventService.addEvent(data);
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
// get-blogs

export const getEventData = createAsyncThunk(
  "event/get-event",
  async (_, thunkAPI) => {
    try {
      return await eventService.getEvents();
    } catch (error) {
      thunkAPI.rejectWithValue(error.response.data.error);
    }
  }
);

// Image
export const eventImg = createAsyncThunk(
  "events/image-Events",
  async (imgData, thunkAPI) => {
    try {
      return await eventService.eventImage(imgData);
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

const blogSlice = createSlice({
  name: "event",
  initialState,
  reducers: {
    reset: (state) => {
      state.eeloading = false;
      state.eesuccess = false;
      state.eerror = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addNewEvent.pending, (state) => {
        state.eeloading = true;
      })
      .addCase(addNewEvent.fulfilled, (state, action) => {
        state.eeloading = false;
        state.eesuccess = true;
        state.events.push(action.payload);
      })
      .addCase(addNewEvent.rejected, (state, action) => {
        state.eeloading = false;
        state.eerror = true;
        state.message = action.payload;
      })
      .addCase(getEventData.pending, (state) => {
        state.eeloading = true;
      })
      .addCase(getEventData.fulfilled, (state, action) => {
        state.eeloading = false;
        state.eesuccess = true;
        state.events = action.payload;
      })
      .addCase(getEventData.rejected, (state, action) => {
        state.eeloading = false;
        state.eerror = true;
        state.message = action.payload;
      })
      .addCase(eventImg.pending, (state) => {
        state.eeloading = true;
      })
      .addCase(eventImg.fulfilled, (state, action) => {
        state.eeloading = false;
        state.eesuccess = true;
        state.imgs.push(action.payload);
      })
      .addCase(eventImg.rejected, (state, action) => {
        state.eeloading = false;
        state.eerror = true;
        state.message = action.payload;
      });
  },
});

export const { event, reset } = blogSlice.actions;
export default blogSlice.reducer;
