import { useState, useEffect } from "react"
import { getList } from "../../store/services/my-api";
import { List, Card, Name, ImgWrapper } from "./CharacterList.styled";
const CharacterList = ({ list }) => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const newList = list.slice(0, 8);
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
          <ImgWrapper>
            <img src={image} />
          </ImgWrapper>
          <Name>{name}</Name>
        </Card>)}
    </List>
  );
};

export default CharacterList