import { FaCcMastercard } from 'react-icons/fa'
import { BsCalculator } from 'react-icons/bs'
import { AiOutlineLink } from 'react-icons/ai'
import { formatCard, formatDate, generateId } from '../../helpers/normalize';
import css from './Table.module.css'

function getUserInfo(data) {

    const infoUser = data.users.map(item => {
        let num = item.id

        const serial = generateId(num)
        const userOBJ = {
            transaction: item.success ? "Cobro exitoso" : "Cobro no realizado",
            date: formatDate(item.date),
            pay_met: formatCard(item.info_card),
            id: serial,
            amount: item.amount
        }
        return userOBJ
    })
    return infoUser
}

export const Table = ({ data }) => {
    const infoUser = getUserInfo(data)
    return (
        <div className={css[`table`]}>
            <h2 className={css[`table-header`]}>
                Tus ventas de septiembre
            </h2>
            <table>
                <thead>
                    <tr>
                        <th>Transacción</th>
                        <th>Fecha y hora</th>
                        <th>Método de pago</th>
                        <th>ID Transacción</th>
                        <th>Monto</th>
                    </tr>
                </thead>
                <tbody>
                    {infoUser.map((item, index) => (
                        <tr key={index}>

                            {/* <td>{item.transaction === "Cobro no realizado" && item.transaction}</td> */}
                            <td>{item.transaction}</td>
                            <td>{item.date}</td>
                            <td>
                                <FaCcMastercard className={css[`master-icon`]} />
                                <span className={css[`master-num`]}>**** **** ****{item.pay_met}</span>
                            </td>
                            <td>{item.id}</td>
                            <td>${item.amount}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {/* <p>{JSON.stringify(data.users)}</p> */}
        </div>
    )
}
