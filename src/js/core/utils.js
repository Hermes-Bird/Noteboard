export function capitalize(str) {
    const arr = str.split(' ')
    return arr.map(word => word.replace(word[0], word[0].toUpperCase()) ).join(' ')
}

export function isEqual(a, b) {
    if (typeof a === 'object' && typeof b === 'object') {
        let flag = true
        Object.keys(a).forEach(key => flag = !flag ? flag : a[key] === b[key])
    } else return a === b
}

export function storage(key, value) {
    if (!value) return JSON.parse(localStorage.getItem(key))
    localStorage.setItem(key, JSON.stringify(value))
}