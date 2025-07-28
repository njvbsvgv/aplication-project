import { useMutation } from "react-query"
import { http } from "../../interceptores"

export const postLoginData = (key, endUrl) => {
    return useMutation({
        mutationKey: key,
        mutationFn: async (data) => {
            console.log("key ==>", key)
            console.log("endUrl ==>", endUrl)
            console.log("data ==>", data)
            const response = await http.post(endUrl, data)
            return response
        }
    })
}