import { camelToDashCase } from '../../core/utils'
import { defaultNoteStyles } from '../constants'

export function createNote(state = {}) {
    const text = state.text || ''
    
    const noteStyles = []
    
    const styles = Object.keys(defaultNoteStyles).map(style => {
        if (style === 'left' || style === 'top' || style === 'color' || style === 'backgroundColor') {
            noteStyles.push(`${camelToDashCase(style)}:${state.styles[style]};`)
            return ''
        }
        const str = `${camelToDashCase(style)}: ${state.styles[style] || defaultNoteStyles[style]} ;`
        return str
    }).join('')

    return `
        <div class="board__note" data-type="note" data-id="${state.id}" style="${noteStyles.join('')}">
            <div class="note__header">
                <div class="note-title">${state.title}</div>
                <div class="note-delete" data-type="delete">&times;</div>
            </div>
            <div class="note__body" data-type="text" contenteditable style="${styles}">${text}</div>
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