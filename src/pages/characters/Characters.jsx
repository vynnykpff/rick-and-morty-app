import {useParams} from 'react-router';
import {useState, useEffect} from "react";
import {Quantity, Button, Wrapper, Container} from "../commonPagesStyles/commonStyles";
import CharacterCard from "../../components/characterCard/CharacterCard";
import {getItem} from "../../store/services/my-api";
import getRandomNum from '../../utils/randomFubc';
import {useDispatch, useSelector} from "react-redux";
import {getTotalActions} from "../../store/total-actions/totalActions.slice.js";
import {play} from "../../utils/soundsBar.jsx";
import sound from '../../assets/sounds/new-action.mp3';

const Characters = () => {
	const [hero, setHero] = useState(null)
	const {id} = useParams();
	const countOfActions = useSelector(state => state.actions.action);
	const dispatch = useDispatch();

	useEffect(() => {
		getItem('character', id).then(setHero)
	}, [id])

	const handleBtn = () => {
		play(sound)
		dispatch(getTotalActions(countOfActions));
	}

	return <Container>
		<Wrapper>
			<Quantity>Total: {countOfActions}</Quantity>
			<Button onClick={() => handleBtn()} to={`/characters/${getRandomNum(826)}`}>New character</Button>
		</Wrapper>
		{hero ? <CharacterCard item={hero}/> : null}
	</Container>
};

export default Characters;
