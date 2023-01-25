import { types } from '../types/types.js'

export const storageReducer = (state, actions) => {
    console.log(actions)

    switch (actions.type) {
        case types.all:
            return { ...state, filter: actions.type }

        case types.today:
            return { users: actions.payload, filter: actions.type }

        case types.week:
            return { users: actions.payload, filter: actions.type }

        case types.month:
            return { users: actions.payload, filter: actions.type }

        case types.pay_dataPhone:
            return { users: actions.payload, filter: actions.type }

        case types.pay_link:
            return { users: actions.payload, filter: actions.type }

        default:
            return state;
    }
}
