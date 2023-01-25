import css from './Header.module.css'
import { FiHelpCircle } from 'react-icons/fi';


export const Header = ({ logo }) => {
    return (
        <header className={css.header}>
            <img className={css[`nav-logo`]} src={logo} alt="BOLD" />
            <div className={css[`c-items`]}>
                <a className={css[`c-nav-item`]} href="#">Mi negocio</a>
                <a className={css[`c-nav-item`]} href="#">Ayuda <FiHelpCircle className={css[`nav-item-icon`]} /></a>

            </div>
        </header>
    )
}

Header.propTypes = {}

