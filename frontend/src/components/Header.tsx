import styled from "styled-components"

const Header=()=>{
    return (
        <Container>
            <Content>
                <a href="/home">
                    <img src="/images/linkedin.png" alt="" />
                </a>
                <SearchBox>
                    <input type="text" placeholder="Search" />
                    <div>
                        <img src="/images/search-icon.svg" alt="" />
                    </div>
                </SearchBox>
            </Content>
        </Container>
    )
}

const Container=styled.div`
    /* border:2px solid red; */
    background-color: white;
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
    width: 100vw;
    position: fixed;
    top: 0;
    left:0;
`
const Content=styled.div`
    /* border:2px solid blue; */
    display: flex;
    align-items: center;
    width: 1428px;
    min-height: 100%;
    margin: auto;
    padding: 12px 20px;

    img{
       height: 40px;
    }
`

const SearchBox=styled.div`
    /* border: 2px solid red; */
    margin-left: 10px;
    flex-grow: 1;
    position: relative;
    & > input[type="text"]{
        /* max-width: 280px; */
        width: 218px;
        border: none;
        box-shadow: none;
        background-color: #eef3f8;
        color: rgba(0, 0, 0, 0.9);
        font-weight: 400;
        font-size: 14px;
        height: 34px;
        border-radius: 2px;
        line-height: 1.75;
        padding:0 0 0 40px;
        border-color: #dce6f1;
      /* vertical-align: text-top; */
    }

    div{
        /* border: 2px solid red; */
        width: 40px;
        position: absolute;
        z-index: 1;
        top: 5px;
        left: 2px;
        /* border-radius: 0 2px 2px 0; */
        /* /* margin: 0; */
        display: flex;
        justify-content: center;
        align-items: center;
        img{
            width: 20px;
            height: 20px;
        }
    }
`

export default Header