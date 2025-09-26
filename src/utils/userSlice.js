import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: null,
    reducers: {
        // when we login
        addUser: (state, action) => {
            return action.payload; 
// once user is added, action.payload is returned and initialState will now be action.payload
        },
        removeUser: (state, action) => {
            return null;
// once user is removed, action.payload will returned null, and
// initialState will now again be null;
        }
    }

})
export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;



