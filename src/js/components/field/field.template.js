export function createNote(state = {}) {
    console.log(state)
    const currentId = (!state.id) ? Date.now() : state.id
    const text = state.text || ''
    return `
        <div class="board__note" data-type="note" data-id="${currentId}">
            <div class="note__header">
                <div class="note-title">${state.title}</div>
                <div class="note-delete">&times;</div>
            </div>
            <div class="note__body" contenteditable>${text}</div>
        </div>
    `
}


export function createField(notes = []) {
    return notes.map(noteState => createNote(noteState)).join('')
}