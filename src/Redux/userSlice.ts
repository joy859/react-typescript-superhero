import { createSlice, current } from "@reduxjs/toolkit";
import { userType } from "../Types";

export const userStorageName = "superhero_user";

export const defaultUser: userType = {
  id: "",
  username: "",
  email: "",
  isOnline: false,
  img: "",
  creationTime: "",
  lastseen: "",
  bio: "",
};

const initialState = {
  // user:[],
  currentUser: defaultUser,
  // currentSelectedUser:null
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const user = action.payload;

      // store user in local storage
      localStorage.setItem("superhero_user", JSON.stringify(user));

      // SET LOGED IN USER
      state.currentUser = user;
    },
    setUsers: (state, action) => {},
  },
});

export const { setUser, setUsers } = userSlice.actions;

export default userSlice.reducer;
