import {githubAPI} from "../api/api";

const GET_REPOS = "getRepos";
const SET_USER = "setUser"

let initialState = {
    listOfRepos: [
        {
            name: 'there will be list of repos when you submit username',
            id: 1,
        },
    ],
    currentUser: '',
}

const mainPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER: {
            return {
                ...state, currentUser: action.user
            }
        }
        case GET_REPOS: {
            return {
                ...state, listOfRepos: action.newReposList,
            }
        }
        default: {
            return state;
        }
    }
}

export const setNewRepos = (newReposList) => ({type: GET_REPOS, newReposList})

export const setUser = (user) => ({type: SET_USER, user})

export const getReposThunkCreator = (user) => async (dispatch) => {
    let data = await githubAPI.getUserRepos(user)
    dispatch(setNewRepos((data)))
}

export const searchReposThunkCreator = (keyword) => async (dispatch) => {
    let data = await githubAPI.searchRepos(keyword)
    dispatch(setNewRepos(data))
}


export default mainPageReducer