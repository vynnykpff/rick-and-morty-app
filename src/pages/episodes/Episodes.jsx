import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getItem } from "../../store/services/my-api";
import CharacterList from "../../components/characterList/CharacterList";
import { Quantity, Button, Container, Wrapper, ListTitle, SectionTitle, SectionInfo, FavBtn } from "../commonPagesStyles/commonStyles";
import handleBtn from "../../utils/funcHandleBtn";
import getRandomNum from "../../utils/randomFubc";

const Episodes = () => {
 	const [pages, setPages] = useState(1);
	const [episode, setEpisode] = useState(null)
    const [saved, setSaved] = useState([])
	const { id } = useParams();
	
    useEffect(() => {
		const saved = JSON.parse(window.localStorage.getItem('FavoriteEpisodes')) ?? []
        setSaved(saved);
	}, [])

	 useEffect(() => {
        getItem('episode', id).then(setEpisode)
    }, [id])
	
	 useEffect(() => {
        if(saved.length){
            window.localStorage.setItem('FavoriteEpisodes', JSON.stringify(saved));
        }
	}, [saved]);

	const onBtn = () => {
		setPages(pages + 1)
	}	
	
	return (
		<Container>
			<Wrapper>
				<Quantity>Total: {pages}</Quantity>
            <Button onClick={()=> onBtn()} to={`/episodes/${getRandomNum(51)}`}>New episode</Button>
        </Wrapper>
		{ episode ?
			<div>
				<SectionTitle>Episode: {episode.name}</SectionTitle>	
				<SectionInfo>Air data: {episode.air_date}</SectionInfo>		
				<SectionInfo>Seria: {episode.episode}</SectionInfo>	

					<FavBtn onClick={() => handleBtn(saved, episode, 'FavoriteEpisodes', setSaved)}
						isFavorite={saved.some(el => el.id === episode.id)}>
						{saved.some(el => el.id === episode.id) ? 'In favorite' : 'Add to favorite'}</FavBtn>
					
				<ListTitle>Characters of {episode.name}</ListTitle> 
				<CharacterList list={episode.characters} />
			</div > : null
		}
		</Container>
	);
};

export default Episodes;
