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
    followUsers: (id: number) => {
        return instance.post(`/follow/${id}`).then(response => response.data.resultCode)
    },
    unFollowUsers: (id: number) => {
        return instance.delete(`/follow/${id}`).then(response => response.data.resultCode)
    },
}

