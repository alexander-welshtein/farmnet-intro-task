import Events from "../controller/Events"
import OrderProvider from "./OrderProvider"

export default class OrderManager {

    private static instance: OrderManager


    private constructor() {}


    public static getInstance(): OrderManager {
        return OrderManager.instance || (OrderManager.instance = new OrderManager())
    }


    public async initialize() {
        const orders = await OrderProvider.getAll()

        Events.order.model.ORDER_LOADED.notify(orders)
    }

}