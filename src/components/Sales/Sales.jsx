import { Card } from '../Card/Card'
import css from './Sales.module.css'
import useDatabase from '../../Hooks/useDatabase';

export const Sales = () => {

    const DATE = new Date();
    const MONTHS = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    const currentMonth = MONTHS[DATE.getMonth()];

    const URL = "./src/db/db.json"
    const data = useDatabase(URL)

    const onClickHandle = (e) => {
        const { users } = data
        console.log(users)
    }

    return (
        <section className={css[`main-section`]}>
            <Card />
            <div className={css[`c-filter-btn`]}>
                <button
                    className={css[`btn`]}
                    onClick={onClickHandle}
                >Hoy</button>
                <button
                    className={css[`btn`]}
                    onClick={() => console.log('Online from "Esta semana"')}
                >Esta semana</button>
                <button
                    className={css[`btn`]}
                    onClick={() => console.log('Online from "Este mes"')}
                >{currentMonth}</button>
            </div>
        </section >
    )
}
