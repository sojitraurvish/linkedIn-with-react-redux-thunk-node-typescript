import axios from "axios";
import { createAction } from "../../utils/reducer.utils";
import { AppThunk } from "../store";
import { PostData } from "../types/post";
import { POST_CREATE_ACTION_TYPE } from "../types/postCreate";
import { POST_LIST_ACTION_TYPE } from "../types/postList";
import { errorHandler } from "./errorHandler";

/**
 * Action used to update a product
 */
export const createPost = (post: PostData): AppThunk => async (
    dispatch,
    getState
  ) => {
    try {
      dispatch(createAction(
        POST_CREATE_ACTION_TYPE.POST_CREATE_REQUEST
      ));
  

      
    //   // Get user info from the userLogin object (from getState)
    //   const {
    //     userLogin: { userInfo },
    //   } = getState();
  
      // Axios config
      const config = {
        headers: {
          "Content-Type": "application/json",
        //   Authorization: `Bearer ${userInfo?.token}`,
        },
      };
  
      const { data } = await axios.post(
        `/api/addpost`,
        post,
        config
      );
      
      dispatch(createAction(
        POST_CREATE_ACTION_TYPE.POST_CREATE_SUCCESS,
        data
      ));
    } catch (error) {
        dispatch(createAction(
            POST_CREATE_ACTION_TYPE.POST_CREATE_SUCCESS,
            errorHandler(error)
          ));
    }
  };

/**
 * Action used to update a product
 */
export const listPost = (): AppThunk => async (
    dispatch,
  ) => {
    try {
        console.log("heoo1");
      dispatch(createAction(
        POST_LIST_ACTION_TYPE.POST_LIST_REQUEST
      ));
  
      
      
    //   // Get user info from the userLogin object (from getState)
    //   const {
    //     userLogin: { userInfo },
    //   } = getState();
  
      // Axios config
      const config = {
        headers: {
          "Content-Type": "application/json",
        //   Authorization: `Bearer ${userInfo?.token}`,
        },
      };
  
      const { data } = await axios.get(
        `/api/addpost`,
        config
      );
      console.log(data);
      
      dispatch(createAction(
        POST_LIST_ACTION_TYPE.POST_LIST_SUCCESS,
        data
      ));
    } catch (error) {
        dispatch(createAction(
            POST_LIST_ACTION_TYPE.POST_LIST_SUCCESS,
            errorHandler(error)
          ));
    }
  };