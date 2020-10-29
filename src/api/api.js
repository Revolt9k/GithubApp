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
    searchRepos(keyword) {
        return instance.get(`/search/repositories?q=${keyword}`, {
        }).then(response => {
            return response.data.items
        })
    },
    performSearch(query = 'web'){
        instance(`/search/repositories?q=${query}`)
            .then(response => {
                return response.data
            })
            // .catch(error => {
            //     console.log('Error fetching and parsing data', error);
            // });
    }

}



