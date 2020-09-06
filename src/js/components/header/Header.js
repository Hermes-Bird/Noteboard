import { BoardComponent } from '../../core/BoardComponent';
import { $ } from '../../dom/Dom';

export class Header extends BoardComponent {
    static componentClass() {
        return 'board__header'
    } 

    constructor(root, options) {
        super(root, {
            ...options,
            name: 'Header',
            listeners: ['click']
        })
        this.init()   
    }

    init() {
        super.init()
        this.$root.html(`
            <input class="boardname" type="text" value="New Board">
                    
            <div class="header__panel">
                <button class="btn btn-add" data-type="add">
                    <i class="material-icons" aria-hidden="true">control_point</i>
                </button>

                <button class="btn btn-delete">
                    <i class="material-icons" aria-hidden="true">delete_outline</i>
                </button>
                
                <button class="btn btn-exit">
                    <i class="material-icons" aria-hidden="true">exit_to_app</i>
                </button>
            </div>
        `)
    }

    onClick(event) {
        const $target = $(event.target)
        if ($target.closest('[data-type="add"]')) this.__emit('header:add', Date.now()) 
    }

    toHtml() {
        return this.$root.$el
    }
}