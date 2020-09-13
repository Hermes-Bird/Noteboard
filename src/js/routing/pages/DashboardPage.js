import { createDashboardTable } from '../../components/dashboard/dashboard.functions';
import { storage, storageKeys } from '../../core/loacalStorage.functions';
import { $ } from '../../dom/Dom';
import { Page } from '../Page';

export class DashboardPage extends Page {
    getRoot() {
        const boards = storageKeys().filter(el => el.includes('board')).map(el => {
            const state = storage(el)
            return {
                id: el.split(':')[1],
                name: state.boardName,
                date: Date.parse(state.date)
            }
        })
        return $.create('div', 'dashboard').html(`
            <header class="elpage__header">
                <h1>Cool program bob</h1>
            </header>

            <div class="elpage__body">
                <div class="boardcreator">
                    <a href="#board:${Date.now()}" class="bc__boardcard">
                        <div class="bc__plus">+</div>
                        <h3>New board</h3>
                    </a>
                </div>

                <div class="boardlist">
                    ${boards.length > 0 ? createDashboardTable(boards) : '<p>No boards yet</p>'}
                </div>
            </div>
        `).$el
    }
}