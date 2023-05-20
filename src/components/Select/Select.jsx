import {useState, useEffect} from 'react';
import sound from './good.mp3'
import { play } from '../../utils/sounds/soundsBar';
import { Select } from './Select.styled';

const SelectElem = () =>{
  const [favorite, setFavorite] = useState('');

  const handleChange = (event) => {
    setFavorite(event.target.value);
    play(sound)
  };

  return (
    <>
       <div>
        <Select value={favorite} onChange={handleChange}>
        <option value="">Choose option</option>
        <option value="character">Character</option>
        <option value="location">Location</option>
        <option value="episode">Episode</option>
      </Select>
    </div>
    </>
  );
}
export default SelectElem