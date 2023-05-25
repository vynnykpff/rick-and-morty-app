import styled from "@emotion/styled";
import { Link } from "react-router-dom";

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
border-radius: 10px;
overflow: hidden;
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
const LinkEl = styled(Link)`
text-decoration: none;
width: 100%;
`
export {List, Card, Name, ImgWrapper, LinkEl}