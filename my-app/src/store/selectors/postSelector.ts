import {createSelector} from "reselect"
import { RootState } from "../store"

export const selectPostCreateReducer=(state:RootState)=>state.postCreate;

export const selectPostCreate=createSelector(
    selectPostCreateReducer,
    (postCreate)=>postCreate
)

export const selectPostListReducer=(state:RootState)=>state.postList;

export const selectPostList=createSelector(
    selectPostListReducer,
    (postList)=>postList
)