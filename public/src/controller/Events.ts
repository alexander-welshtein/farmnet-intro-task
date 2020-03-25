import Order from "../../../src/components/order/Order"
import {Event} from "./Event"

const Events = {
    order: {
        model: {
            ORDERS_LOADED: new Event<Order[]>("order.model.ORDERS_LOADED"),
            ORDER_LOADED: new Event<Order>("order.model.ORDER_LOADED")
        },
        view: {
            ORDER_ITEM_SELECTED: new Event<Order>("order.model.ORDER_ITEM_SELECTED")
        }
    }
}

export default Events