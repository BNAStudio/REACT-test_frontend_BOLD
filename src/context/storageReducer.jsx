import { types } from '../types/types.js'

export const storageReducer = (state, actions) => {
    // console.log(actions)

    switch (actions.filter) {
        case types.all:
            return { ...state, users: actions.payload, filter: actions.type }

        case types.today:
            return { ...state, users: actions.payload, filter: actions.type }

        case types.week:
            return { ...state, users: actions.payload, filter: actions.type }

        case types.month:
            return { ...state, users: actions.payload, filter: actions.type }

        case types.dataPhone:
            return { ...state, users: actions.payload, filter: actions.type }

        case types.link:
            return { ...state, users: actions.payload, filter: actions.type }

        default:
            return state;
    }
}
