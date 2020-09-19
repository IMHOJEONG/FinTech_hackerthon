import React from 'react';
import styled from 'styled-components';

const RegisterDiv = styled.div`
    margin: 0 auto;
    border-radius: 10px;

`;

const ID = styled.input`
    width: 100%;
`;

const PASSWD = styled.input`
    width: 100%;
`;

const NAME = styled.input`
    width: 100%;
`;


function Register() {
    return (
        <RegisterDiv>
            <div>Register</div>
            <ID></ID>
            <PASSWD></PASSWD>
            <NAME></NAME>
        </RegisterDiv>
    );
}

export default Register;