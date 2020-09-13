import { $ } from '../dom/Dom';
import { ActivePage } from './ActivePage';

export class Router {
    constructor(root, routes) {
        this.$root = $(root)
        this.routes = routes
        this.init()
    }

    init() {
        this.changePageHandler = this.changePageHandler.bind(this)
        this.changePageHandler()
        window.addEventListener('hashchange', this.changePageHandler)
    }

    changePageHandler() {
        this.clearPage()
        const page = ActivePage.getHash().includes('board') 
                    ? this.routes.board 
                    : this.routes.dashboard
        this.currentPage = new page()
        this.$root.append(this.currentPage.getRoot())
    }

    clearPage() {
        if (this.currentPage) this.currentPage.destroy()
        this.$root.html('')
    }

    destroy() {
        this.clearPage()
        window.removeEventListener('hashchange', this.changePageHandler)
    }
}