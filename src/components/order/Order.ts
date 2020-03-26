import Good from "../good/Good"

/**
 * Defines order data.
 */
export default interface Order {
    order_id: number
    sum: string
    time: string
    name: string
    email: string
    city: string
    goods: Good[]
}