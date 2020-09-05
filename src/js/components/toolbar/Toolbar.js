import { BoardComponent } from '../../core/BoardComponent';
import { createToolbar } from './toolbar.template';

export class Toolbar extends BoardComponent {
    static componentClass() {
        return 'board__toolbar'
    } 

    constructor(root) {
        super(root, {
            name: 'Toolbar',
            listeners:[]
        })
        this.init()
    }

    init() {
        super.init()
        this.$root.html(createToolbar())
    }

    toHtml() {
        return this.$root.$el
    }
}