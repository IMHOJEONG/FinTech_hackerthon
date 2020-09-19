import React from 'react';
import styled from 'styled-components';
import './RequestInvest.css';

const RequestInvestDiv = styled.div`
    height: 30%;
    display: flex;
    flex-direction: column;
`;

const WideCardDiv = styled.div`
    background : white;
    display: flex;
    margin-bottom : 2em;
    border: 1px solid rgba(240,240,240,1);
    border-width: 10px;
    border-radius : 10px;
`;

const WideCardDivInside = styled.div`
    width: 60%;
    padding: 1em;
    
`;

const WideCardInfo = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
    background: white;
    justify-content: space-around;
    padding: 1em;
`;


function RequestInvest() {


    return (
        <RequestInvestDiv>
            <WideCardDiv>
                <WideCardDivInside>
                    <div class="invest_info">
                        <div>투자신청서</div>
                        <div>
                                <div>현재 해당상품에 투자가능한 금액은 0원입니다.</div>
                                <div>0만원</div>
                                <div>예상수익금 : 0원</div>
                        </div>
                    </div>
                </WideCardDivInside>
                <WideCardInfo>
                    <div className="infomation">
                        <div>
                            <div>상품 이름</div>
                        </div>
                        <div>
                            <div>Test</div>
                        </div>
                    </div>
                  
                    <button>
                        <div>투자하기</div>
                    </button>
                </WideCardInfo>
            </WideCardDiv>
        </RequestInvestDiv>
    );
}

export default RequestInvest;