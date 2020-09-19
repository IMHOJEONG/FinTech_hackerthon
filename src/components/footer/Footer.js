import React from 'react';
import styled from 'styled-components';
import './Footer.css';
import { Link } from 'react-router-dom'; 

const FooterDiv = styled.div`
    display : flex;
    flex-direction: column;
    background : rgba(0,0,240,1);
`;

function Footer() {
    return(
        <FooterDiv>
            <div className="footer1">
                <Link to="/companyintro" className="info">
                    <div>
                        회사 소개 
                    </div>
                </Link>
                <div>
                    공지 사항 
                </div>
            </div>
            <div>
                <hr />
            </div>
            <div>

            </div>    
        </FooterDiv>
    );
}

export default Footer;

