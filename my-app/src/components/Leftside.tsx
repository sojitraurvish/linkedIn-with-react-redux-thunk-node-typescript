import { FC } from "react";
import styled from "styled-components";
import { User } from "../store/types";

export type LiftsideProps={
    myUserInfo:User
}

const Leftside:FC<LiftsideProps>=({myUserInfo})=>{
    return (
        <Container>
            <FirstCard>
                <UserInfo>
                    {/* <div>fdsf</div>
                    <div>fdsf</div>
                    <div>fdsf</div>
                    <div>fdsf</div>
                    <div>fdsf</div> */}
                    <BackgroudImg/>

                    <a href="">
                        <Photo imageUrl="https://media.licdn.com/dms/image/C4D03AQHz9Q64Cgh1Vw/profile-displayphoto-shrink_800_800/0/1659764785920?e=1678320000&v=beta&t=65sN8n89N80Iw8JIe-RXCNxp-9k5wSCi80RXLifY7wI"/>
                        <MyLink>Welcome, {myUserInfo?.user.displayName ?? "there"}</MyLink>
                    </a>

                    <a href="">Add a photo</a>
                </UserInfo>

                <Widget>
                    <a href="">
                        <div>
                            <span>Connections</span>
                            <span>Grow your netword</span>
                        </div>
                        <img src="/images/widget-icon.svg" alt="" />
                    </a>
                </Widget>

                <Item>
                    <span>
                        <img src="/images/item-icon.svg" alt="" />
                        My Items
                    </span>
                </Item>
            </FirstCard>
            <SecondCard>
                <a>
                    <span>Grops</span>
                </a>
                <a>
                    <span>
                        Events
                        <img src="/images/plus-icon.svg" alt="" />
                    </span>
                </a>
                <a>
                    <span>
                        Follows Hashtags
                    </span>
                </a>
                <a>
                    <span>
                        Discover more
                    </span>
                </a>
            </SecondCard>
        </Container>
    );
}

const Container=styled.div`
   
`

const FirstCard=styled.div`
    position:sticky;
    top:90px;
    text-align: center;
    background-color: #fff;
    border-radius: 5px;
    transition:all 83ms ease 0s;
    border: none;
    overflow: hidden;
    box-shadow:0 0 0 1px rgb(0 0 0 /15%),0 0 0 rgb(0 0 0 /20%);
    /* position: relative; */
    margin-bottom: 8px;

`

const UserInfo=styled.div`
    /* border:2px solid red; */
    border-bottom: 1px solid rgb(0,0,0,0.15);
    padding: 12px 12px 16px;

    a{
        text-decoration: none;
    }
    
    a:nth-child(3){
        /* text-decoration: underline; */
        color:#0a66c2;
        margin-top: 4px;
        font-size: 14px;
        line-height: 1.33;
        font-weight: 400;
    }
`

const BackgroudImg=styled.div`
    background-image: url("/images/card-bg.svg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position:center;
    height: 54px;
    margin: -12px -12px 0;
`
const Photo=styled.div<{imageUrl: string}>`

    background-image: ${(props:{imageUrl:string})=>{
        return `url(${props.imageUrl})`;
      }};
    background-color:#fff;
    background-repeat:no-repeat;
    background-position:center;
    background-size:100%;
    border:2px solid white;
    margin:-38px auto 12px auto; 
    border-radius:50%;

    width:70px;
    height:70px;
    background-clip:content-box;

`
const MyLink=styled.div`
    font-size: 16px;
    font-weight: 600;
    line-height: 1.5;
    color:rgb(0,0,0,0.9)
`

const Widget=styled.div`
    border-bottom: 1px solid rgba(0, 0, 0, 0.15);
    a{
        text-decoration: none;
        display: flex;
        justify-content: space-between;
        padding: 12px 20px;

        &:hover{
            background-color: rgba(0, 0, 0, 0.08);
        }

        div{
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            span{
                font-size: 14px;
                line-height: 1.333;
                &:first-child {
                    color: rgba(0, 0, 0, 0.6);
                }
                &:nth-child(2) {
                    color: rgba(0, 0, 0, 1);
                }

            }
        }
    }
    
`

const Item=styled.div`
    border-color: rgba(0, 0, 0, 0.8);
    font-size: 14px;
    display: block;
    span{
        display:flex;
        padding: 12px 20px;
        color: rgba(0, 0, 0, 1);
        svg {
        color: rgba(0, 0, 0, 0.6);
        }
    }
    &:hover{
        background-color: rgba(0, 0, 0, 0.08);
    }
`

const SecondCard=styled(FirstCard)`
position:sticky;
    top:365px;
    /* justify-content: center; */
    a{
        color:black;
        font-size: 14px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        /* border:2px solid red; */
        padding: 12px 20px;
        &:hover{
                background-color:rgba(0, 0, 0, 0.08);
            }
        
        &:nth-child(2){

            span{
                /* border: 2px solid red; */
                display: flex;
                width:100%;
                justify-content: space-between;
            }
        }
        &:last-child{
            color:rgb(0,0,0,0.6);
            border-top:1px solid #d6cec2;
            padding:12px initial;
            &:hover{
                background-color:rgba(0, 0, 0, 0.08);
            }
        }
    }
`

export default Leftside