import "./Application.scss"
import Config from "../../render/Config"
import OrderContainer from "../order_container/OrderContainer"

const Application = (): Config => ({
    class: "Application",
    children: [
        OrderContainer()
    ]
})

export default Application