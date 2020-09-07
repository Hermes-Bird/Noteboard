import { camelToDashCase } from '../../core/utils'
import { defaultNoteStyles } from '../constants'

export function createNote(state = {}) {
    const text = state.text || ''
    
    const styles = Object.keys(defaultNoteStyles).map(style => {
        const str = `${camelToDashCase(style)}: ${state.styles[style] || defaultNoteStyles[style]};`
        return str
    }).join('')

    return `
        <div class="board__note" data-type="note" data-id="${state.id}" style="${styles}">
            <div class="note__header">
                <div class="note-title">${state.title}</div>
                <div class="note-delete" data-type="delete">&times;</div>
            </div>
            <div class="note__body" contenteditable>${text}</div>
        </div>
    `
}


export function createField(notes = {}) {
    const notesArray = Object.keys(notes).map(key => {
        return {
            id: key,
            ...notes[key]
        }
    })
    return notesArray.map(noteState => createNote(noteState)).join('')
}