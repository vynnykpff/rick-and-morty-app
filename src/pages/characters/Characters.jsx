import { useParams } from 'react-router';
import { useState, useEffect } from "react";
import { Quantity, Button, Wrapper, Container } from "../commonPagesStyles/commonStyles";
import CharacterCard from "../../components/characterCard/CharacterCard";
import { getItem } from "../../store/services/my-api";
import getRandomNum from '../../utils/randomFubc';

const Characters = () => {
    const [pages, setPages] = useState(1);
    const [hero, setHero] = useState(null)
    const {id} = useParams();

    useEffect(() => {
        getItem('character', id).then(setHero)
    }, [id])

    const handleBtn = () => {
        setPages(pages + 1)

    }
    
    return <Container>
        <Wrapper>
            <Quantity>Total: {pages}</Quantity>
            <Button onClick={() => handleBtn()}  to={`/characters/${getRandomNum(826)}`}>New character</Button>
        </Wrapper>
        {hero ? <CharacterCard item={hero}/> : null}
    </Container>
};

export default Characters;
