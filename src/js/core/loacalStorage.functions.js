export function storage(key, value) {
    if (!value) return JSON.parse(localStorage.getItem(key))
    localStorage.setItem(key, JSON.stringify(value))
}

export function storageKeys() {
    const arr = []
    for (let i = 0; i < localStorage.length; i++) {
        arr[i] = localStorage.key(i)
    }
    return arr
}