import { BoardComponent } from '../../BoardComponent';

export class Header extends BoardComponent {
    static componentClass() {
        return 'board__header'
    } 

    constructor(root) {
        super(root)
        this.init()   
    }

    init() {
        this.$root.html(`
            <input class="boardname" type="text" value="New Board">
                    
            <div class="header__panel">
                <button class="btn btn-add">
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

    toHtml() {
        return this.$root.$el
    }
}