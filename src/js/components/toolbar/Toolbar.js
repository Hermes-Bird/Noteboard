import { BoardComponent } from '../../core/BoardComponent';
import { parseButtonStyle } from '../../core/utils';
import { $ } from '../../dom/Dom';
import { createToolbar } from './toolbar.template';

export class Toolbar extends BoardComponent {
    static componentClass() {
        return 'board__toolbar'
    } 

    constructor(root, options) {
        super(root, {
            ...options,
            name: 'Toolbar',
            listeners:['click', 'change'],
            subscribers: ['currentNote']
        })
        this.init()
    }
    
    init() {
        super.init()
        this.rerender = this.rerender.bind(this)
        this.__on('field:style-change', this.rerender)
    }

    rerender() {
        const state = this.store.getState()
        const id = state.currentNote
        if (id) this.$root.html(createToolbar(state.notes[id].styles))
    }

    toHtml() {
        return this.$root.html(createToolbar()).$el
    }

    onStateChange(id) {
        if (id) {
            const state = this.store.getState()
            this.$root.html(createToolbar(state.notes[id].styles))
        } else this.$root.html(createToolbar())
    }

    onClick(event) {
        const $target = $(event.target).closest('[data-value]')
        if ($target) {
            this.__emit('toolbar:style-change', parseButtonStyle($target.data('value')))
        }
    }

    onChange(event) {
        const $target = $(event.target)
        if ($target.data('type') === 'color-picker' ) {
            this.__emit('toolbar:style-change', {[$target.data('style')]: $target.$el.value}) 
        }
    }
}