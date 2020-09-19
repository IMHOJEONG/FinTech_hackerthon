import React from 'react';
import styled from 'styled-components';
import './Navigation.css';
import { Link } from 'react-router-dom';

const NavigationDiv = styled.div`
    display: flex;
    justify-content: space-around;
    background : rgba(240, 240, 240, 0.8);
    padding: 2em 1em;
`;

const NavigationLeftDiv = styled.div`
    display: flex;
    justify-content: space-between;
`;

const NavigationRightDiv = styled.div`
    display: flex;
    justify-content: space-between;
`;

const NavigationContentsDiv = styled.div`
    margin: 0em 1em;
`;

function Navigation() {

    return (
        <NavigationDiv>
            <NavigationLeftDiv className="first">
                <NavigationContentsDiv ><i className="fab fa-linux fa-3x"></i></NavigationContentsDiv>
                <Link to="/" className="nav_link">
                    <NavigationContentsDiv className="nav_title">First Penguin</NavigationContentsDiv>
                </Link>
                <Link to="/invest" className="nav_link">
                    <NavigationContentsDiv >투자하기</NavigationContentsDiv>
                </Link>
                <NavigationContentsDiv>투자신청</NavigationContentsDiv>
            </NavigationLeftDiv>
            <NavigationRightDiv>
                <Link to="/login" className="nav_login">
                    <NavigationContentsDiv>로그인</NavigationContentsDiv>
                </Link>
                <NavigationContentsDiv>|</NavigationContentsDiv>
                <Link to="/register" className="nav_register">
                    <NavigationContentsDiv>회원가입</NavigationContentsDiv>
                </Link>
            </NavigationRightDiv>
        </NavigationDiv>
    );
}

export default Navigation;