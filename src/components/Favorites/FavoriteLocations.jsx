import { List } from "../characterList/CharacterList.styled";
import CardEl from "./Card";
const FavoritePlace = ({ list }) => {
  return (
    <List>
      {list && list.map((item) => <CardEl item={item} key={item.id}/>)}
    </List>
  );
};

export default FavoritePlace