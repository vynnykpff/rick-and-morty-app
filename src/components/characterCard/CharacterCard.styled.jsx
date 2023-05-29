import styled from '@emotion/styled';
import {mediaQueries} from "../../utils/media-queries.jsx";

const Card = styled.div`
  background: var(--card-color);
  box-shadow: var(--card-shadow);
  border-radius: 38px;
  margin-top: 40px;
  overflow: hidden;
  transition: all .3s ease;

  &:hover {
    box-shadow: var(--card-shadow--hover);
    transition: all .3s ease;
  }

  @media (min-width: ${mediaQueries.tablet}) {
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    margin: 40px auto;
    width: 500px;

  }

  @media (min-width: ${mediaQueries.desktop}) {
    display: flex;
    flex-direction: row;
    width: 100%;
  }
`
const CharacterInfo = styled.div`
  color: var(--link-text);
  flex-grow: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;

  @media (max-width: ${mediaQueries.tablet}) {
    padding: 20px;
  }
`
const Name = styled.h1`
  color: var(--title-color);
  text-transform: uppercase;
  font-size: 40px;
  margin-bottom: 30px;
  text-align: center;

  @media (max-width: ${mediaQueries.maxTablet}) {
    font-size: 30px;
  }

  @media (max-width: ${mediaQueries.tablet}) {
    font-size: 25px;
	  margin-bottom: 15px;
  }


`
const Wrapper = styled.div`
  display: flex;
  margin-bottom: 20px;
  align-items: center;
	
  @media (max-width: ${mediaQueries.tablet}) {
    margin-bottom: 10px;
  }
`
const TitleInfo = styled.h2`
  font-size: 30px;
  font-weight: 600;
  margin-right: 15px;

  @media (max-width: ${mediaQueries.maxTablet}) {
    font-size: 25px;
  }

  @media (max-width: ${mediaQueries.tablet}) {
    font-size: 20px;
	  margin-right: 10px;
  }

`
const Info = styled.p`
  font-size: 30px;
  font-weight: 400;
  color: var(--link-color);

  @media (max-width: ${mediaQueries.maxTablet}) {
    font-size: 25px;
  }

  @media (max-width: ${mediaQueries.tablet}) {
    font-size: 20px;
  }

`
const ImgWrapper = styled.div`
  height: 300px;

  @media (min-width: ${mediaQueries.tablet}) {
    width: 100%;
    align-self: center;
    height: 500px;
  }

  @media (min-width: ${mediaQueries.desktop}) {
  display: flex;
  justify-content: center;
  width: 500px;
  height: 550px;
  align-self: flex-end;
  }

`
const Img = styled.img`
  display: block;
  width: 100%;
  height: 100%;
`
const FavBtn = styled.button`
  background-color: ${props => props.fav ? 'var(--result-color)' : 'transparent'};
  -webkit-border-radius: 20px;
  border: ${props => props.fav ? 'none' : '1px solid var(--favorite-btn-color)'};
  border-radius: 30px;
  color: ${props => props.fav ? '#fff' : 'var(--favorite-btn-color)'};
  cursor: pointer;
  display: inline-block;
  font-family: inherit;
  font-size: 26px;
  padding: 15px 30px;
  text-align: center;
  margin-top: 20px;
  transition: all .3s ease;

  :hover {
    background-color: var(--result-color);
    transition: all .3s ease;
    color: #fff
  }

  @media (max-width: ${mediaQueries.tablet}) {
	  font-size: 22px;
	  padding: 12px 25px;
	  margin-bottom: 10px;
  }
`
export {Card, CharacterInfo, Name, TitleInfo, Info, ImgWrapper, Img, FavBtn, Wrapper}