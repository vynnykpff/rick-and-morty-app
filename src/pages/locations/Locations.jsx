import { useState, useEffect } from "react";
import { getItem } from "../../store/services/my-api";
import CharacterList from "../../components/characterList/CharacterList";
import { Button, Container, Quantity, Wrapper, ListTitle, SectionInfo, SectionTitle } from "../commonPagesStyles/commonStyles";
import { FavBtn } from "../../components/characterCard/CharacterCard.styled";
import handleBtn from "../../utils/funcHandleBtn";

const Locations = () => {
 	const [currentPage, setCurrentPage] = useState(2);
	const [location, setLocation] = useState(null)
    const [saved, setSaved] = useState([])

    useEffect(() => {
		getItem('location').then(setLocation)
		const saved = JSON.parse(window.localStorage.getItem('FavoriteLocations')) ?? []
        setSaved(saved);
	}, [])
	
    useEffect(() => {
        if(saved.length){
            window.localStorage.setItem('FavoriteLocations', JSON.stringify(saved));
        }
	}, [saved]);
	
    const onBtn = () => {
        setCurrentPage(currentPage + 1)
        getItem('location', currentPage).then(setLocation)
    }	

	return (
		<Container>
			<Wrapper>
            <Quantity>Total: 126</Quantity>
            <Button onClick={()=> onBtn()}>New location</Button>
        </Wrapper>
		{ location ?
			<div>
				<SectionTitle>Location: {location.name}</SectionTitle>	
				<SectionInfo>Type: {location.type}</SectionInfo>

					<FavBtn onClick={() => handleBtn(saved, location, 'FavoriteLocations', setSaved)}>
						{saved.some(el => el.id === location.id) ? 'In favorite' : 'Add to favorite'}</FavBtn>
					
				<ListTitle>Residents of {location.name}</ListTitle>
				<CharacterList list={location.residents} />
			</div > : null
		}
		</Container>
	);
};

export default Locations;
