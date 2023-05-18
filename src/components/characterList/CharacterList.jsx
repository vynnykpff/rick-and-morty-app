import { useState, useEffect } from "react"
import { getList } from "../../store/services/my-api";

const CharacterList = ({ list }) => {
  const [li, setLi] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const newList = list.slice(0, 8);
      const promises = newList.map(item => getList(item));
      const results = await Promise.all(promises);
      setLi(results);
    };

    fetchData();
  }, [list]);

  return (
    <>
      <h1>Residents</h1>
      {li && li.map((l) => <p key={l.id}>{l.name}</p>)}
    </>
  );
};

export default CharacterList