const listeners = {}

export class EventEmiter {
    subscribe(eventName, fn) {
        if (!listeners[eventName]) listeners[eventName] = []
        listeners[eventName].push(fn)
    }

    emit(eventName, data) {
        listeners[eventName].forEach(fn => fn(data))
    }
}