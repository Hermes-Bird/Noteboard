export function createToolbar() {
    return `
        <div class="toolbar__leftside">
            <div class="btn active">
                <i class="material-icons">format_align_left</i>
            </div>

            <div class="toolbar__item btn">
                <i class="material-icons">format_align_center</i>
            </div>

            <div class="toolbar__item btn">
                <i class="material-icons">format_align_right</i>
            </div>

            <div class="toolbar__item btn">
                <i class="material-icons">format_bold</i>
            </div>

            <div class="toolbar__item btn">
                <i class="material-icons">format_italic</i>
            </div>

            <div class="toolbar__item btn">
                <i class="material-icons">format_underline</i>
            </div>
        </div>

        <div class="toolbar__rightside">
            <div class="color-chose textcolor-changer">
                <label for="text-color">Text</label>
                <input type="color" value="#000000" id="text-color">
            </div>

            <div class="color-chose bgcolor-changer">
                <label for="bg-color">Background</label>
                <input type="color" value="#eeeeee" id="bg-color">
            </div>
        </div>
    `
}