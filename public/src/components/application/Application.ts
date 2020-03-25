import "./Application.scss"
import Config from "../../render/Config"
import OrderContainer from "../order_container/OrderContainer"
import OrderViewer from "../order_viewer/OrderViewer"

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