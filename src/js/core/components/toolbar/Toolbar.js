import { BoardComponent } from '../../BoardComponent';
import { createToolbar } from './toolbar.template';

export class Toolbar extends BoardComponent {
    static componentClass() {
        return 'board__toolbar'
    } 

    constructor(root) {
        super(root)
        this.init()
    }

    init() {
        this.$root.html(createToolbar())
    }

    toHtml() {
        return this.$root.$el
    }
}