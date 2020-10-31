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
    background-color: #fff; 
    `
    const NavButton = styled.button`
    background-color: lightgreen;     
    width: 50px;
    height: 50px
    `

    const Page = styled.button`
    background-color: #888;     
    margin: 0 3px;
    border-radius: 3px;
    width: 50px;
    height: 50px
    `

    const CurrentPage = styled(Page)`
    background-color: #eee;     
    `

    return <ControlBlock>
        <div>
            {props.portionNumber > 1 &&
            <NavButton onClick={() => props.setPortionNumber(props.portionNumber - 1)}> Prev </NavButton>
            }
        </div>
        <div>
            {pages
                .filter(page => page >= props.leftPortionPageNumber && page <= props.rightPortionPageNumber)
                .map(page => {
                    {
                        return (props.currentPage === page) ?
                            <Page key={page}
                                  onClick={() => {
                                      props.changePage(page)
                                  }}> {page} </Page> :
                            <CurrentPage key={page}
                                         onClick={() => {
                                             props.changePage(page)
                                         }}> {page} </CurrentPage>
                    }
                })}
                </div>
                <div>
                {props.portionNumber < 10 && props.portionNumber >= 1 && pagesCount > 100 &&
                <NavButton onClick={() => props.setPortionNumber(props.portionNumber + 1)}> Next </NavButton>}
                </div>
                </ControlBlock>
                }

                export default Paginator