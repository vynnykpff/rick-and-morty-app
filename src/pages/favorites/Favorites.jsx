import SelectElem from "../../components/select/Select";
import { Context } from "../../App";
import { useContext, useEffect, useState } from "react";
import FavoriteCharacters from "../../components/favorite/FavoriteCharacters";
import FavoritePlace from "../../components/favorite/FavoritePlace";


const Favorites = () => {
	const [option, setOption] = useState([])
	const [locations, setLocations] = useState([])
	const [episodes, setEpisodes] = useState([])
	const { select } = useContext(Context);

	useEffect(()=>{
        const saved = JSON.parse(window.localStorage.getItem('FavoriteCharacters')) ?? []
        setOption(saved);
	}, [])
	
	useEffect(() => {
		if (select === 'characters') {
			const saved = JSON.parse(window.localStorage.getItem('FavoriteCharacters')) ?? []
			setOption(saved);
		}
		if (select === 'locations') {
			const saved = JSON.parse(window.localStorage.getItem('FavoriteLocations')) ?? []
			setLocations(saved);
		}
		if (select === 'episodes') {
			const saved = JSON.parse(window.localStorage.getItem('FavoriteEpisodes')) ?? []
        	setEpisodes(saved);
		}
	}, [select])
	
	return <>
		<SelectElem />
		{select ==='characters' ? <FavoriteCharacters list={option} /> : null}
		{select === 'locations' ? <FavoritePlace list={locations} page={'Locations'} /> : null}
		{select === 'episodes' ? <FavoritePlace list={episodes} page={'Episodes'} /> : null}
	</>;
};

export default Favorites;
