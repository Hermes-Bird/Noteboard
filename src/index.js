import { BoardPage } from './js/routing/pages/BoardPage'
import { DashboardPage } from './js/routing/pages/DashboardPage'
import { Router } from './js/routing/Router'
import './sass/index.scss'

new Router('#app', {
    dashboard: DashboardPage,
    board: BoardPage
})