export default interface Config {
    tag?: string
    id?: string
    class?: string
    text?: string
    html?: string
    attrs?: {}
    style?: {}
    children?: Config[]
    onRender?: ((element: HTMLElement, config?: Config) => void)
}
