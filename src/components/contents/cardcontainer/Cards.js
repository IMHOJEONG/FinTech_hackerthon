import React from 'react';
import styled from 'styled-components';
import './Cards.css';
// import Image from './images/car.jpg';
import { Link } from 'react-router-dom';
import axios from 'axios';


const CardsDiv = styled.div`
    width: 30em;
    background : yellow;
    border-radius: 2px;
`;

const CardsArticles = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1em;
`;

const CardsArticles2 = styled.div`
    display: flex;
    font-size: 15px;
    justify-content: space-between;
`;

const ProgressBar = styled.div`
    margin: 0em;
    height: 1em;
`;

const CardsImg = styled.img`
    width: 100%;
    height: 20em;
    margin-bottom: -0.2em;
`;

function Cards(props){

    // async function dataGet() {
    //     const data = await axios.get("/customers");
    //     console.log(data);
    // }
    // dataGet();

    function calPercentage() {
        return "100%";
    }
    
    return (
        <CardsDiv>
            <CardsImg src={props.img}>
            </CardsImg>
            <ProgressBar className="progressbar_container">
                <div className="progressbar_container_last">
                <div className="bar"></div>
                <div>{calPercentage()}</div>
                </div>
            </ProgressBar>
            <CardsArticles className="cardsarticles">
                <div>
                    <div>사업자대출</div>
                </div>
                <CardsArticles2 className="cardsinfo2">
                    <div>13%</div>
                    <div>|</div>
                    <div>11</div>
                    <div>|</div>
                    <div>C2</div>
                    <div>|</div>
                    <div>1억</div>
                </CardsArticles2>
                <div className="address">
                제4141차 1호선 소사역 인근 주상복합아파트 신축사업 사업자대출 10차
                </div>
                <Link to={{
                    pathname:`/investDetails/${props.value}`,
                    state: {
                        value1: "13%"
                    }
                }} className="buttons">
                    <button>
                        <div>상세보기
                        </div>
                    </button>
                </Link>
            </CardsArticles>
        </CardsDiv>
    );

}

export default Cards; 
