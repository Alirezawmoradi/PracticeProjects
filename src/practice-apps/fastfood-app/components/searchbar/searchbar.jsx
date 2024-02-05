import {BsSearch} from "react-icons/bs";
import {useState} from "react";

const SearchBar = ({searchItems}) => {
    const [value, setValue] = useState('');
    const handleValue = (e) => {
        setValue(e.target.value)
    }
    const onSubmit = (e) => {
        e.preventDefault();
        searchItems(value)
    }
    return (
        <form onSubmit={onSubmit} className='search flex-fill d-flex align-items-center'>
            <div className='input-group'>
                <input className='form-control rounded-end pe-5 border-success'
                       type='text'
                       placeholder='جستجوی فست فود ...'
                       value={value}
                       onChange={handleValue}
                />
                <BsSearch className='position-absolute top-50 translate-middle-y text-muted me-3'/>
            </div>
        </form>
    )
}
export default SearchBar;