import { isEqual } from '../core/utils'

export class StoreSubscriber {
    constructor(store) {
        this.store = store
        this.subscriber = null
        this.prevState = {}
    }

    subscribeComponents(components) {
        this.prevState = this.store.getState()

        this.subscriber = this.store.subscribe(state => {
            Object.keys(state).forEach(key => {
                if (!isEqual(this.prevState[key], state[key])) {
                    components.forEach(component => {
                        if (component.isWatching(key)) component.onStateChange(state[key])                        
                    })
                }
            })
            this.prevState = this.store.getState()
        })
    }

    unsubscribe() {
        if (this.subscriber) this.subscriber.usnub()
    }
}