import useFetch from "./hooks/useFetch.jsx";
import {useState} from "react";
import Card from "../client-pagination-app/components/card/card.jsx";
import Pagination from "../client-pagination-app/components/pagination.jsx";

const url = 'https://react-mini-projects-api.classbon.com/Programmer/sieve';
const pageSize = 2;
const ServerPaginationApp = () => {
    const [page, setPage] = useState(1);
    const [loading, programmers] = useFetch(url, {
        page: page,
        pageSize: pageSize
    });
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
                                programmers.data.map(({id, ...programmer}) => {
                                    return (
                                        <div className='col-4' key={id}>
                                            <Card {...programmer}/>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className='row'>
                            <Pagination pages={ Math.ceil(programmers.totalRecords / pageSize)} setPage={setPage} activePage={page}/>
                        </div>
                    </>
                )
            }
        </div>
    )
}
export default ServerPaginationApp;