import { createSlice } from "@reduxjs/toolkit";
import { use } from "react";

const initialState = {
    userSubscription : null,
    userVideos : [],
    userPlaylists : [],
    userHistory : [],
    userLikedVideos : [],
}

const userSlice = createSlice({
    name : "user",
    initialState,
    reducers : {
        setUserSubscription : (state , action) => {
            state.userSubscription = action.payload;
        },
        setUserVideos : (state , action) => {
            state.userVideos = action.payload;
        },
        setUserPlaylists : (state , action) => {
            state.userPlaylists = action.payload;
        },
        setUserHistory : (state , action) => {
            state.userHistory = action.payload;
        },
        setUserLikedVideos : (state , action) => {
            state.userLikedVideos = action.payload;
        }
    }
});

export const {setUserSubscription , setUserVideos , setUserPlaylists , setUserHistory , setUserLikedVideos} = userSlice.actions;
export default userSlice.reducer;