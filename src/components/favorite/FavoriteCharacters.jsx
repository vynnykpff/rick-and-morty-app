import { useEffect, useState } from "react";
import { List, Card, Name, ImgWrapper, LinkEl, Btn, NoItems } from "../characterList/CharacterList.styled";

const FavoriteCharacters = ({ list }) => {
    const [saved, setSaved] = useState([])

  useEffect(() => {
    setSaved(list)
  }, [list])

  useEffect(() => {
        if(saved.length){
            window.localStorage.setItem('FavoriteCharacters', JSON.stringify(saved));
        }
    }, [saved]);
  
  const onBtn = (id) => {
    const newList = saved.filter(item => item.id !== id)
    if (newList.length === 0) {
                window.localStorage.removeItem('FavoriteCharacters');
                setSaved([])
            } else {
                setSaved(newList)
             }
  }


  return <>
   {saved.length ? <List>
      {saved.map(({ id, name, image, }) =>
        <Card key={id}>
          <Btn onClick={() => onBtn(id)}>remove</Btn>
          <LinkEl to={`/characters/${id}`}>
            <ImgWrapper>
            <img src={image} style={{ width: '100%' }} alt="hero avatar"/>
            </ImgWrapper>
            <Name>{name}</Name>
          </LinkEl>
        </Card>)}
    </List> : <NoItems>Any favorite characters</NoItems>}
  </>
}

export default FavoriteCharacters