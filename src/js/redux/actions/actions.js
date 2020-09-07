import * as types from './types'

export function addNoteAction(data) {
    return {
        type: types.ADD_NOTE,
        data
    }
}

export function removeNoteAction(data) {
    return {
        type: types.REMOVE_NOTE,
        data
    }
}

export function changeCoords(data) {
    return {
        type: types.CHANGE_COORDS,
        data
    }
}

export function changetText(data) {
    return {
        type: types.CHANGE_TEXT,
        data
    }
}