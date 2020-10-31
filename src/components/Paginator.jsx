import styled from "styled-components";
import React from "react";

const Paginator = (props) => {

    let pagesCount = Math.ceil(props.totalReposCount / props.pageSize)
    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    const ControlBlock = styled.div`
    display: flex;
    justify-content: center;
    padding: 25px;
    margin: 3px;
    background-color: #eee; 
    border: 1px solid black;
    `

    return <ControlBlock>
        <div>
            {props.portionNumber > 1 && <button onClick={() => props.setPortionNumber(props.portionNumber - 1)}> prev </button>
            }
        </div>
        <div>
            {pages
                .filter(page => page >= props.leftPortionPageNumber && page <= props.rightPortionPageNumber)
                .map(page => {
                    return <button key={page}
                                   onClick={() => {
                                       props.changePage(page)

                                   }}> {page} </button>
                })}
        </div>
        <div>
            {props.portionNumber < 10 && props.portionNumber >= 1 &&
            <button onClick={() => props.setPortionNumber(props.portionNumber + 1)}> next</button>}
        </div>
    </ControlBlock>
}

export default Paginator