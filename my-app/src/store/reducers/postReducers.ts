import { PostCreateAction, PostCreateState, POST_CREATE_ACTION_TYPE } from "../types/postCreate";
import { PostListAction, PostListState, POST_LIST_ACTION_TYPE } from "../types/postList";
import { USER_LOGIN_ACTION_TYPE } from "../types/userLogin";


export const postCreateReducer=(state:PostCreateState={},action:PostCreateAction):PostCreateState=>{
    const {type}=action;

    if(type===POST_CREATE_ACTION_TYPE.POST_CREATE_REQUEST){
        return {...state,loading:true}
    }
    if(type===POST_CREATE_ACTION_TYPE.POST_CREATE_SUCCESS){
        return {...state,loading:false,success:true,post:action.payload}
    }
    if(type===POST_CREATE_ACTION_TYPE.POST_CREATE_FAIL){
        return {...state,loading:false,error:action.payload}
    }
    if(type===POST_CREATE_ACTION_TYPE.POST_CREATE_RESET){
        return {}
    }

    return state;
}

export const postListReducer=(state:PostListState={},action:PostListAction):PostListState=>{
    const {type}=action;

    if(type===POST_LIST_ACTION_TYPE.POST_LIST_REQUEST){
        return {...state,loading:true}
    }
    if(type===POST_LIST_ACTION_TYPE.POST_LIST_SUCCESS){
        return {...state,loading:false,post:action.payload}
    }
    if(type===POST_LIST_ACTION_TYPE.POST_LIST_FAIL){
        return {...state,loading:false,error:action.payload}
    }
    if(type===POST_LIST_ACTION_TYPE.POST_LIST_RESET){
        return {}
    }

    return state;
}