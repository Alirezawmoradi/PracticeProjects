import axios from "axios";
import {useEffect, useState} from "react";

const instance = axios.create({
    baseURL: 'https://react-mini-projects-api.classbon.com'
})

const useFoodData = (axiosParams) => {
    const [response, setResponse] = useState([]);

    const [isLoading, setIsLoading] = useState(true);

    const [error, setError] = useState('');

    const fetchData = async () => {
        try {
            const result = await instance.request(axiosParams);
            setResponse(result.data)
        } catch (e) {
            setError(error)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return [response, isLoading, error]
}

export default useFoodData;