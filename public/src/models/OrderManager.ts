import Events from "../controller/Events"
import OrderProvider from "./OrderProvider"

export default class OrderManager {

    private static instance: OrderManager


    private constructor() {}


    public static getInstance(): OrderManager {
        return OrderManager.instance || (OrderManager.instance = new OrderManager())
    }


    public async initialize() {
        Events.order.view.ORDER_ITEM_SELECTED.subscribe(async selectedOrder => {
            const order = await OrderProvider.get(selectedOrder.order_id)

            Events.order.model.ORDER_LOADED.notify(order)
        })

        Events.order.model.ORDERS_LOADED.notify(await OrderProvider.getAll())
    }

}