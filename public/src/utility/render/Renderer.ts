import Config from "./Config"

export default class Renderer {
    static render(config: Config): HTMLElement {
        if (!config.tag || config.tag == "") {
            config.tag = "div"
        }

        const element = document.createElement(config.tag)

        for (const property in config) {
            // noinspection JSUnfilteredForInLoop
            switch (property) {
                case "class":
                    // noinspection JSUnfilteredForInLoop
                    element.className = config[property]
                    break
                case "text":
                    // noinspection JSUnfilteredForInLoop
                    element.innerText = config[property]
                    break
                case "html":
                    // noinspection JSUnfilteredForInLoop
                    element.innerHTML = config[property]
                    break
                case "attrs":
                    // noinspection JSUnfilteredForInLoop
                    for (const attr in config[property]) {
                        // noinspection JSUnfilteredForInLoop
                        element.setAttribute(attr, config[property][attr])
                    }
                    break
                case "style":
                    // noinspection JSUnfilteredForInLoop
                    for (const style in config[property]) {
                        if (style in element.style) {
                            // noinspection JSUnfilteredForInLoop
                            element.style[style] = config[property][style]
                        } else {
                            console.error(`Undefined style property: ${style}`)
                        }
                    }
                    break
                case "children":
                    // noinspection JSUnfilteredForInLoop
                    for (const childConfig of config[property]) {
                        element.appendChild(this.render(childConfig))
                    }
                    break
                default:
                    if (property in element) {
                        // noinspection JSUnfilteredForInLoop
                        element[property] = config[property]
                    }
            }
        }

        if (config.onRender) {
            config.onRender(element, config)
        }

        return element
    }
}
