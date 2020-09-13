import { $ } from '../dom/Dom'
import { Field } from '../components/field/Field'
import { Header } from '../components/header/Header'
import { Toolbar } from '../components/toolbar/Toolbar'
import { Modal } from '../components/modal/Modal'
import { EventEmiter } from './EventEmiter'
import { StoreSubscriber } from '../redux/StoreSubscriber'
import { changeDate } from '../redux/actions/actions'

export class Board {
    constructor(store) {
        this.$root = $.create('div', 'board')
        const components = [
            Header,
            Toolbar,
            Field,
            Modal
        ]
        this.store = store
        this.emiter = new EventEmiter(),
        this.subscriber = new StoreSubscriber(store)
        this.components = []
        this.init(components)
    }

    init(components) {
        const componetOptions = {
            emiter: this.emiter,
            store: this.store
        }

        components.forEach(Component => {
            const root = $.create('div', Component.componentClass())
            this.components.push(new Component(root, componetOptions))
        })

        this.subscriber.subscribeComponents(this.components)
        
        this.components.forEach(component => {
            this.$root.append(component.toHtml())
        })
    }

    destroy() {
        this.components.forEach(component => component.destroy())
        this.subscriber.unsubscribe()
        this.emiter.destroy()
        this.$root.html('')
    }
} 