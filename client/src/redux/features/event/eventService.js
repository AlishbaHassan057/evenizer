import axios from "axios";

export const addEvent = async (eventData) => {
  try {
    const response = await axios.post(
      "https://evenizer-production.up.railway.app/api/events/add-event",
      eventData
    );
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};
// Get
export const getEvents = async () => {
  const response = await axios.get(
    "https://evenizer-production.up.railway.app/api/events/get-event"
  );
  return response.data;
};
// IMG
export const eventImage = async (imageData) => {
  try {
    const response = await axios.post(
      "https://evenizer-production.up.railway.app/api/events/add-event",
      imageData
    );
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};
export const eventService = {
  addEvent,
  eventImage,
  getEvents,
};
