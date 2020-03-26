import "./OrderItem.scss"
import Config from "../../utility/render/Config"
import Order from "../../../../src/components/order/Order"
import Events from "../../controller/Events"

const OrderItem = (order: Order): Config => ({
    class: "OrderItem",
    children: [
        {
            class: "pointer"
        },
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
    ],
    onRender: element => {
        Events.order.view.ORDER_ITEM_SELECTED.subscribe(selectedOrder => {
            if (selectedOrder.order_id == order.order_id) {
                element.classList.add("OrderItem-selected")
            } else {
                element.classList.remove("OrderItem-selected")
            }
        })

        element.onclick = () => {
            Events.order.view.ORDER_ITEM_SELECTED.notify(order)
        }
    }
})

export default OrderItem