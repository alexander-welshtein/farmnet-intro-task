import Order from "../../../src/components/order/Order"
import HttpProvider from "../utility/net/HttpProvider"

/**
 * Defines requests for working with orders.
 */
export default class OrderProvider {

    private static readonly URL = "http://localhost:9000/"


    public static getAll(): Promise<Order[]> {
        return HttpProvider.get(`${this.URL}order`).then(response => response.json())
    }

    public static get(id: number): Promise<Order> {
        return HttpProvider.get(`${this.URL}order/${id}`).then(response => response.json())
    }

}