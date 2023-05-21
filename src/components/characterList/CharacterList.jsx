import { useState, useEffect } from "react"
import { getList } from "../../store/services/my-api";
import { List, Card, Name, ImgWrapper, LinkEl } from "./CharacterList.styled";
const CharacterList = ({ list }) => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const newList = list.slice(0, 12);
      const promises = newList.map(item => getList(item));
      const results = await Promise.all(promises);
      setCharacters(results);
    };

    fetchData();
  }, [list]);

  return (
    <List>
      {characters && characters.map(({ id, name, status, image, }) =>
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

export default CharacterList