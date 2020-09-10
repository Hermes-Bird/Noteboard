import { $ } from '../../dom/Dom'

export function moveHandler($root, $note, event) {
    return new Promise(resolve => {
        const parentRect = $($note.$el.parentElement).getRect()
        const rect = $note.getRect()
        
        // current padding
        const min = 16

        const maxTop = parentRect.height - rect.height - min
        const maxLeft = parentRect.width - rect.width - min


        const startX = event.clientX
        const startY = event.clientY
        
        window.onmousemove = e => {
            const deltaX = e.clientX - startX
            const deltaY = e.clientY - startY

            let left = Math.round(rect.x) + deltaX
            let top = Math.round(rect.y - parentRect.y) + deltaY

            $note.$el.style.left = `${left}px`
            $note.$el.style.top = `${top}px`
            

            if (min > left) $note.$el.style.left = `${min}px`
            if (maxLeft < left) $note.$el.style.left = `${maxLeft}px`

            if (min > top) $note.$el.style.top = `${min}px`
            if (maxTop < top) $note.$el.style.top = `${maxTop}px`
        }

        window.onmouseup = e => {
            window.onmousemove = null
            window.onmousedown = null
            resolve({
                top: $note.$el.style.top,
                left: $note.$el.style.left
            })
        }
    })
}