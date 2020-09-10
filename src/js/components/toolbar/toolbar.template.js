function createButton(buttonState) {
    return `
        <div class="btn ${buttonState.active ? 'active' : ''}" data-value="${buttonState.value}">
            <i class="material-icons">${buttonState.type}</i>
        </div>
    `
}

function createColorPikers(state = {}) {
    return `
        <div class="color-chose textcolor-changer">
            <label for="text-color">Text</label>
            <input type="color" value="${state.color || '#000000'}" data-type="color-picker" data-style="color">
        </div>

        <div class="color-chose bgcolor-changer">
            <label for="bg-color">Background</label>
            <input type="color" value="${state.backgroundColor || '#eeeeee'}" data-type="color-picker" data-style="backgroundColor">
        </div>
    `
}



export function createToolbar(state = {}) {
    const leftButtons = [
        {
            active: state.textAlign === 'left',
            type: 'format_align_left',
            value: 'textAlign:left'           
        },
        {
            active: state.textAlign === 'center',
            type: 'format_align_center',
            value: `textAlign:${state.textAlign !== 'center' ? 'center' : 'left'}`           
        },
        {
            active: state.textAlign === 'right',
            type: 'format_align_right',
            value: `textAlign:${state.textAlign !== 'right' ? 'right' : 'left'}` 
        },
        {
            active: state.fontWeight === 'bold',
            type: 'format_bold',
            value: `fontWeight:${state.fontWeight !== 'bold' ? 'bold' : 'normal'}`            
        },
        {
            active: state.fontStyle === 'italic',
            type: 'format_italic',
            value: `fontStyle:${state.fontStyle !== 'italic' ? 'italic' : 'normal'}`            
        },
        {
            active: state.textDecoration === 'underline',
            type: 'format_underline',
            value: `textDecoration:${state.textDecoration !== 'underline' ? 'underline' : 'none'}`            
        }
    ]
    
    return `
        <div class="toolbar__leftside">
        ${leftButtons.map(state => createButton(state)).join('')}
        </div>
        
        <div class="toolbar__rightside">
            ${createColorPikers(state)}
        </div>
    `
}