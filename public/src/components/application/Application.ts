import "./Application.scss"
import Config from "../../utility/render/Config"
import OrderContainer from "../order_container/OrderContainer"
import OrderViewer from "../order_viewer/OrderViewer"

/**
 * Defines the root structure of the application.
 */
const Application = (): Config => ({
    class: "Application",
    children: [
        {
            class: "workspace",
            children: [
                {
                    class: "header",
                    text: "FARMNET PLUS"
                },
                OrderContainer()
            ]
        },
        OrderViewer()
    ]
})

export default Application