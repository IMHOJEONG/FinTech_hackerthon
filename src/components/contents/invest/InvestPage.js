import React from 'react';
import styled from 'styled-components';
import Cards from '../cardcontainer/Cards';


const CardContainerDiv = styled.div`
    display: flex; 
    justify-content: space-around;
`;

function InvestPage() {
    
    return (
        <CardContainerDiv className="cardcontainer">
            {[1,2,3,4,5,6,7].map((e,i)=> { 
                return <Cards key={i} value={e}/>
            })}
        </CardContainerDiv>  
    );
}

export default InvestPage;