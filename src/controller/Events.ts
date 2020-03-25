import Order from "../models/Order"
import {Event} from "./Event"

const Events = {
    order: {
        model: {
            ORDER_LOADED: new Event<Order[]>("order.model.ORDER_LOADED")
        }
    }
}

export default Events