import React from 'react';
import styled from "styled-components";


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
    const ChangeUserBlock = styled.div`
    display: flex;
    justify-content: center;
    padding: 25px;
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

    let mappedList = props.listOfRepos.map(rep => {
        return <Rep key={rep.id}>{rep.name}</Rep>
    })

    let inputRef = React.createRef()

    return <Wrapper>
        <ControlZone>
            <ChangeUserBlock>
                <div>github.com/ <Input placeholder="User name" ref={inputRef}/></div>
                <Button onClick={() => props.setUser(inputRef.current.value)}> Checkout User Repositories</Button>
            </ChangeUserBlock>
        </ControlZone>
            <Title> List of repositories: </Title>
            <div>{mappedList}</div>
    </Wrapper>


}


export default MainPage