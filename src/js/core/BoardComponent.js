import { DomListener } from './DomListener'

export class BoardComponent extends DomListener {
    constructor($root, options) {
        super($root, options)
    }

    init() {
        super.init()
    }

    toHtml() {
        throw new Error(`To html method don't implemented in ${this.name}`)
    }

    destroy() {
        this.$root.html('')
    }
}