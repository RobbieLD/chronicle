export const sentance = {
    mounted(el: HTMLElement): void {
        if (el.innerText.length) {
            el.innerText = el.innerText[0].toUpperCase() + el.innerText.substring(1, el.innerText.length)
        }

    }
}
