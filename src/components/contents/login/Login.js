import React from 'react';
import styled from 'styled-components';

const LoginDiv = styled.div`
    margin: 0 auto;
    border-radius: 10px;

`;

const ID = styled.input`
    width: 100%;
`;

const PASSWD = styled.input`
    width: 100%;
`;



function Login() {
    return (
        <LoginDiv>
            <div>Login</div>
            <ID></ID>
            <PASSWD></PASSWD>
        </LoginDiv>
    );
}

export default Login;