import { useState, useRef } from 'react';
import css from './Sales.module.css'
import { Card, Table } from '../index'
import { useContext } from 'react';
import { storageContext } from '../../context/storageContext';
import { types } from '../../types/types';
import { byDay, byWeek, byMonth, byDataPhone, byLink } from '../../helpers/normalize';
import { ImEqualizer2 } from 'react-icons/im'

export const Sales = () => {
    const [checkbox1, setCheckbox1] = useState(false);
    const [checkbox2, setCheckbox2] = useState(false);
    const [checkbox3, setCheckbox3] = useState(false);

    const refBtn = useRef();

    // const setRef = (ref) => {
    //     refBtn.current = [...refBtn.current, ref];
    // };

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
        setCheckbox1(!checkbox1)
        dispatch({ filter: types.dataPhone, payload: byDataPhone(data.originalData) })
    }
    const onChangeHandleByLink = () => {
        setCheckbox2(!checkbox2)
        dispatch({ filter: types.link, payload: byLink(data.originalData) })
    }
    const onChangeAll = (e) => {

    }
    const onClickHandler = (e) => {
        e.preventDefault();
        console.log('online from btn filter')
    }


    return (
        <>
            <section className={css[`main-section`]}>
                <div className={css[`c-card-filter`]}>
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
                            // ref={setRef}
                            className={css[`btn`]}
                            onClick={onClickHandler}>Mas filtros<ImEqualizer2 className={css[`btn-filter-icon`]} />
                        </button>
                    </div>
                </div>
                <div>
                    <label>
                        <input

                            type="checkbox"
                            checked={checkbox1}
                            onChange={onChangeHandleByDataphone}
                        />
                        Cobro con datafono
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            checked={checkbox2}
                            onChange={onChangeHandleByLink}
                        />
                        Cobro con Link de pago
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            // checked={() => console.log('online from checkbox 3')}
                            onChange={onChangeAll}
                        />
                        Ver todos
                    </label>
                </div>
                <section className={css[`c-table`]}>
                    <Table data={data} />
                </section>
            </section >
        </>
    )
}


{/* <button
    className={css[`btn`]}
    onClick={onChangeHandleByDataphone}
>Dataphone</button>
<button
    className={css[`btn`]}
    onClick={onChangeHandleByLink}
>Link</button> */}