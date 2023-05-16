import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { requestCharacters } from '../../store/characters/characters.slice';

const Characters = () => {
	const dispatch = useDispatch();
	const { arrayCharacters, status, error } = useSelector(
		state => state.characters
	);

	// useEffect(() => {
	// 	dispatch(requestCharacters());
	// }, [dispatch]);

	return (
		<div>
			<h3>Characters</h3>
			<ul>
				{status === 'resolved' &&
					arrayCharacters.results.map(character => (
						<li key={character.id}>{character.name}</li>
					))}
				{status === 'loading' && error === null && <div>Loading...</div>}
				{error === 'rejected' && <div>{error}</div>}
			</ul>

			<button onClick={() => dispatch(requestCharacters())}>
				Get Characters
			</button>
		</div>
	);
};

export default Characters;
