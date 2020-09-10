import { DomListener } from './DomListener'

export class BoardComponent extends DomListener {
    constructor($root, options) {
        super($root, options)
        this.store = options.store
        this.emiter = options.emiter
        this.subscribers = options.subscribers || []
    }

    __on(eventName, fn) {
        this.emiter.subscribe(eventName, fn)
    }

    __emit(eventName, data) {
        this.emiter.emit(eventName, data)
    }

    __subscribe(fn) {
        this.store.subscribe(fn)
    }

    __dispatch(action) {
        this.store.dispatch(action)
    }

    onStateChange(changes) {
        console.log(`changes in ${this.name} => ${changes}`)
    }

    isWatching(key) {
        return this.subscribers.includes(key)
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