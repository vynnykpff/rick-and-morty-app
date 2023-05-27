import {useState, useEffect, useContext} from 'react';
import sound from './good.mp3'
import { play } from '../../utils/sounds/soundsBar';
import { Select, Option } from './Select.styled';
import { Context } from '../../App';

const SelectElem = () =>{
  const { select, setSelect } = useContext(Context)

  const handleChange = (event) => {
    setSelect(event.target.value);
    play(sound)
  };

  return (
    <>
        <Select value={select} onChange={handleChange}>
        <Option value="characters">Characters</Option>
        <Option value="locations">Locations</Option>
        <Option value="episodes">Episodes</Option>
      </Select>
    </>
  );
}
export default SelectElem