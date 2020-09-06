import { Board } from './js/core/Board'
import { storage } from './js/core/utils'
import { createStore } from './js/redux/createStore'
import { initialState } from './js/redux/initialState'
import { rootReducer } from './js/redux/rootReducer'
import './sass/index.scss'

const currentState = storage('board') || initialState

const store = createStore(rootReducer, currentState)

const subscribe = store.subscribe(state => {
    storage('board', state)
})

const board = new Board('#app', store)

board.render()