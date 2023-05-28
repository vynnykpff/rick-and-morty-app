import {useEffect, useState} from "react";
import {List, Card, Name, ImgWrapper, LinkEl, Btn, NoItems, Image} from "../characterList/CharacterList.styled";
import {play} from "../../utils/soundsBar.jsx";
import sound from '../../assets/sounds/delete-item.mp3';

const FavoriteCharacters = ({list}) => {
	const [saved, setSaved] = useState([])

	useEffect(() => {
		setSaved(list)
	}, [list])

	useEffect(() => {
		if (saved.length) {
			window.localStorage.setItem('FavoriteCharacters', JSON.stringify(saved));
		}
	}, [saved]);

	const onBtn = (id) => {
		play(sound)
		const newList = saved.filter(item => item.id !== id)
		if (newList.length === 0) {
			window.localStorage.removeItem('FavoriteCharacters');
			setSaved([])
		} else {
			setSaved(newList)
		}
	}


	return <>
		{saved.length ? <List>
			{saved.map(({id, name, image,}) =>
				<Card key={id}>
					<Btn onClick={() => onBtn(id)}>remove</Btn>
					<LinkEl to={`/characters/${id}`}>
						<ImgWrapper>
							<Image src={image} alt="hero avatar"/>
						</ImgWrapper>
						<Name>{name}</Name>
					</LinkEl>
				</Card>)}
		</List> : <NoItems>Any favorite characters</NoItems>}
	</>
}

export default FavoriteCharacters