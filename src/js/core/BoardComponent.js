import { DomListener } from './DomListener'

export class BoardComponent extends DomListener {
    constructor($root, options) {
        super(options)
        this.$root = $root
    }

    toHtml() {
        throw new Error(`To html method don't implemented in ${this.name}`)
    }

    destroy() {
        this.$root.html('')
    }
}