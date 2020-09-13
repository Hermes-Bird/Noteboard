export class ActivePage {
    static getHash() {
        return window.location.hash.replace('#', '')
    }

    static getParams() {
        return this.getHash().split(':')[1]
    }
}