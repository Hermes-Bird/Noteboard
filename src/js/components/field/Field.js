import { BoardComponent } from '../../core/BoardComponent';
import { createField } from './field.template';

export class Field extends BoardComponent {
    static componentClass() {
        return 'board__board'
    } 

    constructor(root) {
        super(root, {
            name: 'Field',
            listeners:['click']
        })
        this.init()   
    }

    init() {
        super.init()
        this.$root.html(createField())
    }

    toHtml() {
        return this.$root.$el
    }

    onClick(event) {
        console.log(event)
    }
}