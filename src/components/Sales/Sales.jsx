import { useState, useRef } from 'react';
import css from './Sales.module.css'
import { Card, Table } from '../index'
import { useContext } from 'react';
import { storageContext } from '../../context/storageContext';
import { types } from '../../types/types';
import { byDay, byWeek, byMonth, byDataPhone, byLink } from '../../helpers/normalize';
import { ImEqualizer2 } from 'react-icons/im'

export const Sales = () => {

    const { data, dispatch } = useContext(storageContext);

    const [isDisable, setIsDisable] = useState(true)
    const [show, setShow] = useState(false)

    const refDataphone = useRef();
    const refLink = useRef();

    const DATE = new Date();
    const MONTHS = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    const currentMonth = MONTHS[DATE.getMonth()];

    const onClickHandleByDay = () => {
        setIsDisable(false)
        dispatch({ filter: types.today, payload: byDay(data.originalData) })
    }
    const onClickHandleByWeek = () => {
        setIsDisable(false)
        dispatch({ filter: types.week, payload: byWeek(data.originalData) })
    }
    const onClickHandleByMonth = () => {
        setIsDisable(false)
        dispatch({ filter: types.month, payload: byMonth(data.originalData) })
    }

    const onChangeHandleByDataphone = (e) => {
        e.target.checked
            ? dispatch({ filter: types.dataPhone, payload: byDataPhone(data.originalData) })
            : dispatch({ filter: types.dataPhone, payload: data.originalData })
        isDisable && setIsDisable(false)
    }
    const onChangeHandleByLink = (e) => {
        e.target.checked
            ? dispatch({ filter: types.link, payload: byLink(data.originalData) })
            : dispatch({ filter: types.dataPhone, payload: data.originalData })
        isDisable && setIsDisable(false)
    }

    const clearFilters = () => {
        setIsDisable(true)
        dispatch({ filter: types.dataPhone, payload: data.originalData })
        refDataphone.current.checked = ""
        refLink.current.checked = ""
    }

    const onClickHandler = (e) => {
        e.preventDefault();
        setShow(!show)
    }

    return (
        <>
            <section className={css[`main-section`]}>
                <div className={css[`c-card`]}>
                    <Card />
                </div>
                <div className={css[`c-main-btn`]}>
                    <div className={css[`c-btns`]}>
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
                            onClick={onClickHandler}>Mas filtros<ImEqualizer2 className={css[`btn-filter-icon`]} />
                        </button>
                    </div>
                    <div className={css[`c-filters`]}>
                        {
                            show
                                ? <div className={css[`c-radio`]}>
                                    <label
                                        className={css[`radio-label`]}
                                        htmlFor='radioFilter1'>
                                        <input
                                            className={css[`radio`]}
                                            ref={refDataphone}
                                            id='radioFilter1'
                                            name='radioBtn'
                                            value='dataphone'
                                            type="radio"
                                            onChange={onChangeHandleByDataphone}
                                        />
                                        Cobro con datafono
                                    </label>
                                    <label
                                        className={css[`radio-label`]}
                                        htmlFor='radioFilter2'>
                                        <input
                                            className={css[`radio`]}
                                            ref={refLink}
                                            id='radioFilter2'
                                            value='link'
                                            name='radioBtn'
                                            type="radio"
                                            onChange={onChangeHandleByLink}
                                        />
                                        Cobro con Link de pago
                                    </label>
                                </div>

                                : null
                        }
                        <button button
                            disabled={isDisable}
                            className={css[`btn-clear`]}
                            onClick={clearFilters}>Clear
                        </button>

                    </div>
                </div>

                <section className={css[`c-table`]}>
                    <Table data={data} />
                </section>
            </section >
        </>
    )
}