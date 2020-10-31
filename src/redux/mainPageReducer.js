import {githubAPI} from "../api/api";

const GET_REPOS = "getRepos";
const SET_USER = "setUser"
const SET_SEARCH_VALUE = "setSearchValue"
const CHANGE_PAGE = "changePage"
const SET_TOTAL_REPOS_COUNT = "SET_TOTAL_REPOS_COUNT"

let initialState = {
    listOfRepos: [
        {
            name: 'Nothing to show',
            id: null,
        },
    ],
    currentUser: '',
    currentSearchValue:  "",
    currentPage: 1,
    pageSize: 10,
    totalReposCount: null,
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
        case SET_SEARCH_VALUE: {
            return {
                ...state, currentSearchValue: action.value,
            }
        }
        case CHANGE_PAGE : {
            return {

                ...state,
                currentPage: action.page
            }
        }
        case SET_TOTAL_REPOS_COUNT: {
            return {
                ...state,
                totalReposCount: action.reposCount
            }
        }
        default: {
            return state;
        }
    }
}

export const setNewRepos = (newReposList) => ({type: GET_REPOS, newReposList})

export const setUser = (user) => ({type: SET_USER, user})

export const setSearchValue = (value) => ({type: SET_SEARCH_VALUE, value})

export const setTotalReposCount = (reposCount) => ({type: SET_TOTAL_REPOS_COUNT, reposCount})

export const changePage = (page) => ({type: CHANGE_PAGE, page})

export const getReposThunkCreator = (user) => async (dispatch) => {
    let data = await githubAPI.getUserRepos(user)
    dispatch(setNewRepos((data)))
    dispatch(setTotalReposCount(0))
}

export const searchReposThunkCreator = (keyword, page, pageSize) => async (dispatch) => {
    let data = await githubAPI.searchRepos(keyword, page, pageSize)
    dispatch(setNewRepos(data.items))
    dispatch(setTotalReposCount(data.total_count))
}


export default mainPageReducer