import {
	Button, DicorateImageLeft, DicorateImageRight,
	LeftImage,
	Main,
	PortalBlock,
	PortalImage,
	PortalLink,
	RightImage,
	TeleportContainer,
	Title
} from "../../components/teleport/Teleport.styled.jsx";
import portal from '../../assets/images/portal/portal.gif';
// import Preloader from "../../components/preloader/Preloader.jsx";
import rickImage from '../../assets/images/rick.png'
import mortyImage from '../../assets/images/morty.png'
import titleImage from '../../assets/images/title.png';
import rickMortyPortal from '../../assets/images/rick-morty-portal.png';
import mortyInPortal from '../../assets/images/morty-in-portal.png';


const Teleport = () => {
	return (
		<TeleportContainer>
			<Main>
				<LeftImage src={mortyImage} alt="morty-image"/>
				<PortalBlock>
					<Title src={titleImage} alt="title"/>
					<PortalLink to="/characters/1">
						<PortalImage src={portal} alt=""/>
					</PortalLink>
					<Button to="/characters/1">Teleport</Button>
				</PortalBlock>
				<RightImage src={rickImage} alt="rick-image"/>


				<DicorateImageLeft src={mortyInPortal} alt=""/>
				<DicorateImageRight src={rickMortyPortal} alt=""/>
			</Main>
		</TeleportContainer>
	);
};

export default Teleport;