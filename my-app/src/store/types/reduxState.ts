import { PostCreateState } from "./postCreate"
import { PostListState } from "./postList"
import {UserLoginState} from "./userLogin"

export interface ReduxState{
    userLogin:UserLoginState
    postCreate:PostCreateState,
    postList:PostListState
}