import { useState, useEffect } from "react";
import { getItem } from "../../store/services/my-api";
import CharacterList from "../../components/characterList/CharacterList";
const Locations = () => {
 const [currentPage, setCurrentPage] = useState(2);
const [location, setLocation] = useState(null)
    
    useEffect(() => {
        getItem('location').then(setLocation)
    }, [])

    const handleBtn = () => {
        setCurrentPage(currentPage + 1)
        getItem('location', currentPage).then(setLocation)
    }	

	return (
		<>
		{ location ?
		<div>
			<h3>{location.name}</h3>
			<CharacterList list={location.residents} />
		</div > : null
		}
		</>
	);
};

export default Locations;
