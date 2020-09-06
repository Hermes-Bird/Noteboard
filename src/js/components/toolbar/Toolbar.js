import { BoardComponent } from '../../core/BoardComponent';
import { createToolbar } from './toolbar.template';

export class Toolbar extends BoardComponent {
    static componentClass() {
        return 'board__toolbar'
    } 

    constructor(root, options) {
        super(root, {
            ...options,
            name: 'Toolbar',
            listeners:[]
        })
        this.init()
    }

    init() {
        super.init()
    }

    toHtml() {
        return this.$root.html(createToolbar()).$el
    }
}