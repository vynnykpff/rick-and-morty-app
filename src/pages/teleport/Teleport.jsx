import {
	Button,
	DicorateImageLeft,
	DicorateImageRight,
	LeftImage,
	Main,
	PortalBlock,
	PortalImage,
	PortalLink, PreloaderMain, PreloaderWrapper,
	RightImage,
	TeleportContainer,
	Title
} from "../../components/teleport/Teleport.styled.jsx";
import portal from '../../assets/images/portal/portal.gif';
import rickImage from '../../assets/images/rick.png'
import mortyImage from '../../assets/images/morty.png'
import titleImage from '../../assets/images/title.png';
import rickMortyPortal from '../../assets/images/rick-morty-portal.png';
import mortyInPortal from '../../assets/images/morty-in-portal.png';
import Preloader from "../../components/preloader/Preloader.jsx";
import {useState} from "react";
import {useNavigate} from 'react-router-dom';
import {play} from "../../utils/soundsBar.jsx";
import sound from '../../assets/sounds/portal.mp3'

const Teleport = () => {
	const navigate = useNavigate();
	const [isLoading, setIsLoading] = useState(false);

	const handleClick = () => {
		setIsLoading(true);
		play(sound);
		setTimeout(() => {
			setIsLoading(false);
			navigate('/characters/1');
		}, 1500);
	};

	return (
		<TeleportContainer>
			{isLoading ?
				<PreloaderWrapper>
					<Preloader/>
					<PreloaderMain>
						<LeftImage src={mortyImage} alt="morty-image"/>
						<PortalBlock>
							<Title src={titleImage} alt="title"/>
							<PortalLink to="/characters/1">
								<PortalImage src={portal} alt=""/>
							</PortalLink>
							<Button onClick={handleClick}>
								Teleport
							</Button>
						</PortalBlock>
						<RightImage src={rickImage} alt="rick-image"/>
						<DicorateImageLeft src={mortyInPortal} alt=""/>
						<DicorateImageRight src={rickMortyPortal} alt=""/>
					</PreloaderMain>
				</PreloaderWrapper>
				:
				<Main>
					<LeftImage src={mortyImage} alt="morty-image"/>
					<PortalBlock>
						<Title src={titleImage} alt="title"/>
						<PortalLink to="/characters/1">
							<PortalImage src={portal} alt=""/>
						</PortalLink>
						<Button onClick={handleClick}>
							Teleport
						</Button>
					</PortalBlock>
					<RightImage src={rickImage} alt="rick-image"/>
					<DicorateImageLeft src={mortyInPortal} alt=""/>
					<DicorateImageRight src={rickMortyPortal} alt=""/>
				</Main>
			}
		</TeleportContainer>
	)
		;
};

export default Teleport;