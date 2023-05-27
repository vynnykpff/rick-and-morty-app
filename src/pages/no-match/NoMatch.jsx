import notFoundImage from '../../assets/images/404.png'
import {Image, Container} from "../../components/no-match/NoMatch.styled.jsx";

const NoMatch = () => {
	return (
		<Container>
			<Image src={notFoundImage}/>
		</Container>
	)

};

export default NoMatch;
