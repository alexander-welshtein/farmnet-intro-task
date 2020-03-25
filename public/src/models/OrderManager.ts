import Order from "./Order"
import Events from "../controller/Events"

export default class OrderManager {

    private orders: Order[] = []

    constructor() {}


    public initialize() {
        this.orders = [
            {
                order_id: 1,
                sum: "250",
                time: "21.12.2019 13:00",
                name: "Katlyn Samuels",
                email: "katlynsamuels@gmail.com",
                city: "Virginia"
            },
            {
                order_id: 1,
                sum: "400",
                time: "21.12.2019 13:00",
                name: "Devante Rosas",
                email: "devanterosas@gmail.com",
                city: "Atlanta"
            }
        ]

        Events.order.model.ORDER_LOADED.notify(this.orders)
    }

}