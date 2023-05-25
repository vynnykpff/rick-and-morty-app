import { List, Card, Name, ImgWrapper, LinkEl } from "../characterList/CharacterList.styled";

const FavoriteCharacters = ({ list }) => {
  return (
    <List>
      {list && list.map(({ id, name, image, }) =>
        <Card key={id}>
          <LinkEl to={`/characters/${id}`}>
            <ImgWrapper>
            <img src={image} style={{ width: '100%' }} alt="hero avatar"/>
            </ImgWrapper>
            <Name>{name}</Name>
          </LinkEl>
        </Card>)}
    </List>
  );
};

export default FavoriteCharacters