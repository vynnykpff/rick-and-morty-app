import { useState, useEffect } from "react";
import { Card, CharacterInfo, Name, TitleInfo, Info, ImgWrapper, Img, FavBtn, Wrapper } from "./CharacterCard.styled";
import handleBtn from "../../utils/funcHandleBtn";

const CharacterCard = ({ item }) => {
    const [saved, setSaved] = useState([])
    const {name, species, status, image, origin, gender} = item
    
    
    useEffect(()=>{
        const saved = JSON.parse(window.localStorage.getItem('FavoriteCharacters')) ?? []
        setSaved(saved);
    }, [])
    
    useEffect(() => {
        if(saved.length){
            window.localStorage.setItem('FavoriteCharacters', JSON.stringify(saved));
        }
    }, [saved]);
    
    return <Card>
        <CharacterInfo>
            <Name>{name}</Name>
            <Wrapper>
                <TitleInfo>Species:</TitleInfo>
                <Info>{species}</Info>
            </Wrapper>
            <Wrapper>
                <TitleInfo>Origin:</TitleInfo>
                <Info>{origin.name}</Info>
            </Wrapper>
            <Wrapper>
                <TitleInfo>Status:</TitleInfo>
                <Info>{status}</Info>
            </Wrapper>
            <Wrapper>
                <TitleInfo>Gender:</TitleInfo>
                <Info>{gender}</Info>
            </Wrapper>
            {saved.some(el => el.id === item.id)
                ? <FavBtn onClick={() => handleBtn(saved, item, 'FavoriteCharacters', setSaved)} fav={true}>In favorite</FavBtn>
                : <FavBtn onClick={() => handleBtn(saved, item, 'FavoriteCharacters', setSaved)} fav={false}>Add to favorite</FavBtn> 
                }
        </CharacterInfo>
        <ImgWrapper>
            <Img src={image} />
        </ImgWrapper>
    </Card>
}
export default CharacterCard