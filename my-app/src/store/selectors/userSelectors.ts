import {createSelector} from "reselect"
import { RootState } from "../store"

export const selectUserLoginReducer=(state:RootState)=>state.userLogin;

export const selectUserLogin=createSelector(
    selectUserLoginReducer,
    (userLogin)=>userLogin
)