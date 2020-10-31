import React, {useState} from 'react';
import styled from "styled-components";
import Paginator from "./Paginator";


const MainPage = (props) => {

    const Wrapper = styled.div`
    max-width: 800px;
    margin: 15px auto;
    padding: 5px;
`

    const ControlZone = styled.div`
    margin: 25px 0;
`

    const Input = styled.input`
    height: 40px;
`

    const Button = styled.button`
    background-color: lightgreen;
    height: 46px;
`
    const ControlBlock = styled.div`
    display: flex;
    justify-content: center;
    padding: 25px;
    margin: 3px;
    background-color: #eee; 
    border: 1px solid black;
    `

    const Title = styled.h2`
    text-align: center;
    `

    const Rep = styled.div`
    text-align: center;
    font-size: 25px;
    margin: 5px;
    border: 1px solid darkslateblue;
`

    let inputRef = React.createRef()
    let searchRef = React.createRef()

    let mappedList = props.listOfRepos.map(rep => {
        return <Rep key={rep.id}>{rep.name}</Rep>
    })



    let portionSize = 10;
    let [portionNumber, setPortionNumber] = useState(0)
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionPageNumber = portionNumber * portionSize


    let handleChange = () => {
        props.setSearchValue(searchRef.current.value)
    }

    let handleSearch = async () => {
        await props.searchRepos(props.currentSearchValue, props.currentPage, props.pageSize)
        setPortionNumber(1)
    }




    return <Wrapper>
        <ControlZone>
            <ControlBlock>
                <div>github.com/ <Input placeholder="User name" ref={inputRef}/></div>
                <Button onClick={() => props.setUser(inputRef.current.value)}> Checkout User Repositories</Button>
            </ControlBlock>
            <ControlBlock>
                <div>Search here <Input placeholder="Keyword here" autoFocus onChange={() => handleChange()}
                                        value={props.currentSearchValue} ref={searchRef}/></div>
                <Button
                    onClick={() => handleSearch()}> Search
                    Repositories</Button>
            </ControlBlock>
        </ControlZone>
        <Title> List of repositories: </Title>
        <div>{mappedList}</div>
        <Paginator portionNumber={portionNumber}
                   setPortionNumber={setPortionNumber}
                   leftPortionPageNumber={leftPortionPageNumber}
                   rightPortionPageNumber={rightPortionPageNumber}
                   changePage={props.changePage}
                   totalReposCount={props.totalReposCount}
                   pageSize={props.pageSize}
        />

    </Wrapper>


}




export default MainPage