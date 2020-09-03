import { BoardComponent } from '../../BoardComponent';
import { createField } from './field.template';

export class Field extends BoardComponent {
    static componentClass() {
        return 'board__board'
    } 

    constructor(root) {
        super(root)
        this.init()   
    }

    init() {
        this.$root.html(createField())
    }

    toHtml() {
        return this.$root.$el
    }
}