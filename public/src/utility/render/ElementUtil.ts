import Config from "./Config"
import Renderer from "./Renderer"

export default class ElementUtil {
    static createChildren(element: HTMLElement, ...configs: Config[]) {
        for (const config of configs) {
            element.appendChild(Renderer.render(config))
        }
    }

    static deleteChild(element: HTMLElement, index: number) {
        element.removeChild(element.children.item(index))
    }

    static clear(element: HTMLElement) {
        while (element.hasChildNodes()) {
            element.removeChild(element.firstChild)
        }
    }

    static refresh(element: HTMLElement, config: Config) {
        element.parentElement.replaceChild(Renderer.render(config), element)
    }
}
