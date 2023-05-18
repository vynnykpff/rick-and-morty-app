import styled from "@emotion/styled";

const List = styled.ul`
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
margin: -15px;

`
const Card = styled.li`
width: 300px;
margin: 15px;
`
const Name = styled.h2`
color: var(--accent-color);
font-size: 20px;
background-color: rgba(0, 0 , 0, 0.5);

`
const ImgWrapper = styled.div`
width: 100%;
height: 300px;

`
export {List, Card, Name, ImgWrapper}