import { BoardComponent } from '../../core/BoardComponent';
import { $ } from '../../dom/Dom';
import { changeBoardName, changeDate } from '../../redux/actions/actions';
import { ActivePage } from '../../routing/ActivePage';

export class Header extends BoardComponent {
    static componentClass() {
        return 'board__header'
    } 

    constructor(root, options) {
        super(root, {
            ...options,
            name: 'Header',
            listeners: ['click', 'input']
        })
        this.init()   
    }

    init() {
        super.init()
        const name = this.store.getState().boardName
        this.$root.html(`
            <input class="boardname" type="text" value="${name}">
                    
            <div class="header__panel">
                <button class="btn btn-add" data-type="add">
                    <i class="material-icons" aria-hidden="true">control_point</i>
                </button>

                <button class="btn btn-delete" data-type="delete">
                    <i class="material-icons" aria-hidden="true">delete_outline</i>
                </button>
                
                <button class="btn btn-exit" data-type="exit">
                    <i class="material-icons" aria-hidden="true">exit_to_app</i>
                </button>
            </div>
        `)
    }

    onClick(event) {
        const $target = $(event.target)
        if ($target.closest('[data-type="add"]')) this.__emit('header:add', Date.now())
        if ($target.closest('[data-type="exit"]')) {
            this.__dispatch(changeDate())
            window.location.hash = ''
        }
        if ($target.closest('[data-type="delete"')) {
            localStorage.removeItem(ActivePage.getHash())
            window.location.hash = ''
        } 
    }

    onInput(event) {
        const text = event.target.value
        this.__dispatch(changeBoardName({name: text}))
    }

    toHtml() {
        return this.$root.$el
    }
}