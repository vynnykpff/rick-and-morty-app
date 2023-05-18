import { useState, useEffect } from "react";
import { getItem } from "../../store/services/my-api";
import CharacterList from "../../components/characterList/CharacterList";
import { Quantity, Button, Container, Wrapper, ListTitle, SectionTitle, SectionInfo } from "../commonPagesStyles/commonStyles";
import { FavBtn } from "../../components/characterCard/CharacterCard.styled";
import handleBtn from "../../utils/funcHandleBtn";

const Episodes = () => {
	const [currentPage, setCurrentPage] = useState(2);
	const [episode, setEpisode] = useState(null)
    const [saved, setSaved] = useState([])

    useEffect(() => {
		getItem('episode').then(setEpisode);
		const saved = JSON.parse(window.localStorage.getItem('FavoriteEpisodes')) ?? []
        setSaved(saved);
	}, [])
	
	 useEffect(() => {
        if(saved.length){
            window.localStorage.setItem('FavoriteEpisodes', JSON.stringify(saved));
        }
	}, [saved]);

    const onBtn = () => {
        setCurrentPage(currentPage + 1)
        getItem('episode', currentPage).then(setEpisode)
	}	
	
	return (
		<Container>
			<Wrapper>
            <Quantity>Total: 51</Quantity>
            <Button onClick={()=> onBtn()}>New episode</Button>
        </Wrapper>
		{ episode ?
			<div>
				<SectionTitle>Episode: {episode.name}</SectionTitle>	
				<SectionInfo>Air data: {episode.air_date}</SectionInfo>		
				<SectionInfo>Seria: {episode.episode}</SectionInfo>	

				<FavBtn onClick={() => handleBtn(saved, episode, 'FavoriteEpisodes', setSaved)}>
						{saved.some(el => el.id === episode.id) ? 'In favorite' : 'Add to favorite'}</FavBtn>
					
				<ListTitle>Characters of {episode.name}</ListTitle> 
				<CharacterList list={episode.characters} />
			</div > : null
		}
		</Container>
	);
};

export default Episodes;
