import React from 'react';
import styled from 'styled-components';
import './InvestDetails.css';
import Image from './images/car.jpg';

const InvestDetailsDiv = styled.div`
    height: 30%;
    display: flex;
    flex-direction: column;
`;

const WideCardDiv = styled.div`
    background : white;
    display: flex;
    margin-bottom : 2em;
`;

const WideCardImg = styled.img`
    width: 60%;
`;

const WideCardInfo = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
    background: white;
    justify-content: space-around;
`;

const DetailsDiv = styled.div`
    display: flex;
    flex-direction: column;
`;

const Choose = styled.div`
    width: 70%;
    position: fixed;
    padding: 1em;
    bottom: 0;
    background: rgba(240,240,240,0.8);
`;

function InvestDetails({match, location}){

    console.log(match);
    console.log(location);
    console.log(location.state);

    return (
        <InvestDetailsDiv>
            <WideCardDiv>
                <WideCardImg src={Image}/>
                <WideCardInfo>
                    <div className="infomation">
                        <div>
                            <div>연 수익률</div>
                            <div>13%</div>
                        </div>
                        <div>
                            <div>---</div>
                            <div>모집중</div>
                        </div>
                    </div>
                    <div className="infomation">
                        <div>
                            <div>투자기간</div>
                            <div>13개월</div>
                        </div>
                        <hr />
                        <div>
                            <div>등급</div>
                            <div>c2</div>
                        </div>
                        <hr />
                        <div>
                            <div>모집금액</div>
                            <div>1억 100만원</div>
                        </div>
                    </div>
                    <button>
                        <div>투자하기</div>
                    </button>
                </WideCardInfo>
            </WideCardDiv>
            <DetailsDiv className="details">
                <div className="summary">
                    <div>투자요약</div>
                    <div>
                        <div>
                            <div>상환예정</div>
                            <div>상환방식</div>
                            <div>상환재원</div>
                            <div>자금용도</div>
                        </div>
                        <div>
                            <div>
                            2021년 9월 30일 (대출 실행일 지연 등으로 만기일 변동 가능)
                            </div> 
                            <div>매월 수익금 지급 후 원금은 만기 일시 상환 (일부 또는 전액 조기 상환 가능)
※ 매월 25일 ~ 말일에 대출 실행된 상품의 첫 수익금은 [다다음달] 첫 영업일에 지급</div> 
                            <div>
                            1. 차주 자본 상환 : 대출자가 보유한 자금으로 원리금을 상환합니다.
2. 대환대출 : 테라펀딩 또는 타 금융기관 대환을 통해 원리금을 상환합니다.</div> 
                            <div>프로젝트(신축사업) 투입 자본 : 총 12억7,000만원</div> 
                        </div>
                    </div>
                </div>
                <div className="points">
                    <div>핵심투자포인트</div>
                    <div></div>
                </div>
                <div className="authorinformation">
                    <div>작가 정보</div>
                    <div></div>
                </div>
            </DetailsDiv>
            <Choose>
                <div className="fixed_div">
                    <div>~~모집중입니다/</div>
                    <button>
                        투자하기    
                    </button>
                    
                </div>
            </Choose>
        </InvestDetailsDiv>
    );
}
export default InvestDetails;
