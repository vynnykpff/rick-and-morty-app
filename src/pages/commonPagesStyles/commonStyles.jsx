import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const Container = styled.div`
width: 100%;
display: flex;
flex-direction: column;
padding-bottom: 50px;

`
const Wrapper = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`

const Quantity = styled.p`
 font-weight: 600;
 color: var(--result-color);
 font-size: 26px;
`
const SectionTitle = styled.h1`
color: var(--link-color);
margin: 50px 0 30px 0;
font-size: 40px;
`
const SectionInfo = styled.p`
color: var(--text-color);
font-size: 24px;
margin-bottom: 20px;
`
const ListTitle = styled.h3`
margin-top: 40px;
font-size: 26px;
`
const Button = styled(Link)`
background-color: #004A7F;
-webkit-border-radius: 20px;
border-radius: 30px;
border: none;
color: #FFFFFF;
cursor: pointer;
display: inline-block;
font-family: inherit;
font-size: 26px;
padding: 15px 30px;
text-align: center;
text-decoration: none;
-webkit-animation: glowing 1500ms infinite;
-moz-animation: glowing 1500ms infinite;
-o-animation: glowing 1500ms infinite;
animation: glowing 1500ms infinite;
}

@keyframes glowing {
0% { background-color: var(--glowing-color1); box-shadow: 0 0 3px var(--glowing-color1); }
50% { background-color: var(--glowing-color2); box-shadow: 0 0 40px var(--glowing-color2); }
100% { background-color: var(--glowing-color1); box-shadow: 0 0 3px var(--glowing-color1); }

`
export {Quantity, Button, Wrapper, Container, ListTitle, SectionInfo, SectionTitle}