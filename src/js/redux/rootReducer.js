import { removeKey } from '../core/utils'
import * as types from './actions/types'

export function rootReducer(action, state) {
    let id
    switch (action.type) {
        case types.INIT: 
        return {
            ...state,
            currentNote: ''
        }
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
            id = action.data.id.toString()
            const notes = removeKey(state.notes, id)
            return {
                ...state,
                currentNote: id === state.currentNote ? '' : id,
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
                        styles: {
                            ...state.notes[id].styles,
                            ...action.data.coord
                        }
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
        case types.CHANGE_CURRENT_NOTE: 
            id = action.data
            return {
                ...state,
                currentNote: id
            }
        case types.CHANGE_STYLES: 
            id = state.currentNote
            return {
                ...state,
                notes: {
                    ...state.notes,
                    [id]: {
                        ...state.notes[id],
                        styles: {
                            ...state.notes[id].styles,
                            [action.data.field]: action.data.value
                        }
                    }
                }
            }
        case types.CHANGE_BOARD_NAME:
            return {
                ...state,
                boardName: action.data.name
            }
        case types.CHANGE_LEAVE_DATE: 
            return {
                ...state,
                date: action.data
            }
        default: return state 
    }
}