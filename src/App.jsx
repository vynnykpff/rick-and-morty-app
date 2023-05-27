import React, {useState} from 'react';
import {Route, Routes} from 'react-router-dom';
import Layout from './components/layout/Layout';
import Characters from './pages/characters/Characters';
import Episodes from './pages/episodes/Episodes';
import Locations from './pages/locations/Locations';
import Favorites from './pages/favorites/Favorites';
import {
	characters,
	episodes,
	favorites,
	locations,
	notfound,
} from './store/services/routes';
import NoMatch from './pages/no-match/NoMatch';
import Teleport from "./pages/teleport/Teleport.jsx";

export const Context = React.createContext()

function App() {
	const [select, setSelect] = useState('characters')
	return (
		<>
			<Context.Provider value={{select, setSelect}}>
				<Routes>
					<Route index element={<Teleport/>}/>
					<Route path='/' element={<Layout/>}>
						<Route path={characters} element={<Characters/>}/>
						<Route path={locations} element={<Locations/>}/>
						<Route path={episodes} element={<Episodes/>}/>
						<Route path={favorites} element={<Favorites/>}/>
						<Route path={notfound} element={<NoMatch/>}/>
					</Route>
				</Routes>
			</Context.Provider>
		</>
	);
}

export default App;
