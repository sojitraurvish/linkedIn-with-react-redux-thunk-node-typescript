import styled from "styled-components"
import Leftside from "./Leftside"
import Main from "./Main"
import Rightside from "./Rightside"
const Home=()=>{
    return (
        <Container>
            <Content>

                <Section>
                    <h5>
                        <a href="">Hiring in a hurry? -&nbsp;</a>
                    </h5>
                    <p>
                        Find talented pors in record time width Upwork and keep business moving.
                    </p>
                </Section>
                <MainContent>
                    <Leftside/>
                    <Main/>
                    <Rightside/>
                </MainContent>

            </Content>
        </Container>
    )
}

const Container=styled.div`
    /* border:2px solid red; */
    margin-top: 70px;
    max-width: 100%;
`
const Content=styled.div`
    /* border:2px solid red; */
    max-width: 1428px;
    width: 100%;
    margin:auto
    
`

const Section=styled.section`
    min-height:50px;
    padding:16px 0;
    /* border:2px solid red; */
    display: flex;
    justify-content:center;
    align-items: center;
    text-decoration: underline;

    h5{
        color:#0a66c2;
        font-size: 16px;
        a{
            font-weight: 700;
        }
    }

    p{
        font-size: 16px;
        color:#434649;
        font-weight:600;
    }

    @media (max-width:768px) {
        /* display: flex; */
        flex-direction: column;
        padding: 0 5px;
    }
`

const MainContent=styled.div`
    display:grid;
    grid-template-columns: minmax(0,5fr) minmax(0,12fr) minmax(0,7fr);
    margin: 25px 0;
    grid-column-gap: 25px;
    grid-row-gap: 25px;

    @media (max-width:768px){
        display: flex;
        flex-direction:column;
        padding: 0 15px;
    }
`


export default Home