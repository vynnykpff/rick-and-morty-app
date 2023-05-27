import { useEffect, useState } from "react";
import {Card, Name, ImgWrapper, LinkEl, Btn, Image} from "../characterList/CharacterList.styled";
import { getList } from "../../store/services/my-api";

const CardEl = ({ item, onBtn }) => {
  const [image, setImage] = useState('')
  const [page, setPage] = useState(null)
  
  useEffect(() => {
      if (item.residents) {
      getList(item.residents[0]).then(hero => setImage(hero.image)) 
      setPage('locations')
    } 
    if (item.characters) {
      getList(item.characters[3]).then(hero => setImage(hero.image))
      setPage('episodes')
    }
 }, [])
    

  return (
    <Card>
      <Btn onClick={() => onBtn(item.id)}/>
      <LinkEl to={`/${page}/${item.id}`}>
        <ImgWrapper>
        <Image src={image || 'https://rickandmortyapi.com/api/character/avatar/19.jpeg'} alt="hero avatar"/>
        </ImgWrapper>
        <Name>{item.name}</Name>
      </LinkEl>
    </Card>
  );
}
export default CardEl