import React from 'react';
import styled from 'styled-components';
import Cards from './Cards';
import './CardContainer.css'

const CardContainerDiv = styled.div`
    display: flex; 
    justify-content: space-around;
`;

function CardContainer(){

    return (
        <CardContainerDiv className="cardcontainer">
            {[1,2,3,4,5].map((e,i)=> { 
                return <Cards key={i} value={e}/>
            })}
        </CardContainerDiv>  
    );
}

export default CardContainer;