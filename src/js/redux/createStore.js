export function createStore(rootReducer, initialState) {
    let state = rootReducer({type: '__INIT__'}, {...initialState})
    let subscribers = []
    return {
        subscribe(fn) {
            subscribers.push(fn)
            return {
                unsub() {
                    subscribers = subscribers.filter(el => fn !== el )
                }
            }
        },
        dispatch(action) {
            state = rootReducer(action, state)
            subscribers.forEach(callBack => callBack(state))
        },
        getState() {
            return {...state}
        }
    }
}