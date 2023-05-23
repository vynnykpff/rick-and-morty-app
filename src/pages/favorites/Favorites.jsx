import SelectElem from "../../components/Select/Select";
import { Context } from "../../App";
import { useContext, useEffect, useState } from "react";
import CharacterList from "../../components/characterList/CharacterList";

const Favorites = () => {
	const[option, setOption] = useState([])
	const { select } = useContext(Context);
	useEffect(()=>{
        const saved = JSON.parse(window.localStorage.getItem('FavoriteCharacters')) ?? []
        setOption(saved);
	}, [])
	
	useEffect(() => {
		if (select === 'characters') {
			const saved = JSON.parse(window.localStorage.getItem('FavoriteCharacters')) ?? []
			setOption(saved);
			return
		}
		if (select === 'locations') {
			const saved = JSON.parse(window.localStorage.getItem('FavoriteLocations')) ?? []
			setOption(saved);
			return
		}
		if (select === 'episodes') {
			const saved = JSON.parse(window.localStorage.getItem('FavoriteEpisodes')) ?? []
        setOption(saved);
		}
	}, [select])
	
	console.log(option);
	return <>
		<SelectElem />
		{select === 'locations' ? <h2>Location</h2> : <h2>Some another</h2>}
		{/* <CharacterList list={option}/> */}
	</>;
};

export default Favorites;
