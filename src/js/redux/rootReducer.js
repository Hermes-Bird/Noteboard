import { removeKey } from '../core/utils'
import * as types from './actions/types'

export function rootReducer(action, state) {
    let id
    switch (action.type) {
        case types.ADD_NOTE: 
            id = action.data.id
            return {
                ...state,
                notes: {
                    ...state.notes,
                    [id]: { 
                        title: action.data.title,
                        styles: {}
                    }
                }
            }
        case types.REMOVE_NOTE: 
            id = action.data.id
            const notes = removeKey(state.notes, id)
            return {
                ...state,
                notes
            }
        case types.CHANGE_COORDS:
            id = action.data.id
            return {
                ...state,
                notes: {
                    ...state.notes,
                    [id]: {
                        ...state.notes[id],
                        styles: {...action.data.coord}
                    }
                }
            }
        case types.CHANGE_TEXT: 
            id = action.data.id
            return {
                ...state,
                notes: {
                    ...state.notes,
                    [id]: {
                        ...state.notes[id],
                        text: action.data.text
                    }
                }
            }
        default: return state 
    }
}