import { BoardComponent } from '../../core/BoardComponent';
import { $ } from '../../dom/Dom';

export class Modal extends BoardComponent {
    static componentClass() {
        return 'board__modal'
    }

    constructor(root) {
        super(root, {
            listeners: ['click'],
            name: 'Modal'
        })
        this.init()
    }

    init() {
        super.init()
        this.$root.html(`
            <div class="modal__overlay" data-type="modal">
                <div class="modal__window" data-type="modal">
                    <div class="modal-header">
                        <div class="modal-title">
                            Enter note title
                        </div>
                        <div class="modal-close" data-type="close">
                            &times;
                        </div>
                    </div>
                    <div class="modal-body">
                        <input data-type="title" type="text" name="" id="" value="" placeholder="Title">
                    </div>
                    <div class="modal-footer">
                        <button class="btn" data-type="submit">Ok</button>
                    </div>
                </div>
            </div>
        `)
        
        // TEST
        window.act = this.activeModal.bind(this)
        window.unact = this.unactiveModal.bind(this)
    }

    activeModal() {
        const toActive = this.$root.findAll('[data-type="modal"]')
        toActive.forEach(el => el.addClass('active'))
    }

    unactiveModal() {
        const toUnactive = this.$root.findAll('[data-type="modal"]')
        toUnactive.forEach(el => el.rmClass('active'))
        return this.$root.find('[data-type="title"]').value || 'Title'
    }

    toHtml() {
        return this.$root.$el
    }

    onClick(event) {
        const $target = $(event.target)
        if ($target.data('type') === 'submit' || $target.data('type') === 'close') {
            const title = this.unactiveModal()
        }
    }
}