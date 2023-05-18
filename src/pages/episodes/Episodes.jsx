import { useState, useEffect } from "react";
import { getItem } from "../../store/services/my-api";
import CharacterList from "../../components/characterList/CharacterList";

const Episodes = () => {
	const [currentPage, setCurrentPage] = useState(2);
	const [episode, setEpisode] = useState(null)
    
    useEffect(() => {
        getItem('episode').then(setEpisode)
    }, [])

    const handleBtn = () => {
        setCurrentPage(currentPage + 1)
        getItem('episode', currentPage).then(setEpisode)
    }	
	return (
		<div>
			<h3>Episodes</h3>
			<CharacterList />
		</div>
	);
};

export default Episodes;
