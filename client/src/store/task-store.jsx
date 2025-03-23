import axios from 'axios'
import { create } from 'zustand'
const WEB_SERVER = "https://xo-shemchamet.onrender.com"
export const useTask = create((set) => ({
    allTask: [],
    oneTask: [],
    title: "",
    desc: "",
    isLoading: true,
    getTask: async () => {
        set({ isLoading: true })
        try {
            const response = await axios.get(`${WEB_SERVER}/getAllTask`)
            set({ isLoading: false, allTask: response.data })

        } catch (error) {
            console.log(error.message)
        }

    },
    addTask: async (data) => {
        set({ isLoading: true })
        try {
            axios.post(`${WEB_SERVER}/createTask/`, data, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            set({ isLoading: false })
        } catch (error) {
            console.log(error.message)

        }
    },
    deleteTask: async (id) => {
        set({ isLoading: true })
        try {
            axios.delete(`${WEB_SERVER}/deleteTask/${id}`)

            set({ isLoading: false })
        } catch (error) {
            console.log(error.message)

        }
    },
    updateTask: async (id, data) => {
        set({ isLoading: true })
        try {
            axios.put(`${WEB_SERVER}/updateTask/${id}`, data)
            set({ isLoading: false })
        } catch (error) {
            console.log(error.message)

        }
    },
    getOneTask: async (id) => {
        set({ isLoading: true })
        try {
            const response = await axios.get(`${WEB_SERVER}/getOneTask/${id}`)
            set({ isLoading: false, oneTask: response.data })
        } catch (error) {
            console.log(error.message)
        }
    }
}))
