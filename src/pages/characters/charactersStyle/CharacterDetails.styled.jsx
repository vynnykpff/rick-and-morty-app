import styled from '@emotion/styled';

const Container = styled.div`
width: 100%;
display: flex;
flex-direction: column;
// border: 1px solid tomato;

`
const Wrapper = styled.div`
display: flex;
justify-content: space-between;
margin-bottom: 30px;
align-items: center;
`

const Quantity = styled.p`
 font-weight: 600;
 color: var(--result-color);
 font-size: 26px;

`
const Button = styled.button`
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
// @-webkit-keyframes glowing {
// 0% { background-color: #B20000; -webkit-box-shadow: 0 0 3px #B20000; }
// 50% { background-color: #FF0000; -webkit-box-shadow: 0 0 40px #FF0000; }
// 100% { background-color: #B20000; -webkit-box-shadow: 0 0 3px #B20000; }
// }

// @-moz-keyframes glowing {
// 0% { background-color: #B20000; -moz-box-shadow: 0 0 3px #B20000; }
// 50% { background-color: #FF0000; -moz-box-shadow: 0 0 40px #FF0000; }
// 100% { background-color: #B20000; -moz-box-shadow: 0 0 3px #B20000; }
// }

// @-o-keyframes glowing {
// 0% { background-color: #B20000; box-shadow: 0 0 3px #B20000; }
// 50% { background-color: #FF0000; box-shadow: 0 0 40px #FF0000; }
// 100% { background-color: #B20000; box-shadow: 0 0 3px #B20000; }
// }

@keyframes glowing {
0% { background-color: #77C372; box-shadow: 0 0 3px #77C372; }
50% { background-color: #CBDF7C; box-shadow: 0 0 40px #CBDF7C; }
100% { background-color: #77C372; box-shadow: 0 0 3px #77C372; }
`
export {Quantity, Button, Wrapper, Container}