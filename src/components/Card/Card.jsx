import css from './Card.module.css'
import PropTypes from 'prop-types'
import { AiOutlineInfoCircle } from 'react-icons/ai';

export const Card = () => {
    const MONTHS = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

    const DATE = new Date();
    const currentDay = DATE.getDay();
    const currentMonth = MONTHS[DATE.getMonth()];
    return (
        <div className={css[`c-card`]}>
            <div className={css[`c-card-title`]}>
                <h1 className={css[`card-title`]}>Total de ventas de septiembre <AiOutlineInfoCircle className={css[`card-title-icon`]} /></h1>
            </div>
            <h2 className={css[`card-amount`]}>1'560.000</h2>
            <p className={css[`date`]}>{`${currentMonth}, ${currentDay}`}</p>
        </div>
    )
}

Card.propTypes = {}
