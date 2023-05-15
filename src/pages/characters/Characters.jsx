import { Quantity, Button, Wrapper, Container } from "./charactersStyle/CharacterDetails.styled";
import CharacterCard from "../../components/characterCard/CharacterCard";
import { useState, useEffect } from "react";
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
	const [character, setCharacter] = useState({})
	const [currentPage, setCurrentPage] = useState(2);

	 useEffect(()=>{
        getCharacter().then(setCharacter)
    }, [])
	
	const onBtn = () => {
		setCurrentPage(currentPage + 1)
		getCharacter(currentPage).then(setCharacter)
	}
	return <Container>
		<Wrapper>
			<Quantity>Characters: 826</Quantity>
			<Button onClick={()=> onBtn()}>New Character</Button>
		</Wrapper>
		<CharacterCard item={character} id={character.id} />
	</Container>
};

export default Characters;
