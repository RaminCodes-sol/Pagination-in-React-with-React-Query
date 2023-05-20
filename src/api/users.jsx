import axios from "axios"


const Axios = axios.create({
    baseURL: ' http://localhost:3000'
})

export const getUsers = async (pageParam = 1) => {
    await new Promise(resolve => setTimeout(resolve, 300))
    const response = await Axios.get(`/users?_page=${pageParam}`)
    return response.data
}
