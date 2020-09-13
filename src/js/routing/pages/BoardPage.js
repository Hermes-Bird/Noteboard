import { Board } from '../../core/Board';
import { storage } from '../../core/loacalStorage.functions';
import { createStore } from '../../redux/createStore';
import { initialState } from '../../redux/initialState';
import { rootReducer } from '../../redux/rootReducer';
import { ActivePage } from '../ActivePage';
import { Page } from '../Page';

export class BoardPage extends Page{
    constructor() {
        super()
        const currentStorage = ActivePage.getHash()

        const currentState = storage(currentStorage) || initialState
        console.log(storage(currentStorage))
        const store = createStore(rootReducer, currentState)
        storage(currentStorage, currentState)

        this.subscribe = store.subscribe(state => storage(currentStorage, state))
        this.board = new Board(store)
    }

    getRoot() {
        return this.board.$root.$el
    }

    destroy() {
        this.board.destroy()        
    }
}