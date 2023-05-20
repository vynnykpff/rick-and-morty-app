import { useParams } from 'react-router';
import { useState, useEffect } from "react";
import { Quantity, Button, Wrapper, Container } from "../commonPagesStyles/commonStyles";
import CharacterCard from "../../components/characterCard/CharacterCard";
import { getItem } from "../../store/services/my-api";

const Characters = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [hero, setHero] = useState(null)
    const {id} = useParams();

    useEffect(() => {
        setCurrentPage(+id)
    }, [id])

    useEffect(() => {
        getItem('character', currentPage).then(setHero)
    }, [currentPage])

    const handleBtn = () => {
        setCurrentPage(currentPage + 1)
    }
    console.log(currentPage);
    
    return <Container>
        <Wrapper>
            <Quantity>Total: 826</Quantity>
            <Button onClick={()=> handleBtn()}>New character</Button>
        </Wrapper>
        {hero ? <CharacterCard item={hero}/> : null}
    </Container>
};

export default Characters;
