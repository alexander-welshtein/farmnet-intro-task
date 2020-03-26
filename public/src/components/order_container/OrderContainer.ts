import "./OrderContainer.scss"
import Config from "../../utility/render/Config"
import Events from "../../controller/Events"
import ElementUtil from "../../utility/render/ElementUtil"
import OrderItem from "../order_item/OrderItem"
import AnimationMagic from "../../utility/AnimationMagic"

/**
 * Order list view.
 */
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
                Events.order.model.ORDERS_LOADED.subscribe(orders => {
                    ElementUtil.createChildren(element, ...orders.map(order => OrderItem(order)))
                })

                AnimationMagic.restartAnimation(element, "GoodContainer-refresh-animated")
            }
        }
    ]
})

export default OrderContainer