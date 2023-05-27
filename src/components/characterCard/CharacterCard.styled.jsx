import styled from '@emotion/styled';

const Card = styled.div`
  background: var(--card-color);
  box-shadow: var(--card-shadow);
  border-radius: 38px;
  display: flex;
  align-items: center;
  margin-top: 40px;
  overflow: hidden;
  transition: all .3s ease;
	
  &:hover {
    box-shadow: var(--card-shadow--hover);
    transition: all .3s ease;
  }
`
const CharacterInfo = styled.div`
  color: var(--link-text);
  flex-grow: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
`
const Name = styled.h1`
  color: var(--title-color);
  text-transform: uppercase;
  font-size: 40px;
  margin-bottom: 30px;
  text-align: center;

`
const Wrapper = styled.div`
  display: flex;
  margin-bottom: 20px;
  align-items: center;
`
const TitleInfo = styled.h2`
  font-size: 30px;
  font-weight: 600;
  margin-right: 15px;

`
const Info = styled.p`
  font-size: 30px;
  font-weight: 400;
	color: var(--link-color)
	
`
const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 500px;
  height: 550px;
  align-self: flex-end;

`
const Img = styled.img`
  display: block;
  max-width: 100%;
  max-height: 100%;
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
`
export {Card, CharacterInfo, Name, TitleInfo, Info, ImgWrapper, Img, FavBtn, Wrapper}