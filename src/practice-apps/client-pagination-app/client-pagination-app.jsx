import usePaginatedFetch from "./hooks/usePaginatedFetch.jsx";
import {useEffect, useState} from "react";
import Card from "./components/card/card.jsx";
import Pagination from "./components/pagination.jsx";

const url = 'https://react-mini-projects-api.classbon.com/Programmer/programmers';
const ClientPaginationApp = () => {
    const [loading, data] = usePaginatedFetch(url, 3);
    const [page, setPage] = useState(1);
    const [programmers, setProgrammers] = useState([]);

    useEffect(() => {
        if (loading) return;
        setProgrammers(data[page - 1]);
    }, [loading, page]);

    return (
        <div className='container pt-5'>
            {
                loading ? (
                    <div className='d-flex justify-content-center'>
                        <div className='spinner-border'></div>
                    </div>
                ) : (
                    <>
                        <div className='row d-flex justify-content-center'>
                            {
                                programmers.map(({id, ...programmer}) => {
                                    return (
                                        <div className='col-3' key={id}>
                                            <Card {...programmer}/>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className='row'>
                            <Pagination pages={data.length} setPage={setPage} activePage={page}/>
                        </div>
                    </>
                )
            }
        </div>
    )
}

export default ClientPaginationApp;