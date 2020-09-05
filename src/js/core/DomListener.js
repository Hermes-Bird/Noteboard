import { capitalize } from './utils'

export class DomListener {
    constructor($root, options) {
        this.$root = $root
        this.name = options.name
        this.listeners = options.listeners || []
    }

    init() {
        // add event listeners by given strings
        this.listeners.forEach(listen => {
            const methodName = `on${capitalize(listen)}`
            
            if (this[methodName]) {
                // if methodName for event exist
                this[methodName] = this[methodName].bind(this)
                this.$root.on(listen, this[methodName])
            } else {
                // if methodName not exist
                throw new Error(`Not implemented method ${methodName} in ${this.name} component`)
            }
        })
    }

    removeListeners() {
        this.listeners.forEach(listen => {
            this.$root.rmListener(listen, this[`on${capitalize(listen)}`])
        })
    }
}