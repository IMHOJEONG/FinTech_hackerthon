import React from 'react';
import styled from 'styled-components';
import Image from '../cardcontainer/images/car.jpg';
import './CompanyIntro.css'
const CompanyIntroDiv = styled.div`
    display: flex;
`;

const CompanyImg = styled.img`
    margin: auto;
    background: black;
    width: 20em;
    margin-bottom: 18em;
`;

const CompanySentence = styled.div`
    position: fixed;
    top: 0;
    left: 50%;
    margin: 300px 0;
    background: gray;
    color: blue;
    padding : 2em 2em;
    width: 20em;
`;

function CompanyIntro() {

    return (
        <>
            <CompanyIntroDiv>
                <CompanyImg
                src={Image}></CompanyImg>
                <CompanySentence className="companysentence">
                    <div>저희 퍼스트펭권 회사의 시작은 당신입니다.</div>
                    <div>
                        <div> 발상의 시작부터 특허등록 제품의 기획 제조</div>
                        <div> 유통까지 연결하는 플랫폼으로 다양한 아이디어를 가진 여러분을 기다립니다.</div>
                    </div>
                    <div>
                        <div> 제품 기획에서 설계 양산 유통을 하나의 플랫폼으로...</div>
                    </div>                    
                    <div>
                        <div>누구나 한번즈음 꿈꾸던 상상</div>
                        <div>톡톡튀는 독창적인 생각을 하지만 실행에 옮기지 못했던 아쉬움</div>
                        <div>저희 퍼스트펭권과 함께하세요</div>
                    </div>
                    <div>
                        <div>세상에 있는 제품이라면 만들지 않습니다.</div>
                    </div>
                </CompanySentence>
            </CompanyIntroDiv>
        </>
    );


}

export default CompanyIntro;
