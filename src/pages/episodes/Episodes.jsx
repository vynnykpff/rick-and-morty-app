import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import {getItem} from "../../store/services/my-api";
import CharacterList from "../../components/characterList/CharacterList";
import {
	Quantity,
	Button,
	Container,
	Wrapper,
	ListTitle,
	SectionTitle,
	SectionInfo,
	FavBtn,
	SectionName
} from "../commonPagesStyles/commonStyles";
import handleBtn from "../../utils/funcHandleBtn";
import getRandomNum from "../../utils/randomFubc";
import {useDispatch, useSelector} from "react-redux";
import {getTotalActions} from "../../store/total-actions/totalActions.slice.js";
import {play}  from "../../utils/soundsBar.jsx";
import sound from '../../assets/sounds/new-action.mp3';

const Episodes = () => {
	const [episode, setEpisode] = useState(null)
	const [saved, setSaved] = useState([])
	const {id} = useParams();
	const countOfActions = useSelector(state => state.actions.action);
	const dispatch = useDispatch();

	useEffect(() => {
		const saved = JSON.parse(window.localStorage.getItem('FavoriteEpisodes')) ?? []
		setSaved(saved);
	}, [])

	useEffect(() => {
		getItem('episode', id).then(setEpisode)
	}, [id])

	useEffect(() => {
		if (saved.length) {
			window.localStorage.setItem('FavoriteEpisodes', JSON.stringify(saved));
		}
	}, [saved]);

	const onBtn = () => {
		play(sound)
		dispatch(getTotalActions(countOfActions));
	}

	return (
		<Container>
			<Wrapper>
				<Quantity>Total: {countOfActions}</Quantity>
				<Button onClick={() => onBtn()} to={`/episodes/${getRandomNum(51)}`}>New episode</Button>
			</Wrapper>
			{episode ?
				<div>
					<SectionTitle>Episode: <SectionName>{episode.name}</SectionName></SectionTitle>
					<SectionInfo>Air data: <SectionName>{episode.air_date}</SectionName></SectionInfo>
					<SectionInfo>Seria: <SectionName>{episode.episode}</SectionName></SectionInfo>

					<FavBtn onClick={() => handleBtn(saved, episode, 'FavoriteEpisodes', setSaved)}
						isFavorite={saved.some(el => el.id === episode.id)}>
						{saved.some(el => el.id === episode.id) ? 'In favorite' : 'Add to favorite'}</FavBtn>

					<ListTitle>Characters of {episode.name}</ListTitle>
					<CharacterList list={episode.characters}/>
				</div> : null
			}
		</Container>
	);
};

export default Episodes;
