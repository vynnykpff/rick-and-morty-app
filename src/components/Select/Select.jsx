import {useState, useEffect, useContext} from 'react';
import sound from './good.mp3'
import { play } from '../../utils/sounds/soundsBar';
import { Select } from './Select.styled';
import { Context } from '../../App';

const SelectElem = () =>{
  const { select, setSelect } = useContext(Context)

  const handleChange = (event) => {
    setSelect(event.target.value);
    play(sound)
  };

  return (
    <>
       <div>
        <Select value={select} onChange={handleChange}>
        <option value="character">Character</option>
        <option value="location">Location</option>
        <option value="episode">Episode</option>
      </Select>
    </div>
    </>
  );
}
export default SelectElem