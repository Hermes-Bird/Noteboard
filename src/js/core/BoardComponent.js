import { DomListener } from './DomListener'

export class BoardComponent extends DomListener {
    constructor($root, options) {
        super($root, options)
        this.store = options.store
        this.emiter = options.emiter
        this.subscribed = options.subscribed || []
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
        this.store.dispach(action)
    }

    onChange(changes) {
        console.log(`changes in ${this.name} => ${changes}`)
    }

    isWatching(key) {
        return this.subscribed.inclusdes(key)
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