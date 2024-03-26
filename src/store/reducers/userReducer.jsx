import { createSlice } from "@reduxjs/toolkit";

//initial state
const initialState = {
  users: [
    {
      id: 1,
      name: "Vivek",
    },
    {
      id: 2,
      name: "Vivek-2",
    },
  ],
};

// The createSlice function is a powerful feature provided by Redux Toolkit. It simplifies the process of creating Redux logic by combining actions and reducers into one cohesive unit. Here’s how it works:

// What is createSlice?
// createSlice is a function that accepts the following parameters:
// name: A string used to identify the slice of state.
// initialState: The initial state value for this slice.
// reducers: An object containing Redux “case reducer” functions. These reducers handle specific action types and update the state.
// extraReducers: An optional callback function used to add more reducers.
// reducerPath: A preference for the slice reducer’s location (used by combineSlices and slice.selectors).


// A Slice!
export const UserSlice = createSlice({
// Giving the name to mentioned state so we later down in the reducers can use it with this name.
  name: "users",
//   mentioning the initialstate of this slice to create reducers in this specific slice
  initialState,

//for above given "state", here we can make as many/different reducers as we want
//and reducers are make inside a slice "createSlice hook basically, which is provided by redux-toolkit"   
  reducers: {
    //actions will be pass here
    userdelete: (state, action)=>{
        console.log(action.payload)
        state.users.splice(action.payload,1)

    }
  },
});


export default UserSlice.reducer;


export const {userdelete} =UserSlice.actions
