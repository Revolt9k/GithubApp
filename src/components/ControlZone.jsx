import styled from "styled-components";
import React from "react";

const ControlZone = (props) => {

    const ControlZone = styled.div`
    margin: 25px 0;
`

    const Input = styled.input`
    margin: 0 5px;
    height: 40px;
`

    const Button = styled.button`
    margin: 0 5px;
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

    let inputRef = React.createRef()
    let searchRef = React.createRef()


    return <ControlZone>
        <ControlBlock>
            <div>Github.com/ <Input placeholder="User name" ref={inputRef}/></div>
            <Button onClick={() => props.handleGetUserRepo(inputRef.current.value)}> Checkout User's
                Repositories</Button>
        </ControlBlock>
        <ControlBlock>
            <div> Search repos<Input placeholder="Enter a keyword here" autoFocus
                                     onChange={() => props.handleChange(searchRef.current.value)}
                                     value={props.currentSearchValue} ref={searchRef}/></div>
            <Button
                onClick={() => props.handleSearch(searchRef.current.value)}> Search
                Repositories</Button>
        </ControlBlock>
    </ControlZone>
}

export default ControlZone