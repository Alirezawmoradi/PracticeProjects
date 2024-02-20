import {useEffect, useState} from "react";
import axios from "axios";

const instance = axios.create({
    baseURL: 'https://react-mini-projects-api.classbon.com'
})

const useCommentsData = (axiosParams) => {
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const fetchData = async () => {
        try {
            setLoading(true);
            const response = await instance.request(axiosParams);
            setComments(response.data)
        } catch (e) {
            setError(error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return {comments, loading, error};
}

export default useCommentsData;