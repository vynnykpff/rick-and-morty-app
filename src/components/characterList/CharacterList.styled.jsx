import styled from "@emotion/styled";

const List = styled.ul`
display: flex;
flex-wrap: wrap;
align-items: center;
margin: 25px -12px -12px -12px;
list-style: none;

`
const Card = styled.li`
position: relative;
width: 297px;
height: 297px;
margin: 12px;
`
const Name = styled.h2`
position: absolute;
left: 0;
bottom: 0;
width: 100%;
color: #fff;
font-size: 22px;
background-color: rgba(0, 0 , 0, 0.5);
text-align: center;
padding: 12px 0;
`
const ImgWrapper = styled.div`
width: 100%;
object-fit: contain;
`
export {List, Card, Name, ImgWrapper}