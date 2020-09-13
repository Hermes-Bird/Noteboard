export function createDashboardTable(boards = []) {
    return `
        <div class="boardlist__header">
            <div class="bl-name">
                Name
            </div>
            <div class="bl-time">
                Time
            </div>
        </div>
        ${boards.map(board => createDbItem(board)).join('')}
    `
}

function createDbItem(board) {
    return `
    <div class="boardlist__item">
        <a href="#board:${board.id}" class="item-link">
            <div class="board-name">
                ${board.name}
            </div>
            <div class="boad_time">
                ${(new Date(board.date).toLocaleDateString())}
                ,
                ${(new Date(board.date).toLocaleTimeString())}
            </div>
        </a>
    </div>
    `
}