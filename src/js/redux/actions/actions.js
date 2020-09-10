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


export function changeCurrentNote(data) {
    return {
        type: types.CHANGE_CURRENT_NOTE,
        data
    }
}

export function changeStyles(data) {
    return {
         type: types.CHANGE_STYLES,
         data
    }
}

export function changeBoardName(data) {
    return {
        type: types.CHANGE_BOARD_NAME,
        data
    }
}