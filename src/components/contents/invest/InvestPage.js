import React from 'react';
import styled from 'styled-components';
import Cards from '../cardcontainer/Cards';
import './InvestPage.css';
import axios from 'axios';
import img1 from '../cardcontainer/images/1.jpg';
import img2 from '../cardcontainer/images/2.jpg';
import img3 from '../cardcontainer/images/3.jpeg';
import img4 from '../cardcontainer/images/4.jpg';
import img5 from '../cardcontainer/images/5.jpg';
import img6 from '../cardcontainer/images/6.jpg';


const CardContainerDiv = styled.div`
    display: flex; 
    justify-content: space-around;
    flex-wrap: wrap;
`;

function InvestPage() {
    
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
            {[img1, img2, img3, img4, img5, img6].map((e,i)=> { 
                return <Cards key={i} value={data.length != 0? data[i] : data} img={e}/>
            })}
        </CardContainerDiv>  
    );
}

export default InvestPage;