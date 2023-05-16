import { useDispatch, useSelector } from 'react-redux';
import { requestEpisodes } from '../../store/episodes/episodes.slice';

const Episodes = () => {
	const dispatch = useDispatch();
	const { arrayEpisodes, status, error } = useSelector(state => state.episodes);

	return (
		<div>
			<h3>Episodes</h3>
			<ul>
				{status === 'resolved' &&
					arrayEpisodes.results.map(episode => (
						<li key={episode.id}>{episode.name}</li>
					))}
				{status === 'loading' && error === null && <div>Loading...</div>}
				{error === 'rejected' && <div>{error}</div>}
			</ul>
			<button onClick={() => dispatch(requestEpisodes())}>Get episodes</button>
		</div>
	);
};

export default Episodes;
