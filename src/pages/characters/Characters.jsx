import { useDispatch, useSelector } from 'react-redux';
import { requestCharacters } from '../../store/characters/characters.slice';
import { useState, useEffect } from "react";

import { Quantity, Button, Wrapper, Container } from "./charactersStyle/CharacterDetails.styled";
import CharacterCard from "../../components/characterCard/CharacterCard";
import axios from "axios";
export async function getCharacter(id=1) {
    try{
		const { data }  = await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
		console.log(data);
        return data
    } catch(error){
        console.log(error);
    }
}

const Characters = () => {
	return <div>Characters</div>;
};

export default Characters;
