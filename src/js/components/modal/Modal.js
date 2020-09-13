import { BoardComponent } from '../../core/BoardComponent';
import { $ } from '../../dom/Dom';

export class Modal extends BoardComponent {
    static componentClass() {
        return 'board__modal'
    }

    constructor(root, options) {
        super(root, {
            ...options,
            listeners: ['click', 'keydown'],
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
        
        this.activeModal = this.activeModal.bind(this)
        this.__on('header:add', this.activeModal)
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
        if ($target.data('type') === 'submit') {
            // get title from modal and emit modal add event
            const title = this.unactiveModal()
            this.__emit('modal:add', title)
        } else if ($target.data('type') === 'close') {
            // just close modal
            this.unactiveModal()
        }
    }

    onKeydown(event) {
        if (event.key === 'Enter') {
            const title = this.unactiveModal()
            this.__emit('modal:add', title)
        }
    }
}