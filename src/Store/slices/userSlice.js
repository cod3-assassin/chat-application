import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    name: "John Doe",
    email: "johndoe@example.com",
    bio: "Software Developer",
    profilePicture: "", // Add a URL to the user's profile picture
    location: "San Francisco, CA", // Add a location field
    joinedDate: "January 1, 2020", // Add a joined date field
  },
  reducers: {
    updateUser: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { updateUser } = userSlice.actions;

export default userSlice.reducer;
