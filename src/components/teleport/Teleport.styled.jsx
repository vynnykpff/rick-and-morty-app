import styled from '@emotion/styled';
import {Link} from 'react-router-dom';

const TeleportContainer = styled.div`
  background: linear-gradient(to bottom, #1a1a1a 0%, #333333 50%, #4d4d4d 100%);
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
	width: 100vw;
	height: 100vh;
	position: relative;
  overflow: hidden;
`;

const Main = styled.main`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Title = styled.img`
  width: 550px;
  animation: pulse 1.5s ease-in-out infinite;
`;

const PortalImage = styled.img`
  width: 550px;
  animation: pulse 1s ease-in-out infinite;

  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.03);
    }
    100% {
      transform: scale(1);
    }
  }
`;

const PortalLink = styled(Link)`
	
`

const PortalBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 10px;
`

const LeftImage = styled.img`
  width: 500px;
  position: absolute;
  transform: rotate(35deg);
  transition: all .5s ease;
	left: -80px;
	bottom: -98px;
  border-top-left-radius: 80px;
  border-top-right-radius: 80px;

  &:hover {
    transition: all .5s ease;
    width: 520px;
  }
`

const RightImage = styled.img`
  width: 500px;
  position: absolute;
  transform: rotate(-35deg);
  transition: all .5s ease;
  right: -80px;
  bottom: -98px;
  border-top-left-radius: 80px;
  border-top-right-radius: 80px;
  &:hover {
    transition: all .5s ease;
	  width: 520px;
  }
`

const DicorateImageLeft = styled.img`
	position: absolute;
	top: 40px;
	left: -110px;
	width: 400px;
  transition: all .3s ease;
	
	
  &:hover {
    transition: all .3s ease;
	  left: -130px;
  }
`

const DicorateImageRight = styled.img`
  position: absolute;
  top: 40px;
  right: -50px;
	width: 350px;
  transition: all .3s ease;
	
	
	&:hover {
		transition: all .3s ease;
    right: -30px;
	}
`

const Button = styled(Link)`
  background-color: #004A7F;
  -webkit-border-radius: 20px;
  border-radius: 30px;
  border: none;
  width: 60%;
  margin: 0 auto;
  color: #FFFFFF;
  cursor: pointer;
  display: inline-block;
  font-family: inherit;
  font-size: 40px;
  padding: 20px 30px;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 5px;
  text-align: center;
  text-decoration: none;
  -webkit-animation: glowing 1500ms infinite;
  -moz-animation: glowing 1500ms infinite;
  -o-animation: glowing 1500ms infinite;
  animation: glowing 1500ms infinite;

  @keyframes glowing {
    0% {
      background-color: #77c372;
      box-shadow: 0 0 3px #77c372;
    }
    50% {
      background-color: #cbdf7c;
      box-shadow: 0 0 40px #cbdf7c;
    }
    100% {
      background-color: #77c372;
      box-shadow: 0 0 3px #77c372;
    }
`


export {
	TeleportContainer,
	Main,
	Button,
	Title,
	PortalImage,
	PortalLink,
	LeftImage,
	RightImage,
	PortalBlock,
	DicorateImageLeft,
	DicorateImageRight,
};
