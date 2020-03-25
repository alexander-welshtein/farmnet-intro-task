import "./OrderViewer.scss"
import Config from "../../render/Config"
import Events from "../../controller/Events"
import GoodContainer from "../good_container/GoodContainer"

const OrderViewer = (): Config => ({
    class: "OrderViewer",
    children: [
        {
            class: "header",
            onRender: element => {
                Events.order.view.ORDER_ITEM_SELECTED.subscribe(order => {
                    element.innerText = `Order №${order.order_id}`
                })
            }
        },
        GoodContainer()
    ]
})

export default OrderViewer