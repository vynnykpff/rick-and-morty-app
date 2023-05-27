import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import {getItem} from "../../store/services/my-api";
import CharacterList from "../../components/characterList/CharacterList";
import { Button, Container, Quantity, Wrapper, ListTitle, SectionInfo, SectionTitle, FavBtn } from "../commonPagesStyles/commonStyles";
import handleBtn from "../../utils/funcHandleBtn";
import getRandomNum from "../../utils/randomFubc";
import {useDispatch, useSelector} from "react-redux";
import {getTotalActions} from "../../store/total-actions/totalActions.slice.js";


const Locations = () => {
	const [location, setLocation] = useState(null)
	const [saved, setSaved] = useState([])
	const {id} = useParams();
	const countOfActions = useSelector(state => state.actions.action);
	const dispatch = useDispatch();

	useEffect(() => {
		const saved = JSON.parse(window.localStorage.getItem('FavoriteLocations')) ?? []
		setSaved(saved);
	}, [])

	useEffect(() => {
		getItem('location', id).then(setLocation)
	}, [id])

	useEffect(() => {
		if (saved.length) {
			window.localStorage.setItem('FavoriteLocations', JSON.stringify(saved));
		}
	}, [saved]);

	const onBtn = () => {
		dispatch(getTotalActions(countOfActions));
	}

	return (
		<Container>
			<Wrapper>
				<Quantity>Total: {countOfActions}</Quantity>
				<Button onClick={() => onBtn()} to={`/locations/${getRandomNum(126)}`}>New location</Button>
        </Wrapper>
		{ location ?
			<div>
				<SectionTitle>Location: {location.name}</SectionTitle>	
				<SectionInfo>Type: {location.type}</SectionInfo>
				<FavBtn onClick={() => handleBtn(saved, location, 'FavoriteLocations', setSaved)}
					isFavorite={saved.some(el => el.id === location.id)}>
					{saved.some(el => el.id === location.id) ? 'In favorite' : 'Add to favorite'}
				</FavBtn>	
				<ListTitle>Residents of {location.name}</ListTitle>
				<CharacterList list={location.residents} />
			</div > : null
		}
		</Container>
	);
};

export default Locations;
