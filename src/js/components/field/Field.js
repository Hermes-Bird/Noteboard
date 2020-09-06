import { BoardComponent } from '../../core/BoardComponent';
import { $ } from '../../dom/Dom';
import { createField, createNote } from './field.template';
import { moveHandler } from './moveHandler';

export class Field extends BoardComponent {
    static componentClass() {
        return 'board__board'
    } 

    constructor(root, options) {
        super(root, {
            ...options,
            name: 'Field',
            listeners:['mousedown'],
        })
        this.init()   
    }

    init() {
        super.init()
        
        this.$root.html(createField())

        this.addNote = this.addNote.bind(this)
        this.__on('modal:add', this.addNote)
    }
    
    addNote(title) {x
        this.$root.insertHtml('beforeend', createNote({
            title,
            id: Date.now()
        }))
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