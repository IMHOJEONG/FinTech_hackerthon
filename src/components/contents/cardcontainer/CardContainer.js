import React from 'react';
import styled from 'styled-components';
import Cards from './Cards';
import './CardContainer.css';
import img1 from './images/1.jpg';
import img2 from './images/2.jpg';
import img3 from './images/3.jpeg';
import axios from 'axios';

const CardContainerDiv = styled.div`
    display: flex; 
    justify-content: space-around;
`;

function CardContainer(){

    const data = [];

    async function getlittleData(){
        
        data = await axios.get("/products")
        .then((data) => {
            return data.data;
        });
        console.log(data);
        return data;
    }

    getlittleData();

    return (
        <CardContainerDiv className="cardcontainer">
            {[img1, img2, img3].map((e,i)=> { 
                return <Cards key={i} value={data.length != 0? data[i] : data} img={e}/>
            })}
        </CardContainerDiv>  
    );
}

export default CardContainer;