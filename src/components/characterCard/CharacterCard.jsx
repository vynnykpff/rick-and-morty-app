import { Wrapper } from "../../pages/characters/charactersStyle/CharacterDetails.styled";
import { Card, CharacterInfo, Name, TitleInfo, Info, ImgWrapper, Img, FavBtn } from "./CharacterCard.styled";

const CharacterCard = ({item}) => {
    const handleBtn = (e) => {
        const btn = e.target
        if (btn.textContent === 'In favorite') {
            btn.textContent = 'Add to favorite'
            return
        }
        btn.textContent = 'In favorite';
        window.localStorage.setItem('FavoriteCharacters', JSON.stringify(item));

    }
    return <Card>
        <CharacterInfo>
            <Name>{item.name}</Name>
            <Wrapper>
                <TitleInfo>Species:</TitleInfo>
                <Info>{item.species}</Info>
            </Wrapper>
            <Wrapper>
                <TitleInfo>Origin:</TitleInfo>
                <Info>{}</Info>
            </Wrapper>
            <Wrapper>
                <TitleInfo>Status:</TitleInfo>
                <Info>{item.status}</Info>
            </Wrapper>
            <FavBtn onClick={(e)=> handleBtn(e)}>Add to favorite</FavBtn>
        </CharacterInfo>
        <ImgWrapper>
            <Img src={item.image} />
        </ImgWrapper>
    </Card>
}
export default CharacterCard