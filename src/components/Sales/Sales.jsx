import { Card } from '../Card/Card'
import css from './Sales.module.css'
import { useContext } from 'react';
import { storageContext } from '../../context/storageContext';
import { types } from '../../types/types';
import { byDay, byWeek, byMonth, byDataPhone, byLink } from '../../helpers/normalize';

export const Sales = () => {

    const DATE = new Date();
    const MONTHS = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    const currentMonth = MONTHS[DATE.getMonth()];

    const { data, dispatch } = useContext(storageContext);

    const onClickHandleByDay = () => {
        dispatch({ filter: types.today, payload: byDay(data.originalData) })
    }
    const onClickHandleByWeek = () => {
        dispatch({ filter: types.week, payload: byWeek(data.originalData) })
    }
    const onClickHandleByMonth = () => {
        dispatch({ filter: types.month, payload: byMonth(data.originalData) })
    }
    const onChangeHandleByDataphone = () => {
        dispatch({ filter: types.dataPhone, payload: byDataPhone(data.originalData) })
    }
    const onChangeHandleByLink = () => {
        dispatch({ filter: types.link, payload: byLink(data.originalData) })
    }

    console.log(data);

    return (
        <section className={css[`main-section`]}>
            <Card />
            <div className={css[`c-filter-btn`]}>
                <button
                    className={css[`btn`]}
                    onClick={onClickHandleByDay}
                >Hoy</button>
                <button
                    className={css[`btn`]}
                    onClick={onClickHandleByWeek}
                >Esta semana</button>
                <button
                    className={css[`btn`]}
                    onClick={onClickHandleByMonth}
                >{currentMonth}</button>
                <button
                    className={css[`btn`]}
                    onClick={onChangeHandleByDataphone}
                >Dataphone</button>
                <button
                    className={css[`btn`]}
                    onClick={onChangeHandleByLink}
                >Link</button>
                {/* TABLA */}
            </div>
            <p>{JSON.stringify(data.users.map(item => item.id))}</p>
        </section >
    )
}
