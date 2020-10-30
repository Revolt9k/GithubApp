import * as axios from "axios";

const instance = axios.create({
    baseURL: "https://api.github.com/" ,
})

export const githubAPI = {
    getUserRepos(user) {
        return instance.get(`/users/${user}/repos`).then(response => {
            return response.data
        })
    },
    searchRepos(keyword, page, pageSize) {
        return instance.get(`/search/repositories?q=${keyword}&page=${page}&per_page=${pageSize}`, {
        }).then(response => {
            return response.data
        })
    },
}



