
import { Action, ActionWithPayload } from "../../utils/reducer.utils";
import { PostData } from "./post";



export interface PostListState{
    readonly post?:PostData[],
    readonly loading?:boolean,
    readonly error?:Error
}

export enum POST_LIST_ACTION_TYPE{
    POST_LIST_REQUEST="post/POST_LIST_REQUEST",
    POST_LIST_SUCCESS="post/POST_LIST_SUCCESS",
    POST_LIST_FAIL="post/POST_LIST_FAIL",
    POST_LIST_RESET="post/POST_LIST_RESET",
}

export type PostListRequestAction=Action<POST_LIST_ACTION_TYPE.POST_LIST_REQUEST>
export type PostListSuccessAction=ActionWithPayload<POST_LIST_ACTION_TYPE.POST_LIST_SUCCESS,PostData[]>
export type PostListFailAction=ActionWithPayload<POST_LIST_ACTION_TYPE.POST_LIST_FAIL,Error>
export type PostListResetAction=Action<POST_LIST_ACTION_TYPE.POST_LIST_RESET>

export type PostListAction=
PostListRequestAction |
PostListSuccessAction |
PostListFailAction |
PostListResetAction ;