import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/layout/Layout';
import Home from './pages/home/Home';
import Characters from './pages/characters/Characters';
import Episodes from './pages/episodes/Episodes';
import Locations from './pages/locations/Locations';
import Favorites from './pages/favorites/Favorites';
function App() {
	
	return (
		<>
			<Routes>
				<Route path='/' element={<Layout />}>
				<Route index element={<Home />} />
				<Route path='characters' element={<Characters />}/>
				<Route path='locations' element={<Locations />}/>
				<Route path='episodes' element={<Episodes />}/>
				<Route path='favorites' element={<Favorites />}/>
				<Route path="*" element={<Home />} />
				</Route>
			</Routes>
		</>
	);
}

export default App;
