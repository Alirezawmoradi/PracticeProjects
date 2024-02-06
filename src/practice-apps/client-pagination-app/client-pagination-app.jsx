import usePaginatedFetch from "./hooks/usePaginatedFetch.jsx";

const url = 'https://react-mini-projects-api.classbon.com/Programmer/programmers';
const ClientPaginationApp = () => {
    const [loading, programmers] = usePaginatedFetch(url,3)
    return (
        <div>
            Client Pagination App
        </div>
    )
}

export default ClientPaginationApp;