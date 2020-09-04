class DomElement {
    constructor(root) {
        if (typeof root === 'string') {
            this.$el = document.querySelector(root)
        } else this.$el = root
    }

    append(html) {
        this.$el.append(html)
    }

    on(eventName, fn) {
        this.$el.addEventListener(eventName, fn)
    }

    rmListener(eventName, fn) {
        this.$el.removeEventListener(eventName, fn)
    }
    
    html(layout) {
        if (layout || typeof layout === 'string') {
            this.$el.innerHTML = layout
            return this
        }
        else return this.$el.outerHTML
    }

    addClass(str) {
        this.$el.classList.add(str)
    }

    rmClass(str) {
        this.$el.classList.remove(str)
    }

    findAll(selector) {
        return Array.from(this.$el.querySelectorAll(selector))
            .map(el => $(el))

    }

    find(selector) {
        return this.$el.querySelector(selector)
    }

    data(field) {
        return this.$el.dataset[field]
    }

    matches(selector) {
        return this.$el.matches(selector)
    }
}

export function $(root) {
    return new DomElement(root)
}

$.create = (nodeName, clases) => {
    const el = document.createElement(nodeName)
    el.classList = clases;
    return $(el)
}