import styled from "styled-components";
import React from "react";

const ListOfRepos = (props) => {

    const Title = styled.h2`
    text-align: center;
    `

    const Rep = styled.div`
    text-align: center;
    font-size: 25px;
    margin: 5px;
    border: 1px solid darkslateblue;
    border-radius: 3px;
`

    let mappedList = props.listOfRepos.map(rep => {
        return <Rep key={rep.id}>{rep.name}</Rep>
    })

    return <div>
        <Title> List of repositories: </Title>
        {props.listOfRepos.length === 0 ? <Rep>Nothing to show</Rep> : <div>{mappedList}</div>  }

    </div>
}

export default ListOfRepos