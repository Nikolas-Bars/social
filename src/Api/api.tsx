import axios from "axios";

let baseUrl = 'https://social-network.samuraijs.com/api/1.0'

// @ts-ignore
let instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    headers: {'API-KEY': "82582742-7d7f-4c61-8ef1-26c44cad628c"}
})


export const usersAPI = {
    getUsers: (currentPage: number = 1, pageSize: number = 1) => {
        return instance.get(`/users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    },
    followUsers: (userID: number) => {
        return instance.post(`/follow/${userID}`).then(response => response.data.resultCode)
    },
    unFollowUsers: (userID: number) => {
        return instance.delete(`/follow/${userID}`).then(response => response.data.resultCode)
    },
}

export const authAPI = {
    me: () => {
        return instance.get('/auth/me').then(response => response.data)
    }
}

export const profileAPI = {
    getProfile: (userID: number) => {
        return instance.get(`/profile/${userID}`).then(response => response.data)
    },
    getStatus: (userID: number) => {
        return instance.get(`/profile/status/${userID}`).then(response => response)
    },
    updateStatus:(status: string)=>{
        return instance.put(`/profile/status`, {status}).then(response => response)
    },

}

