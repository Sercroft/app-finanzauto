import { useEffect, useState }from "react"
import axios from 'axios'
import config from '../../config'

const useUsers = () => {
    const [users, setUser] = useState(null)

    const fetchUsers = async () => {
        try{
            const response = await axios.get(`${config.apiUrl}`, {
                headers: {
                    'app-id': config.apiKey
                }
            })
            const data = await response.data.data
            setUser(data)

            //console.log(`DATA ${JSON.stringify(data)}`);
        }catch(error){
            console.error(`Error API -> ${error}`);
        }
    }

    useEffect(() => {
        fetchUsers()
    }, [])

    return { users }
}

export default useUsers