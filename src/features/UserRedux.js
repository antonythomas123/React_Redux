import { createSlice, current } from "@reduxjs/toolkit";
import { userData } from "../UsersData";

export const userSlice = createSlice({
  name: "users",
  initialState: { value: userData },
  reducers: {
    addUser: (state, action) => {
      state.value.push(action.payload);
    },
    updateUsername: (state, action) => {
    //console.log(current(state.value))
      state.value.map((user) => {
        if (user.id === action.payload.id) {
          user.username = action.payload.username;
        }
      });
    },
    deleteUser: (state, action) => {
        state.value = state.value.filter((user) => user.id !== action.payload.id)
    }
  },
});

export const { addUser, updateUsername, deleteUser } = userSlice.actions;
export default userSlice.reducer;
