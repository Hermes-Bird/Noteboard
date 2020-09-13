export class EventEmiter {
    constructor() {
        this.listeners = {}
    }

    subscribe(eventName, fn) {
        if (!this.listeners[eventName]) this.listeners[eventName] = []
        this.listeners[eventName].push(fn)
    }

    emit(eventName, data) {
        this.listeners[eventName].forEach(fn => fn(data))
    }

    destroy() {
        this.listeners = {}
    }
}