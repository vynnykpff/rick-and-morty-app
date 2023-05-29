import {Link} from 'react-router-dom';
import {
	Button,
	DecorateImageLeft,
	DecorateImageRight,
	LeftImage,
	Main,
	PortalBlock,
	PortalImage,
	PreloaderMain,
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
				<div>
					<Preloader/>
					<PreloaderMain>
						<LeftImage src={mortyImage} alt="morty-image"/>
						<PortalBlock>
							<Title src={titleImage} alt="title"/>
							<Link onClick={handleClick}>
								<PortalImage src={portal} alt="portal"/>
							</Link>
							<Button onClick={handleClick}>
								Teleport
							</Button>
						</PortalBlock>
						<RightImage src={rickImage} alt="rick-image"/>
						<DecorateImageLeft src={mortyInPortal} alt="left-dicorate-image"/>
						<DecorateImageRight src={rickMortyPortal} alt="right-dicorate-image"/>
					</PreloaderMain>
				</div>
				:
				<Main>
					<LeftImage src={mortyImage} alt="morty-image"/>
					<PortalBlock>
						<Title src={titleImage} alt="title"/>
						<Link onClick={handleClick}>
							<PortalImage src={portal} alt="portal"/>
						</Link>
						<Button onClick={handleClick}>
							Teleport
						</Button>
					</PortalBlock>
					<RightImage src={rickImage} alt="rick-image"/>
					<DecorateImageLeft src={mortyInPortal} alt="left-dicorate-image"/>
					<DecorateImageRight src={rickMortyPortal} alt="right-dicorate-image"/>
				</Main>
			}
		</TeleportContainer>
	)
		;
};

export default Teleport;
