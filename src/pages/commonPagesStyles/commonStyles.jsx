import styled from '@emotion/styled';
import {Link} from 'react-router-dom';
import { mediaQueries } from '../../utils/media-queries';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-bottom: 50px;

`
const Wrapper = styled.div`
display: flex;
flex-direction: column;
@media (min-width: ${mediaQueries.tablet}) {
	display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  }
  
`

const Quantity = styled.p`
  font-weight: 600;
  color: var(--result-color);
  font-size: 22px;
  margin-bottom: 25px;
  @media (min-width: ${mediaQueries.tablet}) {
	  font-size: 26px;
    margin-bottom: 0;
  }
`
const SectionTitle = styled.h1`
  margin: 50px 0 30px 0;
  font-size: 28px;

  @media (min-width: ${mediaQueries.tablet}) {
	font-size: 36px;
  }
  @media (min-width: ${mediaQueries.desktop}) {
	font-size: 40px;
  }
`
const SectionInfo = styled.p`
  color: var(--text-color);
  font-size: 28px;
  margin-bottom: 20px;

  @media (min-width: ${mediaQueries.tablet}) {
	font-size: 24px;
  }
  @media (min-width: ${mediaQueries.tablet}) {
	font-size: 28px;
  }
`
const ListTitle = styled.h3`
  margin-top: 50px;
  font-size: 26px;

  @media (min-width: ${mediaQueries.tablet}) {
	font-size: 26px;
  }
  @media (min-width: ${mediaQueries.desktop}) {
	font-size: 28px;
  }
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
  font-size: 23px;
  padding: 15px 50px;
  text-align: center;
  margin: 0 auto;
  text-decoration: none;
  -webkit-animation: glowing 1500ms infinite;
  -moz-animation: glowing 1500ms infinite;
  -o-animation: glowing 1500ms infinite;
  animation: glowing 1500ms infinite;

@media (min-width: ${mediaQueries.tablet}) {
  margin: 0;
	font-size: 26px;
  padding: 15px 30px;
  }


@keyframes glowing {
  0% {
    background-color: var(--glowing-color1);
    box-shadow: 0 0 3px var(--glowing-color1);
  }
  50% {
    background-color: var(--glowing-color2);
    box-shadow: 0 0 40px var(--glowing-color2);
  }
  100% {
    background-color: var(--glowing-color1);
    box-shadow: 0 0 3px var(--glowing-color1);
  }
`

const SectionName = styled.span`
  color: var(--link-color);
	font-weight: 700;
	letter-spacing: 1.2px;
  font-size: 28px;

  @media (min-width: ${mediaQueries.tablet}) {
	font-size: 40px;
  }
`

const FavBtn = styled.button`
  background-color: ${props => props.isFavorite ? 'var(--result-color)' : 'transparent'};
  -webkit-border-radius: 20px;
  border: ${props => props.isFavorite ? 'none' : '1px solid var(--favorite-btn-color)'};
  border-radius: 30px;
  color: ${props => props.isFavorite ? '#fff' : 'var(--favorite-btn-color)'};
  cursor: pointer;
  display: inline-block;
  font-family: inherit;
  font-size: 22px;
  padding: 15px 40px;
  text-align: center;
  margin-top: 20px;
  transition: all .3s ease;

  :hover {
    background-color: var(--result-color);
    color: #fff;
    transition: all .3s ease;
  }

  @media (min-width: ${mediaQueries.tablet}) {
	font-size: 26px;
  padding: 15px 30px;
  }

`
export {Quantity, Button, Wrapper, Container, ListTitle, SectionInfo, SectionTitle, SectionName, FavBtn}
