import styled from "styled-components"
import {useState,MouseEvent, ChangeEventHandler, ChangeEvent, useEffect} from "react"
import ReactPlayer from "react-player"
import { useDispatch, useSelector } from "react-redux"
import { selectUserLogin } from "../store/selectors/userSelectors"
import axios from "axios"
import { AppDispatch, RootState } from "../store/store"
import { createPost } from "../store/actions/postActions"
import { selectPostCreate } from "../store/selectors/postSelector"
import { createAction } from "../utils/reducer.utils"
import { POST_CREATE_ACTION_TYPE } from "../store/types/postCreate"
import { useNavigate } from "react-router-dom"

export type PostModelProps={
    showModel:boolean,
    handleClick:(e:MouseEvent<HTMLButtonElement>)=>void
}

const PostModel=({showModel,handleClick}:PostModelProps)=>{

    const dispatch=useDispatch<AppDispatch>();
    const navigate=useNavigate();

    const {userInfo,error,loading}=useSelector(selectUserLogin)
    const {post,success,error:postError,loading:postLoading}=useSelector((stete:RootState)=>stete.postCreate)

    const [postText,setPostText]=useState<string>("");
    const [shareImage,setShareImage]=useState<string>("");
    const [videoLink,setVideoLink]=useState<string>("");
    const [assetArea,setAssetArea]=useState<string>("")
    const [uploading,setUploading]=useState<boolean>(false);

    useEffect(()=>{
        if(success){
            dispatch(
                createAction(
                    POST_CREATE_ACTION_TYPE.POST_CREATE_RESET
                )
            )
            
            
            navigate("/home");
        }
    })

    const handleChange=async(e:ChangeEvent<HTMLInputElement>):Promise<void>=>{
        
        
        const image = e.target.files![0];

        if (!image) return;

        const formData=new FormData();
        formData.append("image",image);
        setUploading(true)

        try {
            const config = {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            };
      
            const { data } = await axios.post("/api/upload", formData, config);
      
            console.log(data);
            
            setShareImage(data);

            setUploading(false);
          } catch (error) {
            console.error(error);
            setUploading(false);
          }
        
        
    }

    const switchAssetArea=(area:string)=>{
        setShareImage("");
        setVideoLink("");
        setAssetArea(area)
    }

    const reset=(e:MouseEvent<HTMLButtonElement>)=>{
        setPostText("");
        setShareImage("");
        setVideoLink("");
        setAssetArea("");
        handleClick(e);
    }

    const submitForm=(e:MouseEvent<HTMLButtonElement>)=>{
        e.preventDefault();
    

        dispatch(
            createPost({
                actor:{
                    description:userInfo!.user.displayName,
                    title:userInfo!.user.displayName,
                    image:userInfo!.user.photoURL
                },
                video:videoLink,
                sharedImg:shareImage,
                comment:0,
                description:postText
            })
        )
        reset(e);
        handleClick(e);
    }

    return (
        <>
        {
            showModel &&
            <Container>
                <Content>
                    <Header>
                        <h2>Create a post</h2>
                        <button onClick={reset}>
                            <img src="/images/close.png" alt="" />
                        </button>
                    </Header>

                    <SharedContent>
                        <UserInfo>
                            <img src={userInfo?.user.photoURL} alt="" />
                            <span>{userInfo?.user.displayName}</span>
                        </UserInfo>

                            <Editor>

                                <textarea 
                                value={postText}
                                onChange={(e)=>setPostText(e.target.value)}
                                placeholder="What do you want to talk about?"
                                >
                                </textarea>
                                {
                                    assetArea === "image" &&
                                    <UploadImage>
                                        <input 
                                        type="file" 
                                        accept="image/gif,image/jpeg,image/png"
                                        name="image"
                                        id="file"
                                        style={{display:"none"}}
                                        onChange={(e)=>handleChange(e)}
                                        />
                                        <p>
                                            <label htmlFor="file">
                                                select an image to share
                                            </label>
                                        </p>
                                        {shareImage && 
                                            <img src={shareImage}/>
                                        }
                                    </UploadImage>
                                }
                                {
                                    assetArea === "video" &&
                                    <>
                                        <input 
                                        type="text"
                                        placeholder="Please input a video link"
                                        value={videoLink}
                                        onChange={(e)=>setVideoLink(e.target.value)}
                                    
                                        />
                                        {
                                            videoLink &&
                                            <ReactPlayer width="100%" url={videoLink}/>
                                        }
                                    </>
                                }
                                    
                                
                            </Editor>
                                
                        
                    </SharedContent>

                    <ShareCreation>
                        <AttachAssets>
                            <AssetsButton onClick={()=>switchAssetArea("image")}>
                                <img src="/images/image.png" alt="" />
                            </AssetsButton>
                            <AssetsButton onClick={()=>switchAssetArea("video")}>
                                <img src="/images/video.png" alt="" />
                            </AssetsButton>

                            <SharedComment>
                                <AssertButton>
                                    <img src="/images/comment.png" alt="" />
                                    <span>Anyone</span>
                                </AssertButton>
                            </SharedComment>
                            
                        </AttachAssets>

                        <PostButton onClick={(e)=>submitForm(e)} disabled={!postText ? true :false}>
                            Post
                        </PostButton>

                    </ShareCreation>
                </Content>
            </Container>
        }</>
    )
}

const Container=styled.div`
    position:fixed;
    top: 0;
    left: 0;
    right:0;
    bottom: 0;
    color:black;
    background-color: rgba(0,0,0,0.6);
    z-index: 99999;
    animation:fadeIn;
`

const Content=styled.div`
    display: flex;
    flex-direction:column;
    background-color: white;
    max-width: 652px;
    margin:0 auto;
    position:relative;
    top:42px;
    max-height: 90%;
    overflow: initial;
    border-radius: 5px;
`

const Header=styled.div`
    /* border:2px solid red; */
    display: flex;
    justify-content: space-between;
    padding:30px 24px;
    border-bottom:1px solid rgba(0,0,0,0.15);
    h2{

    }
    button{
        border:none;
        background:transparent;
        img{
            width:15px;
            /* min-width: auto; */
        }
        &:hover{
            cursor: pointer;
        }
    }
`

const SharedContent=styled.div`
    display: flex;
    flex-direction: column;
    

`

const UserInfo=styled.div`
    display: flex;
    align-items: center;
    padding:14px 22px;
    img{
        width: 52px;
        height:53px;
        border-radius: 50%;
    }
    span{
        font-weight: 600;
        font-size:16px;
        line-height: 1.5;
        margin-left: 9px;
    }
`

const ShareCreation=styled.div`
    display: flex;
    justify-content: space-between;
    padding:16px 20px; 
`

const AttachAssets=styled.div`
    display:flex;
    align-items: center;
    height:40px;
    min-width: auto;
    color:rgba(0,0,0,0.5)
`

const AssetsButton=styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border:2px solid rgba(0,0,0,0.140) ;
    border-radius: 5px;
    
    img{
        width:42px;
        height:42px;
        
    }
    &:hover{
        cursor: pointer;
    }
    &:nth-child(2){
        img{
            
            padding:3px 4px;
        }
        margin-right: 10px;
    }
`
const SharedComment=styled.div`
    display: flex;
    align-items: center;
    justify-content: center; 
    border-left: 1px solid rgba(0,0,0,0.50);

`

const AssertButton=styled.div`
    display: flex;
    align-items: center;
    justify-content: center; 
    border: 1px solid rgba(0,0,0,0.08);
    padding:1px 7px;
    margin-left: 10px;
    img{
            width: 42px;
            height: 42px;
            padding:4px 5px;
        }
`

const PostButton=styled.button`
    min-width:60px;
    border-radius: 20px;
    background-color: #0a66c2;
    color: white;
    padding:0 16px;
    background-color: ${(props)=>(props.disabled ? "rgba(0,0,0,0.8)" : "#0a66c2")};
    &:hover{
        background-color: ${(props)=>(props.disabled ? "rgba(0,0,0,0.8)" : "#004182")};
    }
`

const Editor=styled.div`
    padding:12px 20px;
    textarea{
        width: 100%;
        min-height:150px;
        font-size: 20px;
        resize:none;
        padding:5px;
    }
    input{
        width: 100%;
        min-height: 50px;
        text-align: center;
        font-size: 20px;
    }
    
`
const UploadImage=styled.div`
    text-align: center;
    img{
        width:50%;
        height:50%;
    }
    
`

export default PostModel