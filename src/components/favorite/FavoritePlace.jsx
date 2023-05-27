import { useEffect, useState } from "react";
import { List, NoItems } from "../characterList/CharacterList.styled";
import CardEl from "./Card";
const FavoritePlace = ({ list, page }) => {
      const [saved, setSaved] = useState([])

  useEffect(() => {
    setSaved(list)
  }, [list])

  useEffect(() => {
        if(saved.length){
            window.localStorage.setItem(`Favorite${page}`, JSON.stringify(saved));
        }
    }, [saved]);
  
  const handleBtn = (id) => {
    const newList = saved.filter(item => item.id !== id)
    if (newList.length === 0) {
                window.localStorage.removeItem(`Favorite${page}`);
                setSaved([])
            } else {
                setSaved(newList)
             }
  }

  return <>
    {saved.length ? <List>
      {saved.map((item) => <CardEl item={item} onBtn={handleBtn} key={item.id}/>)}
    </List> : <NoItems>Any favorite {page}</NoItems>} 
  </>
};

export default FavoritePlace