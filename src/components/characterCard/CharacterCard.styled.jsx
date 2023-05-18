import styled from '@emotion/styled';

const Card = styled.div`
padding: 40px;
background: rgba(217, 217, 217, 0.36);
box-shadow: 6px 9px 24px rgba(119, 195, 114, 0.27);
border-radius: 38px;
display: flex;
justify-content: space-around;
align-items: center;

`
const CharacterInfo = styled.div`
color: var(--link-text);
display: flex;
flex-direction: column;
align-items: center;
`
const Name = styled.h1`
color: var(--title-color);
text-transform: uppercase;
font-size: 40px;
margin-bottom: 30px;

`
const TitleInfo = styled.h2`
font-size: 30px;
font-weight: 600;
margin-right: 15px;
`
const Info = styled.p`
font-size: 30px;
font-weight: 400;
`
const ImgWrapper = styled.div`
display: flex;
justify-content: center;
width: 400px;
height: 500px;
`
const Img = styled.img`
display: block;
max-width: 100%;
max-height: 100%;
`
const FavBtn = styled.button`
background-color: transparent;
-webkit-border-radius: 20px;
border: 1px solid white;
border-radius: 30px;
color: #FFFFFF;
cursor: pointer;
display: inline-block;
font-family: inherit;
font-size: 26px;
padding: 15px 30px;
text-align: center;
`
export {Card, CharacterInfo, Name, TitleInfo, Info, ImgWrapper, Img, FavBtn}