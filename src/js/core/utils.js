export function capitalize(str) {
    const arr = str.split(' ')
    return arr.map(word => word.replace(word[0], word[0].toUpperCase()) ).join(' ')
}