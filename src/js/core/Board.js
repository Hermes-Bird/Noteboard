import { $ } from '../dom/Dom'
import { Field } from '../components/field/Field'
import { Header } from '../components/header/Header'
import { Toolbar } from '../components/toolbar/Toolbar'

export class Board {
    constructor(selector) {
        this.$root = $(selector)
        const components = [
            Header,
            Toolbar,
            Field
        ]
        this.components = []
        this.init(components)
    }

    init(components) {  
        components.forEach(Component => {
            const root = $.create('div', Component.componentClass())
            this.components.push(new Component(root))
        })
    }

    render() {
        this.components.forEach(component => {
            this.$root.append(component.toHtml())
        })
    }

    destroy() {
        this.components.forEach(component => {
            component.destroy()
        })
        this.$root.html('')
    }
} 