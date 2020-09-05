function createNote(state = {}) {
    const currentId = (!state.id) ? Date.now() : state.id
    return `
        <div class="board__note" data-type="note" data-id="${currentId}">
            <div class="note__header">
                <div class="note__title">Title</div>
                <div class="note-delete">&times;</div>
            </div>
            <div class="note__body" contenteditable>Yare Yare Daze</div>
        </div>
    `
}


export function createField(params) {
    return createNote(params)
}