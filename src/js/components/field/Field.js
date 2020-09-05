import { BoardComponent } from '../../core/BoardComponent';
import { $ } from '../../dom/Dom';
import { createField } from './field.template';
import { moveHandler } from './moveHandler';

export class Field extends BoardComponent {
    static componentClass() {
        return 'board__board'
    } 

    constructor(root) {
        super(root, {
            name: 'Field',
            listeners:['mousedown']
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

    onMousedown(event) {
        const $target = $(event.target)
        const $note = $target.closest('[data-type="note"]') 
        // move handler
        if ($note) moveHandler(this.$root ,$note, event)
    }
}