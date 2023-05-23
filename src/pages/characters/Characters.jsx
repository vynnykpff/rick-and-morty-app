import { useParams } from 'react-router';
import { useState, useEffect } from "react";
import { Quantity, Button, Wrapper, Container } from "../commonPagesStyles/commonStyles";
import CharacterCard from "../../components/characterCard/CharacterCard";
import { getItem } from "../../store/services/my-api";
import getRandomNum from '../../utils/randomFubc';

const Characters = () => {
    const [pages, setPages] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);
    const [hero, setHero] = useState(null)
    const {id} = useParams();

    useEffect(() => {
        setCurrentPage(id)
    }, [id])

    useEffect(() => {
        getItem('character', currentPage).then(setHero)
    }, [currentPage])

    const handleBtn = () => {
        setCurrentPage(getRandomNum(826))
        setPages(pages + 1)

    }
    
    return <Container>
        <Wrapper>
            <Quantity>Total: {pages}</Quantity>
            <Button onClick={()=> handleBtn()}>New character</Button>
        </Wrapper>
        {hero ? <CharacterCard item={hero}/> : null}
    </Container>
};

export default Characters;
