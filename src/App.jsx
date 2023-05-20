import { Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/home/Home';
import Characters from './pages/characters/Characters';
import Episodes from './pages/episodes/Episodes';
import Locations from './pages/locations/Locations';
import Favorites from './pages/favorites/Favorites';
import {
	// characters,
	episodes,
	favorites,
	locations,
	notfound,
} from './store/services/routes';
import NoMatch from './pages/no-match/NoMatch';
function App() {
	return (
		<>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<Home />} />
					<Route path='characters/:id' element={<Characters />} />
					<Route path={locations} element={<Locations />} />
					<Route path={episodes} element={<Episodes />} />
					<Route path={favorites} element={<Favorites />} />
					<Route path={notfound} element={<NoMatch />} />
				</Route>
			</Routes>
		</>
	);
}

export default App;
