import { BoardComponent } from '../../core/BoardComponent';
import { $ } from '../../dom/Dom';
import { addNoteAction, 
         changeCoords, 
         changeCurrentNote, 
         changeStyles, 
         changetText, 
         removeNoteAction 
        } from '../../redux/actions/actions';
import { defaultNoteStyles } from '../constants';
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
            listeners:['mousedown', 'click', 'input'],
        })
        this.init()   
    }

    init() {
        super.init()
        
        this.$root.html(createField(this.store.getState().notes))

        this.addNote = this.addNote.bind(this)
        this.changeStyle = this.changeStyle.bind(this)
        this.changeColorStyle = this.changeColorStyle.bind(this)
        this.toolbarStyleChanged = this.toolbarStyleChanged.bind(this)

        this.__on('toolbar:style-change', this.toolbarStyleChanged)
        this.__on('modal:add', this.addNote)
    }

    changeStyle(style) {
        this.selection.find('[data-type="text"]').style[style.field] = style.value
        this.__dispatch(changeStyles(style))
    }

    changeColorStyle(style) {
        const key = Object.keys(style)[0]
        this.selection.style(key, style[key])
        this.__dispatch(changeStyles({
            field: key,
            value: style[key]
        }))
    }

    toolbarStyleChanged(style) {
        if (this.selection) {
            console.log(style)
            if (style.value) this.changeStyle(style)
            else this.changeColorStyle(style)
            this.__emit('field:style-change')
        }
    }
    
    addNote(title) {
        const id = Date.now()
        this.$root.insertHtml('beforeend', createNote({
            id,
            title,
            styles: defaultNoteStyles
        }))
        const $note = this.$root.lastChild()
        this.__dispatch(addNoteAction({id, title}))
        this.selectNote($note)
    }
    
    toHtml() {
        return this.$root.$el
    }

    selectNote($note) {
        if (this.selection) this.selection.rmClass('selected')
        this.selection = $note
        this.__dispatch(changeCurrentNote($note.data('id')))
        this.selection.addClass('selected')
    }
    
    async onMousedown(event) {
        const $target = $(event.target)
        const $note = $target.closest('[data-type="note"]') 
        // move handler
        if ($note) {
            this.selectNote($note)
            const coord = await moveHandler(this.$root ,$note, event)
            this.__dispatch(changeCoords({
                id: $note.data('id'),
                coord
            }))
        }
    }

    onClick(event) {
        const $target = $(event.target)
        if ($target.data('type') === 'delete') {
           this.rmNote($target.closest('[data-type="note"]'))
        }
    }

    rmNote($note) {
        this.__dispatch(removeNoteAction({id: $note.data('id')}))
        $note.remove()
        this.selection = null
    }

    onInput(event) {
        const text = event.target.textContent
        const id = $(event.target).closest('[data-type="note"]').data('id')
        this.__dispatch(changetText({text, id}))
    }
}