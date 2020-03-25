import "./OrderContainer.scss"
import Config from "../../render/Config"
import Events from "../../controller/Events"
import ElementUtil from "../../render/ElementUtil"
import OrderItem from "../order_item/OrderItem"

const OrderContainer = (): Config => ({
    class: "OrderContainer",
    children: [
        {
            class: "header",
            children: [
                {
                    text: "Time"
                },
                {
                    text: "Price"
                },
                {
                    text: "Customer"
                },
                {
                    text: "E-mail"
                },
                {
                    text: "City"
                }
            ]
        },
        {
            class: "content",
            onRender: element => {
                Events.order.model.ORDER_LOADED.subscribe(orders => {
                    ElementUtil.createChildren(element, ...orders.map(order => OrderItem(order)))
                })
            }
        }
    ]
})

export default OrderContainer