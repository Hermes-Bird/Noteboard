export function createField() {
    return `
        <div class="board__note">
            <div class="note__header">
                <div class="note__title">Title</div>
                <div class="note-delete">&times;</div>
            </div>
            <div class="note__body" contenteditable>Yare Yare Daze</div>
        </div>
    `
}