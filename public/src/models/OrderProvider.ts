import Order from "../../../src/components/order/Order"
import HttpProvider from "../utility/net/HttpProvider"

export default class OrderProvider {

    public static getAll(): Promise<Order[]> {
        return HttpProvider.get("http://localhost:9000/order").then(response => response.json())
    }

    public static get(id: number): Promise<Order> {
        return HttpProvider.get(`http://localhost:9000/order/${id}`).then(response => response.json())
    }

}