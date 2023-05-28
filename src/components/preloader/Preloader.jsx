import {Loader, PreloaderContainer, Spinner} from "./Preloader.styled.jsx";


const Preloader = () => {
	return (
		<PreloaderContainer>
			<Spinner className="spinner">
				<Loader className="l1"></Loader>
				<Loader className="l2"></Loader>
			</Spinner>
		</PreloaderContainer>
	);
};

export default Preloader;
