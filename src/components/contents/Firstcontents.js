import React from 'react';
import CardContainer from './cardcontainer/CardContainer';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import './Firstcontents.css';
// import axios from 'axios';
const AnotherLink = styled.div`
    text-align : center;
`;

function Firstcontents() {

//     async function findAllData(){

//         const data = await axios.get("/products")
//         .then((data) =>{ return data.data; });

//         return data.length;
//     }

//     const count = 0;
    return (
            <>
            <CardContainer />
            <Link to="/list_all" className="list_all">
                <AnotherLink >
                        {3}건의 투자상품 더 보기 
                </AnotherLink>
            </Link>
            </>
    );
}

export default Firstcontents;