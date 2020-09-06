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
                if (!isEqual(this.prevState, state)) {
                    components.forEach(component => {
                        if (component.isWathcing(key)) component.stateChanged(state)
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