import { useDispatch, useSelector } from 'react-redux';
import { requestLocations } from '../../store/locations/locations.slice';

const Locations = () => {
	const dispatch = useDispatch();
	const { arrayLocations, status, error } = useSelector(
		state => state.locations
	);

	return (
		<div>
			<h3>Locations</h3>
			<ul>
				{status === 'resolved' &&
					arrayLocations.results.map(location => (
						<li key={location.id}>{location.name}</li>
					))}
				{status === 'loading' && error === null && <div>Loading...</div>}
				{error === 'rejected' && <div>{error}</div>}
			</ul>
			<button onClick={() => dispatch(requestLocations())}>
				Get locations
			</button>
		</div>
	);
};

export default Locations;
