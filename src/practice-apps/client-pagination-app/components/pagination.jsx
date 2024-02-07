import _ from 'lodash';

const Pagination = ({pages, setPage, activePage}) => {
    const handlePage = (index) => {
        setPage(index + 1)
    }
    const handlePrevPage = () => {
        setPage((oldPage) => {
            let prevPage = oldPage - 1
            if (prevPage < 1) {
                prevPage = pages;
            }
            return prevPage;
        })
    }
    const handleNextPage = () => {
        setPage((oldPage) => {
            let nextPage = oldPage + 1
            if (nextPage > pages) {
                nextPage = 1
            }
            return nextPage;
        })
    }
    return (
        <nav>
            <ul className='pagination d-flex justify-content-center mt-5' dir='rtl'>
                <li className='page-item'>
                    <a className='page-link' href='#' onClick={handlePrevPage}>قبلی</a>
                </li>
                {
                    _.times(pages, (index) => (
                        <li key={`pagination-${index}`}
                            className={`page-item ${index + 1 === activePage ? 'active' : ''}`}
                            onClick={() => handlePage(index)}
                        >
                            <a className='page-link' href='#'>
                                {index + 1}
                            </a>
                        </li>
                    ))
                }
                <li className='page-item'>
                    <a className='page-link' href='#' onClick={handleNextPage}>بعدی</a>
                </li>
            </ul>
        </nav>
    )
}
export default Pagination;