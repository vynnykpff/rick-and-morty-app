import SelectElem from "../../components/Select/Select";
import { Context } from "../../App";
import { useContext } from "react";

const Favorites = () => {
	const { select } = useContext(Context);
	
	return <>
		<SelectElem />
		{select === 'location' ? <h2>Location</h2> : <h2>Some another</h2>}
	</>;
};

export default Favorites;
