import styled from "styled-components";

const Rightside=()=>{
    return (
        <Container>
            <FirstCard>
                <Title>
                    Add to your feed 
                    <img src="/images/feed-icon.svg" alt="" />
                </Title>

                <FeedList>
                    <li>
                        <a href="">
                            <Avatar imgUrl="https://static-exp1.licdn.com/sc/h/1b4vl1r54ijmrmcyxzoidwmxs" alt="" />
                        </a>

                        <div>
                            <span># Linkedin</span>
                            <button>Follow</button>
                        </div>
                    </li>
                    <li>
                        <a href="">
                            <Avatar imgUrl="https://static-exp1.licdn.com/sc/h/1b4vl1r54ijmrmcyxzoidwmxs" alt="" />
                        </a>

                        <div>
                            <span># Video</span>
                            <button>Follow</button>
                        </div>
                    </li>
                </FeedList>
                <Recommendation>
                    View all recommendations
                    <img src="/images/right-icon.svg" alt="" />
                </Recommendation>
            </FirstCard>
            <BannerCard>
                <img
                src="https://media.licdn.com/dms/image/C4D03AQHz9Q64Cgh1Vw/profile-displayphoto-shrink_800_800/0/1659764785920?e=1678320000&v=beta&t=65sN8n89N80Iw8JIe-RXCNxp-9k5wSCi80RXLifY7wI"
                alt=""
                />
            </BannerCard>
        </Container>
    );
}

const Container=styled.div`
`

const FirstCard=styled.div`
    background-color: white;
    border-radius: 5px;
    margin-bottom: 8px;
    border:none;
    box-shadow:  0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
    /* text-align: center; */
    overflow: hidden;
    padding: 12px;
    padding: 12px 20px;

`

const Title=styled.div`
    display:flex;
   justify-content: space-between;
   font-size: 14px;
  color: rgba(0, 0, 0, 0.6);
`

const FeedList=styled.ul`
    margin-top: 16px;
    display: flex;
    flex-direction: column;

    li{
        display: flex;
        flex-direction: row;
        margin: 12px 0;
        font-size: 14px;
        /* border:1px solid black; */
        /* position: relative; */
        a{
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 100%;
        }
        & > div{
            display: flex;
            flex-direction: column;
            margin-left: 10px;
            button{
                border: 1px solid black;
                border-radius: 20px;
                padding: 10px 15px;
                background-color: transparent;
                color: rgba(0, 0, 0, 0.6);
                box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.6);
                display: flex;
                align-items: center;
                justify-content: center;
                font-weight: 600;
                max-height: 32px;
                max-width: 480px;
                text-align: center;
                outline: none;
            }
        }

    }
`

const Avatar=styled.div<{imgUrl:string,alt:string}>`

    background-image:${(props)=>{
        return `url(${props.imgUrl})`;
    }};
    background-repeat:no-repeat;
    background-size:cover;
    background-position:center;
    width:48px;
    height:48px;
    /* margin-right: 8px; */
`

const Recommendation=styled.div`

    color:#0a66c2;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 16px;

    img{
        width:20px;
        height:20px;
    }
    
`

const BannerCard=styled(FirstCard)`
    img{
        width: 100%;
        height: 100%;
        }
`
export default Rightside