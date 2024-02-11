import {useThemeContext} from "../../context.jsx";

const Header = () => {
    const theme = useThemeContext();
    const darkMode = theme.darkMode;
    const handleTheme = () => {
        theme.setDarkMode(!darkMode)
    }
    return (
        <nav
            className={`nav navbar-expand ${darkMode ? 'navbar-dark bg-dark' : 'bg-secondary navbar-light'} shadow-sm`}>
            <div className='container d-flex p-4 justify-content-between'>
                <ul className='navbar-nav'>
                    <li className='nav-item'>
                        <a className='nav-link'>
                            صفحه اصلی
                        </a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link'>
                            محصولات ما
                        </a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link'>
                            درباره ما
                        </a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link'>
                            ارتباط با ما
                        </a>
                    </li>
                </ul>
                <button type='button' className={`btn ${darkMode ? 'btn-light' : 'btn-dark'} btn-dark`}
                        onClick={handleTheme}>
                    {
                        darkMode ? 'روشن' : 'تاریک'
                    }

                </button>
            </div>
        </nav>
    )
}
export default Header;