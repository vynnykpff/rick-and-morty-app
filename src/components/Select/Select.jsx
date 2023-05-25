import {useState, useEffect, useContext} from 'react';
import sound from './good.mp3'
import { play } from '../../utils/sounds/soundsBar';
import { Select } from './Select.styled';
import { Context } from '../../App';

const SelectElem = () =>{
  const { select, setSelect } = useContext(Context)

  const handleChange = (event) => {
    setSelect(event.target.value);
    play(sound, 0.3)
  };

  return (
    <>
       <div>
        <Select value={select} onChange={handleChange}>
        <option value="characters">Characters</option>
        <option value="locations">Locations</option>
        <option value="episodes">Episodes</option>
      </Select>
    </div>
    </>
  );
}
export default SelectElem