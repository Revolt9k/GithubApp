import React, {useState} from 'react';
import styled from "styled-components";
import Paginator from "./Paginator";
import ControlZone from "./ControlZone";
import ListOfRepos from "./ListOfRepos";

const MainPage = (props) => {

    let portionSize = 10;
    let [portionNumber, setPortionNumber] = useState(0)
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionPageNumber = portionNumber * portionSize

    let handleChange = (refValue) => {
        props.setSearchValue(refValue)
    }

    let handleGetUserRepo = async (refValue) => {
        await props.setUser(refValue)
        setPortionNumber(0)
    }

    let handleSearch = async () => {
        await props.searchReposThunkCreator(props.currentSearchValue, props.currentPage, props.pageSize)
        setPortionNumber(1)
    }

    const Wrapper = styled.div`
    max-width: 800px;
    margin: 15px auto;
    padding: 5px;
`

    return <Wrapper>

        <ControlZone setUser={props.setUser}
                     currentSearchValue={props.currentSearchValue}
                     handleSearch={handleSearch}
                     handleGetUserRepo={handleGetUserRepo}
                     handleChange={handleChange}/>

        <ListOfRepos listOfRepos={props.listOfRepos}/>

        <Paginator portionNumber={portionNumber}
                   setPortionNumber={setPortionNumber}
                   leftPortionPageNumber={leftPortionPageNumber}
                   rightPortionPageNumber={rightPortionPageNumber}
                   changePage={props.changePage}
                   totalReposCount={props.totalReposCount}
                   pageSize={props.pageSize}/>

    </Wrapper>

}

export default MainPage