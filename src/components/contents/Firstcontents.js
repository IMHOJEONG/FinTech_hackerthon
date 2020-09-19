import React from 'react';
import CardContainer from './cardcontainer/CardContainer';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import './Firstcontents.css'
const AnotherLink = styled.div`
    text-align : center;
    
`;

function Firstcontents() {

    const count = 0;
    return (
            <>
            <CardContainer />
            <Link to="/list_all" className="list_all">
                <AnotherLink >
                        {`${count}`}건의 투자상품 더 보기 
                </AnotherLink>
            </Link>
            </>
    );
}

export default Firstcontents;