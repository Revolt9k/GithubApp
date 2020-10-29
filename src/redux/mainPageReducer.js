import {githubAPI} from "../api/api";

const GET_REPOS = "getRepos";
const SET_USER = "setUser"
const CHANGE_PAGE = "changePage"

let initialState = {
    listOfRepos: [
        {
            name: 'there will be list of repos when you submit username',
            id: 1,
        },
    ],
    currentUser: '',
    currentPage: 1,
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

export const changePage = (page) => ({type: CHANGE_PAGE, page})

export const getReposThunkCreator = (user) => async (dispatch) => {
    let data = await githubAPI.getUserRepos(user)
    dispatch(setNewRepos((data)))
}

export const searchReposThunkCreator = (keyword, page, pageSize) => async (dispatch) => {
    let data = await githubAPI.searchRepos(keyword, page, pageSize)
    dispatch(setNewRepos(data))
}


export default mainPageReducer