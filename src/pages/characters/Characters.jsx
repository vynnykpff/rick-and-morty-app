import { useState, useEffect } from "react";
import { Quantity, Button, Wrapper, Container } from "./charactersStyle/CharacterDetails.styled";
import CharacterCard from "../../components/characterCard/CharacterCard";
import { getItem } from "../../store/services/my-api";

const Characters = () => {
    const [currentPage, setCurrentPage] = useState(2);
    const [hero, setHero] = useState(null)
    
    useEffect(() => {
        getItem('character').then(setHero)
    }, [])

    const handleBtn = () => {
        setCurrentPage(currentPage + 1)
        getItem('character', currentPage).then(setHero)
    }

    return <Container>
        <Wrapper>
            <Quantity>Total: 826</Quantity>
            <Button onClick={()=> handleBtn()}>New character</Button>
        </Wrapper>
        {hero ? <CharacterCard item={hero}/> : null}
    </Container>
    

};

export default Characters;
