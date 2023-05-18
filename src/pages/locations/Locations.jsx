import { useState, useEffect } from "react";
import { getItem } from "../../store/services/my-api";
import CharacterList from "../../components/characterList/CharacterList";
import { Button, Container, Quantity, Wrapper } from "../characters/charactersStyle/CharacterDetails.styled";
const Locations = () => {
 const [currentPage, setCurrentPage] = useState(2);
const [location, setLocation] = useState(null)
    
    useEffect(() => {
        getItem('location').then(setLocation)
    }, [])

    const handleBtn = () => {
        setCurrentPage(currentPage + 1)
        getItem('location', currentPage).then(setLocation)
    }	

	return (
		<Container>
			<Wrapper>
            <Quantity>Total: 826</Quantity>
            <Button onClick={()=> handleBtn()}>New location</Button>
        </Wrapper>
		{ location ?
		<div>
			<h2>Residents of {location.name}</h2>
			<CharacterList list={location.residents} />
		</div > : null
		}
		</Container>
	);
};

export default Locations;
