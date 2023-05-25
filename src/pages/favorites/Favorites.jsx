import SelectElem from "../../components/Select/Select";
import { Context } from "../../App";
import { useContext, useEffect, useState } from "react";
import FavoriteCharacters from "../../components/Favorites/FavoriteCharacters";
import FavoritePlace from "../../components/Favorites/FavoriteLocations";

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
		{select ==='locations' ? <FavoritePlace list={locations} /> : null}
		{select ==='episodes' ? <FavoritePlace list={episodes} /> : null}
	</>;
};

export default Favorites;
