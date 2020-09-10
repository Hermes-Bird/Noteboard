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

export function camelToDashCase(str) {
    let reg = /[A-Z]/g.exec(str)
    while (reg) {
        str = str.replace(reg[0], `-${reg[0].toLowerCase()}`)
        reg = /[A-Z]/g.exec(str)
    }
    return str
}


export function removeKey(obj, targetKey) {
    const newObj = {}
    Object.keys({...obj}).forEach(key => {
        if (key !== targetKey) newObj[key] = obj[key]
    })
    return newObj
}

export function parseButtonStyle(str) {
    const arr = str.split(':')
    return {
        field: arr[0],
        value: arr[1]
    }
}