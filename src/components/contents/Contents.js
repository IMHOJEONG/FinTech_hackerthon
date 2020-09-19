import React from 'react';
import styled from 'styled-components';
import { Route } from "react-router-dom";
import Firstcontents from './Firstcontents';
import InvestPage from './invest/InvestPage';
import InvestDetails from './cardcontainer/InvestDetails'
import CompanyIntro from './companyIntro/CompanyIntro';
import Register from './register/Register';
import Login from './login/Login';
const ContentsDiv = styled.div`
    background : background: linear-gradient(#9198e5,#E0FFFF);
    display: flex;
    flex-direction: column;
    padding: 5em;
`;



function Contents() {
    return (
        <ContentsDiv>
                <Route exact path="/" component={Firstcontents} />
                <Route path="/list_all" component={InvestPage} /> 
                <Route path="/investDetails/:id" component={InvestDetails} />
                <Route path="/companyintro" component={CompanyIntro} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
        </ContentsDiv>
    );
}

export default Contents;