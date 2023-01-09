import { useState,useEffect,ChangeEvent,MouseEvent } from "react";
import ReactPlayer from "react-player";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { listPost } from "../store/actions/postActions";
import { selectPostList } from "../store/selectors/postSelector";
import { AppDispatch, RootState } from "../store/store";
import PostModel from "./PostModel";



const Main=()=>{

    const dispatch=useDispatch<AppDispatch>();
    const [postModel,setPostModel]=useState(false);

    const {post,error,loading}=useSelector((state:RootState)=>state.postList)
    const {post:postCreate,success}=useSelector((state:RootState)=>state.postCreate)

    console.log(post);
    
    useEffect(()=>{
            dispatch(listPost());
        
    },[postCreate])

    const handleClick=(e: MouseEvent<HTMLButtonElement>)=>{
        e.preventDefault();
        // if(e.target !== e.currentTarget){
        //     console.log("error");
        //     return;
        // }
        
        setPostModel(!postModel);
    }



    return (
        <Container>
            <ShareBox>
                <div>
                    <img src="https://media.licdn.com/dms/image/C4D03AQHz9Q64Cgh1Vw/profile-displayphoto-shrink_800_800/0/1659764785920?e=1678320000&v=beta&t=65sN8n89N80Iw8JIe-RXCNxp-9k5wSCi80RXLifY7wI" alt="" />
                    <button onClick={handleClick}>Start a post</button>
                </div>

                <div>
                    <button>
                        <img src="/images/image.png" alt="" />
                        <span>Photo</span>
                    </button>
                    <button>
                        <img src="/images/video.png" alt="" />
                        <span>Video</span>
                    </button>
                    <button>
                        <img src="/images/event.png" alt="" />
                        <span>Event</span>
                    </button>
                    <button>
                        <img src="/images/article.png" alt="" />
                        <span>Write article</span>
                    </button>
                </div>


            </ShareBox>
            <div>
                {
                    post?.map((post)=>(
                            <Article key={post._id}>
                        <SharedActor>
                            <a href="">
                                <img src={post.actor.image} alt="" />
                                <div>
                                    <span>{post.actor.title}</span>
                                    <span>{post.actor.description}</span>
                                    <span>{post.actor.date}</span>
                                </div>
                            </a>
                            <button>
                                <img src="/images/elips.png" alt="" />
                            </button>
                        </SharedActor>
                        <Description>
                            {post.description}
                        </Description>
                        <SharedImg>
                            <a href="">
                                {
                                    post.sharedImg 
                                    ? (<img src={post.sharedImg} alt="" />)
                                    : (<ReactPlayer width="100%" url={post.video}/>)

                                }
                            </a>
                        </SharedImg>
                        <SocialCounts>
                            <li>
                                <button>
                                    <img src="/images/like-r.png" alt="" />
                                    <img src="/images/clap-r.png" alt="" />
                                    <span>Urvish sojitra & 75 others</span>
                                </button>
                            </li>
                            <li>
                                <a href="">{post.comment ?? "0"} </a>
                            </li>
                        </SocialCounts>
                        <LastSection>
                            <button>
                                <img src="/images/like.png" alt="" />
                                <span>Like</span>
                            </button>
                            <button>
                                <img src="/images/comment.png" alt="" />
                                <span>Comments</span>
                            </button>
                            <button>
                                <img src="/images/share.png" alt="" />
                                <span>Share</span>
                            </button>
                            <button>
                                <img src="/images/connect.png" alt="" />
                                <span>Send</span>
                            </button>

                        </LastSection>
                    </Article>
                    ))
                }
                
                
            </div>
            <PostModel showModel={postModel} handleClick={handleClick}/>
        </Container>
    );
}

const Container=styled.div`
    
`

const CommanCard=styled.div`
    text-align: center;
    background-color: white;
    padding:10px;
    border-radius: 5px;
    transition:all 85ms ease 0s;
    border: none;
    box-shadow:0 0 0 1px rgb(0 0 0 /15%),0 0 0 rgb(0 0 0 /20%);
    margin-bottom: 8px;
    overflow: hidden;
    padding: 12px 20px;
    position: relative;
`

const ShareBox=styled(CommanCard)`
    display:flex;
    flex-direction: column;
    padding-top: 19px;
    div{
        

        button{
                outline: none;
                color:rgba(0,0,0,0.6);
                background:transparent;
                font-size:14px;
                display: flex;
                align-items: center;
                border: none;
                font-weight:600;
                line-height: 1.5;
                min-height: 48px;
            }
        &:first-child{
            display: flex;
            align-items: center;
            justify-content: flex-start;
            img{
                width:60px;
                border-radius: 50%;
                margin-right: 8px;
            }
            button{
                border-radius: 35px;
                border:1px solid rgba(0,0,0,0.15);
                flex-grow: 1;
                background-color: white;
                text-align: left;
                padding-left:16px;
                /* margin:4px 0; */
            }
        }
        &:nth-child(2){
            padding:0 10px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            
            button{
                img{
                    width:30px;
                    height: 25px;
                    margin: 0 10px 0 -2px;
                }
                span{
                    color:#70b5f9;
                }
            }
            
        }
    }
`
const Article=styled(CommanCard)`
    /* margin: 0 0 8px; */
`
const SharedActor=styled.div`
    display:flex;
    justify-content: space-between;
    align-items: center;
    a{
        display:flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        img{
            width: 48px;
            height: 48px;
        }
        div{
            display: flex;
            flex-direction: column;
            flex-grow: 1;
            margin-left:8px;
            span{

                text-align: left;
                &:first-child{
                    font-size: 14px;
                    font-weight:700;
                    color:rgba(0,0,0,1)
                }

                &:nth-child(2){
                    font-size: 12px;
                    color:rgba(0,0,0,0.6)
                }
                &:nth-child(3){
                    font-size: 12px;
                    color:rgba(0,0,0,0.6)
                }
            }
        }
    }

    button{
        position:absolute;
        right: 7px;
        top:0px;

        height:40px;
        width:40px;
        border:none;
        outline:none;
        background: transparent;
        img{
            width:100%;
            height:100%;
        }
    }
`

const Description=styled.div`
    font-size: 16px;
    /* padding: 0 16px; */
    overflow: hidden;
    color:rgba(0,0,0,0.8);
    text-align: left;
    margin-top:8px;
`
const SharedImg=styled.div`
    margin-top:8px;
    display:block;
    position:relative;
    background-color:#f9fafb;
    img{
        object-fit: contain;
        width:100%;
        height:100%;
    }

`

const SocialCounts=styled.ul`
    line-height: 1.3;
    display: flex;
    align-items:center;
    text-align: center;
    justify-content: space-between;
    list-style-type: none;
    margin:10px 16px;
    border-bottom: 1px solid rgba(0,0,0,0.3);
    padding-bottom:5px;
    li{
        &:first-child{
            button{
                display:flex;
                align-items: center;
                border:none;
                background: transparent;
                img{
                    width: 18px;
                    /* position:relative; */
                    /* height:42px; */
                    
                }
                span{
                    margin-left: 7px;
                    &:hover{
                        text-decoration: underline;
                        color:#80c2fb;
                    }
                }
            }
        }

        &:nth-child(2){
            a{
                text-decoration: none;
                font-size: 14px;
                &:hover{
                    text-decoration: underline;
                    color:#80c2fb;
                }
            }
            
        }
    }
`

const LastSection=styled.div`
    display: flex;
    margin-top: 20px;
    margin-bottom: 10px;
    align-items: center;
    justify-content: space-around;
    button{
        display: flex;
        align-items: center;
        justify-content: center;
        height: 27px;
        width:27px;
        border:none;
        background: transparent;
        img{
            width:100%;
            height: 100%;
            
        }
        span{
            font-size: 14px;
            margin-left: 5px;
        }
    }
`

export default Main