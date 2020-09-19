import React from 'react';
import styled from 'styled-components';

const NoticeDiv1 = styled.div`
    margin: 1em auto;
    font-size: 30px;
    font-weight: bold;
`;

const NoticeDiv2 = styled.div`
    margin: 1em auto;
`;

function Notice() {


    const arr = [
        "Team is One",
        "Make it easy",
        "How about you?"
    ];

    return (
        <>
        <NoticeDiv1>공지사항</NoticeDiv1>
        {arr.map((data, index) => {
            return <NoticeDiv2>
                <div>
                    {index+1}. {data}
                </div>
            </NoticeDiv2>
        })}
        </>
    );
}

export default Notice;