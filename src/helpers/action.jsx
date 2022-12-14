import { useEffect } from "react"
import api from "../api/api"

/*
    Create an array of objects from a data object
    and add id: property with object key 
*/
export const createArrayOfObjects = (data) => {
    const dataArray = []

    for (const index in data) {

        const dataItem = {
            id: index,
            ...data[index]
        }
        dataArray.push(dataItem)
    }

    return dataArray
}


// Get all contacts
// export const getAllContacts = () => {

//     // Get all contacts
//     const getContacts = async () => {

//         try {
//             const response = await api.get('/contacts.json')
//             const data = response.data
//             createArrayOfObjects(data)

//         } catch (error) {

//         }

//     }

//     useEffect(() => {
//         getContacts()
//     }, [])
// }