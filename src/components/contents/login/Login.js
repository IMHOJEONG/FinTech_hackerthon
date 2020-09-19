import React from 'react';
import styled from 'styled-components';
import './Login.css';

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
        <LoginDiv className="login">
            <div>Login</div>
            <div>
                <div>ID</div>
                <ID></ID>
            </div>
            <div>
                <div>PassWord</div>
                <PASSWD></PASSWD>
            </div>
            <button>확인</button>    
        </LoginDiv>
    );
}

export default Login;