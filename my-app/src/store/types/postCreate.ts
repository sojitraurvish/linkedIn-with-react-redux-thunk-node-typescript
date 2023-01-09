
import { Action, ActionWithPayload } from "../../utils/reducer.utils";
import { PostData } from "./post";
import { User } from "./user";


export interface PostCreateState{
    readonly post?:PostData,
    readonly loading?:boolean,
    readonly success?:boolean,
    readonly error?:Error
}

export enum POST_CREATE_ACTION_TYPE{
    POST_CREATE_REQUEST="post/POST_CREATE_REQUEST",
    POST_CREATE_SUCCESS="post/POST_CREATE_SUCCESS",
    POST_CREATE_FAIL="post/POST_CREATE_FAIL",
    POST_CREATE_RESET="post/POST_CREATE_RESET",
}

export type PostCreateRequestAction=Action<POST_CREATE_ACTION_TYPE.POST_CREATE_REQUEST>
export type PostCreateSuccessAction=ActionWithPayload<POST_CREATE_ACTION_TYPE.POST_CREATE_SUCCESS,PostData>
export type PostCreateFailAction=ActionWithPayload<POST_CREATE_ACTION_TYPE.POST_CREATE_FAIL,Error>
export type PostCreateResetAction=Action<POST_CREATE_ACTION_TYPE.POST_CREATE_RESET>

export type PostCreateAction=
PostCreateRequestAction |
PostCreateSuccessAction |
PostCreateFailAction |
PostCreateResetAction ;