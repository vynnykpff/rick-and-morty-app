import { useState, useEffect } from "react";
import { Wrapper } from "../../pages/characters/charactersStyle/CharacterDetails.styled";
import { Card, CharacterInfo, Name, TitleInfo, Info, ImgWrapper, Img, FavBtn } from "./CharacterCard.styled";
import handleBtn from "../../utils/funcHandleBtn";

const CharacterCard = ({ item }) => {
    const [saved, setSaved] = useState([])
    const {name, species, status, image, origin} = item
    
    
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
            <FavBtn onClick={() => handleBtn(saved, item, 'FavoriteCharacters', setSaved)}>
                {saved.some(el => el.id === item.id) ? 'In favorite' : 'Add to favorite'}</FavBtn>
        </CharacterInfo>
        <ImgWrapper>
            <Img src={image} />
        </ImgWrapper>
    </Card>
}
export default CharacterCard