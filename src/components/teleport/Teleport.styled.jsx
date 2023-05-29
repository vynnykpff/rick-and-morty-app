import styled from '@emotion/styled';
import {Link} from 'react-router-dom';
import {mediaQueries} from "../../utils/media-queries.jsx";

const TeleportContainer = styled.div`
  background: linear-gradient(to bottom, #1a1a1a 0%, #333333 50%, #4d4d4d 100%);
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  position: fixed;
  overflow: hidden;
`

const Main = styled.main`
  display: flex;
  justify-content: space-around;
  align-items: center;
`

const PreloaderMain = styled.main`
  display: flex;
  justify-content: space-around;
  align-items: center;
  filter: blur(8px);
	width: 100vw;
	height: 100vh;
`

const Title = styled.img`
  width: 290px;
  animation: pulse 1.5s ease-in-out infinite;

  @media (min-width: ${mediaQueries.tablet}) {
    width: 300px;
    margin-top: 30px;

  }
  @media (min-width: ${mediaQueries.desktop}) {
    width: 500px;
  }
`;

const PortalImage = styled.img`
  width: 290px;
  animation: pulse 1s ease-in-out infinite;

  @media (min-width: ${mediaQueries.tablet}) {
    width: 400px;
  }
  @media (min-width: ${mediaQueries.desktop}) {
    width: 500px;
  }
	
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
`

const PortalBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 10px;
`

const LeftImage = styled.img`
  display: none;
  position: absolute;
  transform: rotate(35deg);
  transition: all .5s ease;
  width: 300px;
  left: -40px;
  bottom: -55px;

  &:hover {
      width: 300px;
  }

  @media (min-width: ${mediaQueries.tablet}) {
    display: block;
    width: 300px;
    left: -40px;
    bottom: -55px;

    &:hover {
      width: 300px;
    }
  }

  @media (min-width: ${mediaQueries.desktop}) {
	  width: 500px;
    left: -80px;
    bottom: -98px;
    &:hover {
    transition: all .5s ease;
    width: 520px;
  }
  }
`

const RightImage = styled.img`
  display: none;
  position: absolute;
  transform: rotate(-35deg);
  transition: all .5s ease;
  width: 300px;
  right: -40px;
  bottom: -55px;

   &:hover {
    	width: 300px;
    }

  @media (min-width: ${mediaQueries.tablet}) {
    display: block;

  }

  @media (min-width: ${mediaQueries.desktop}) {
    right: -80px;
    bottom: -98px;
    width: 500px;
    &:hover {
    transition: all .5s ease;
    width: 520px;
  }
  }
`

const DecorateImageLeft = styled.img`
  display: none;
  position: absolute;
  transition: all .3s ease;
	width: 300px;
  left: -110px;
  top: 40px;
  &:hover {
    transition: all .3s ease;
    left: -130px;
  }

  @media (min-width: ${mediaQueries.tablet}) {
    display: block;
  }
  @media (min-width: ${mediaQueries.desktop}) {
    width: 400px;
  }


`

const DecorateImageRight = styled.img`
  display: none;
  position: absolute;
  top: 40px;
  width: 250px;
  right: -40px;
  transition: all .3s ease;

  &:hover {
    transition: all .3s ease;
    right: -30px;
  }

  @media (min-width: ${mediaQueries.tablet}) {
    display: block;
  }
  @media (min-width: ${mediaQueries.desktop}) {
    width: 350px;
  }
`

const Button = styled(Link)`
  -webkit-border-radius: 20px;
  border-radius: 30px;
  border: none;
  margin: 0 auto;
  color: #FFFFFF;
  cursor: pointer;
  display: inline-block;
  font-family: inherit;
	font-size: 24px;
  padding: 20px 30px;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 4px;
  text-align: center;
  text-decoration: none;
  -webkit-animation: glowing 1500ms infinite;
  -moz-animation: glowing 1500ms infinite;
  -o-animation: glowing 1500ms infinite;
  animation: glowing 1500ms infinite;
  margin-bottom: 30px;

  @media (min-width: ${mediaQueries.tablet}) {
	  font-size: 30px;
    padding: 15px 30px;

  }
  @media (min-width: ${mediaQueries.desktop}) {
	  font-size: 40px;
    padding: 20px 35px;
  }
	
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
	PreloaderMain,
	Button,
	Title,
	PortalImage,
	LeftImage,
	RightImage,
	PortalBlock,
	DecorateImageLeft,
	DecorateImageRight,
};