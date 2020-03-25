import "./OrderItem.scss"
import Config from "../../render/Config"
import Order from "../../models/Order"

const OrderItem = (order: Order): Config => ({
    class: "OrderItem",
    children: [
        {
            text: order.time
        },
        {
            text: order.sum
        },
        {
            text: order.name
        },
        {
            text: order.email
        },
        {
            text: order.city
        }
    ]
})

export default OrderItem