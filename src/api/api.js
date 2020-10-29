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
}

