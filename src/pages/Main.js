import React from 'react';
import styled from 'styled-components';
import Navigation from '../components/navigation/Navigation';
import Contents from '../components/contents/Contents';
import Footer from '../components/footer/Footer';
import './Main.css';

const MainDiv = styled.div`
    display:flex;
    flex-direction: column;
    background: white;
`;

function Main() {

    return (
        <MainDiv>
            <Navigation></Navigation>
            <Contents></Contents>
            <Footer></Footer>
        </MainDiv>
    );
}

export default Main;