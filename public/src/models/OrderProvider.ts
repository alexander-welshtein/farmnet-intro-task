import Order from "../../../src/components/order/Order"
import HttpProvider from "../net/HttpProvider"

export default class OrderProvider {

    public static getAll(): Promise<Order[]> {
        return HttpProvider.get("http://localhost:9000/order").then(response => response.json())
    }

}