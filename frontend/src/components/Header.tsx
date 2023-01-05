import styled from "styled-components"

const Header=()=>{
    return (
        <Container>
            <Content>
                <a href="/home">
                    <img src="/images/home-logo.svg" alt="" />
                </a>
                <Search>
                    <input type="search" placeholder="Search"/>
                    <SearchLogo>
                        <img src="/images/search-icon.svg" alt="" />
                    </SearchLogo>
                </Search>

           
                    <UL>
                        <Li className="active">
                            <a>
                                <img src="/images/nav-home.svg" alt="" />
                                <span>Home</span>
                            </a>
                        </Li>
                        <Li>
                            <a>
                                <img src="/images/nav-network.svg" alt="" />
                                <span>My Networks</span>
                            </a>
                        </Li>
                        <Li>
                            <a>
                                <img src="/images/nav-jobs.svg" alt="" />
                                <span>Jobs</span>
                            </a>
                        </Li>
                        <Li>
                            <a>
                                <img src="/images/nav-messaging.svg" alt="" />
                                <span>Messaging</span>
                            </a>
                        </Li>
                        <Li>
                            <a>
                                <img src="/images/nav-notifications.svg" alt="" />
                                <span>Notifications</span>
                            </a>
                        </Li>
                        
                        <User>
                            <a>
                                <img src="/images/user.svg" alt="" />
                                <div>
                                    <span>Me</span>
                                    <img src="/images/down-icon.svg" alt="" />
                                </div>
                            </a>

                            <SignOut>
                                <a>SignOut</a>
                                {/* <hr/> */}
                            </SignOut>

                        </User>

                        <Work>
                        <a>
                            <img src="/images/nav-work.svg" alt="" />
                            <div>
                            <span>Work</span>
                            <img src="/images/down-icon.svg" alt="" />
                            </div>
                        </a>
                        </Work>
                    </UL>

            </Content>
        </Container>
    )
}

const Container=styled.div`
    /* border:2px solid red; */
    background: white;
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    z-index: 100;
    padding: 0 24px;
    height: 70px;
`
const Content=styled.div`
    /* border:2px solid red; */
    width: 1428px;
    margin: auto;
    display: flex;
    align-items: center;
    text-align: center;
    min-height: 100%;
    height: 52px;
    /* justify-content: center; */

    a{
        display: flex;
        align-items: center;
        margin-right: 20px;
        img{
            width: 40px;
            height: 40px;
            /* text-align: center; */
        }
    }
`
const Search=styled.div`
    /* border: 2px solid red; */
    input[type="search"]{
        height: 40px;
        border: none;
        border-radius: 5px;
        width: 280px;
        padding-left: 40px;
        padding-right: 10px;
        background-color: #eef3f8;
        font-weight: 400;
        font-size: 14px;
        border-color: #dce6f1;
        vertical-align: text-top;
    }
`
const SearchLogo=styled.div`
    /* border:2px solid red; */
    position: absolute;
    width: 40px;
    top:27px;
    display: flex;
    justify-content: center;
    align-items: center;
`


const UL=styled.ul`
    /* border:2px solid red; */
    margin-left: auto;
    list-style-type: none;
    width: 55%;
    height: 100%;
    display:  flex;
    box-sizing: border-box;

    @media (max-width:768px) {
        max-height: 60px;
        position: fixed;
        left: 0;
        bottom: 0;
        background: white;
        width: 100%;
    }

    .active{
        span{
            color:black;
        }
        span:after{
            content: "";
            background-color:#000000;
            width: 100%;
            height: 2px;
            position: absolute;
            bottom: 0;
            left: 0;
            /* opacity: 1; */
            /* transform:scaleX(1); */
            
        }
    }
`
const Li=styled.li`
    /* border: 2px solid green; */
    
    min-height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    a{
        margin:auto;
        
        display: flex;
        flex-direction: column;
        justify-content: center;
        /* border: 2px solid red; */
        position: relative;
        min-height: 100%;
        width: 100%;
        img{
            width: auto;
            height:auto;

        }
        span{
            font-size: 12px;
            color: rgba(0, 0, 0, 0.6);
        }
        
    }

    &:hover,
    &:active {
        a {
            span {
            color: rgba(0, 0, 0, 0.9);
            }
        }
    }
    
`

const SignOut=styled.div`
    position:absolute;
    background-color: #FFFFFF;
    font-size: 20px;
    color:black;
    top:80px;
    /* left:-20px; */
    right:0;
    border-radius:9px;
    border-top-right-radius: 0;
    /* display:none; */
    opacity: 0;
    transition: all 500ms ease 0s;
    box-sizing: border-box;
    a{

        padding:15px 30px;

        &:hover{
            border:1px solid #a7a5a5;
            border-radius:9px;
            border-top-right-radius: 0;
            text-decoration: underline;
            cursor:pointer;
        }
    }
    hr{
        border-bottom:1px solid black;
    }

    @media (max-width:768px) {
        top:-60px;
        border:1px solid #a7a5a5;
        border-radius:9px;
        border-bottom-right-radius: 0;
        &:hover{
            border:1px solid #a7a5a5;
            border-radius:9px;
            border-bottom-right-radius: 0;
        }
    }
`
const User=styled(Li)`
    position:relative;
    a{
        img:first-child{
            border-radius: 100%;
            width: 24px;
            height:24px;
        }
        div{
            display:flex;
        }
    }
    
    &:hover{
        
        ${SignOut}{
            opacity:1;
            display: flex;
            flex-direction: column;
        }
    }
`

const Work=styled(Li)`
    border-left:1px solid rgba(0, 0, 0, 0.08);
    position:relative;
    a{
        img:first-child{
            border-radius: 100%;
            width: 24px;
            height:24px;
        }
        div{
            display:flex;
        }
    }
    
`


export default Header