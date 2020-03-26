import Config from "./Config"

export function replace(configA: Config, configB: Config): Config {
    for (const key in configB) {
        // noinspection JSUnfilteredForInLoop
        configA[key] = configB[key]
    }
    return configA
}

export function extend(configA: Config, configB: Config): Config {
    for (const key in configB) {
        if (key in configA) {
            // noinspection JSUnfilteredForInLoop
            switch (key) {
                case "tag":
                    configA.tag = configB.tag
                    break
                case "id":
                    configA.id += configB.id
                    break
                case "class":
                    configA.class += " " + configB.class
                    break
                case "text":
                    configA.text += configB.text
                    break
                case "html":
                    configA.html += configB.html
                    break
                case "attrs":
                    for (const attrKey in configB.attrs) {
                        configA[attrKey] = configB[attrKey]
                    }
                    break
                case "style":
                    for (const styleKey in configB.style) {
                        configA[styleKey] = configB[styleKey]
                    }
                    break
                case "children":
                    configA.children.push(...configB.children)
                    break
                case "onRender":
                    const onRenderA = configA.onRender
                    const onRenderB = configB.onRender

                    configA.onRender = (element, config) => {
                        onRenderA(element, config)
                        onRenderB(element, config)
                    }
            }
        } else {
            // noinspection JSUnfilteredForInLoop
            configA[key] = configB[key]
        }
    }

    return configA
}
