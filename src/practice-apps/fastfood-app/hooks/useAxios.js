import {useEffect, useState} from "react";
import axios from "axios";

axios.defaults.baseURL = 'https://react-mini-projects-api.classbon.com';
const useAxios = (axiosParams) => {
    const [response, setResponse] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const fetchData = async () => {
        try {
            const response = axios.request(axiosParams);
            setResponse(response);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);
    return {response, loading, error};
}
export default useAxios;