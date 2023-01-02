import styled from "styled-components"

const Login=()=>{

    return (

    <Container>
        <Nav>
            <a href="/">
                <img src="/images/login-logo.svg" alt="not_found"/>
            </a>
            <div>
                <Join>Join Now</Join>
                <SignIn>Sign In</SignIn>
            </div>
        </Nav>
        <Section>
            <Text>
                <h1>

                    Welcome to your personal community
                </h1>
                <img src="/images/login-hero.svg" alt="not_found" />
            </Text>
            <Form>
                <GoogleBtn>
                    <img src="/images/google.svg" alt="not_found" />
                    Sign in with Google
                </GoogleBtn>
            </Form>
        </Section>
    </Container>
    )
}

const Container=styled.div`
  padding:0;
  /* border:2px solid red; */
`
const Nav=styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1328px;
    /* border: 1px solid red; */
    height: 80px;
    margin:auto;
    padding:12px 14px;

   & > a{
        min-width: 135px;
        min-height:32px;
        @media (max-width:768px){
            padding: 0 5px;
        }
   } 
`

const Join=styled.a`
    padding:10px 12px;
    color: rgba(0, 0, 0, 0.6);
    margin-right: 12px;
    &:hover{
        background-color: rgba(0, 0, 0, 0.08);
        border-radius: 100px;
    }
`
const SignIn=styled.a`
    box-shadow: inset 0 0 0 1px #0a66c2;
    border-radius: 100px;
    padding: 10px 24px;
    color:#0a66c2;
    font-weight: 600;
    &:hover{
        background-color: rgba(112, 181, 249, 0.15);
    }
`

const Section=styled.section`
    /* border:2px solid red; */
    display: flex;
    flex-wrap: wrap;
    max-width:1328px;
    min-height: 700px;
    margin:auto;
    align-content:start;
    padding: 100px 0;
    

    @media (max-width:768px){
        justify-content: center;
        margin: auto;
        min-height: 0;
    }
`

const Text=styled.div`
    /* border:2px solid red; */
    padding: 0 20px;
    width: 100%;
    h1{
        width: 55%;
        color:#2977c9;
        font-size: 66px;
        font-weight: 0;
        line-height:70px;
        @media (max-width:768px) {
            text-align: center;
            font-size: 22px;
            letter-spacing: 2px;
            width: 100%;
            line-height: 2;
            /* font-weight:bold; */
        }
    }

    img{
        
        width: 800px;
        height: 870px;
        position: absolute;
        bottom: 20%;
        right: -5%;
        top:100px;
        @media (max-width:768px){
            width:100%;
            height: initial;
            position: initial;
            top:230px;
        }
    }

 `
const Form=styled.div`
    margin-top:100px;
    width:420px;
    padding: 0 20px;
    /* border:2px solid red; */
    @media (max-width:768px) {
        margin-top:20px;
    }
`

const GoogleBtn=styled.button`
    display: flex;
    justify-content: center;
    background-color: #fff;
    align-items: center;
    border-radius: 100px;
    width: 100%;
    height: 56px;
    z-index: 0;
    transition: all 167ms ease 0s;
    font-size: 20px;
    color:rgba(0, 0, 0, 0.6) ;

    &:hover{
        /* border:2px solid black; */
        background-color: rgba(207, 207, 207, 0.25);
        color:rgba(0, 0, 0, 0.75);
    }

    
`

export default Login;