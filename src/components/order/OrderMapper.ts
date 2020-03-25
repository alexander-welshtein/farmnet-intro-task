import Order from "./Order"
import DatabaseProvider from "../../systems/DatabaseProvider"

const OrderMapper = {
    getAll: (): Promise<Order[]> => DatabaseProvider.globalQuery(`
            SELECT
                oh.order_header_id AS "order_id",
                g.cost * oc.number AS "sum",
                to_char(oh.time, 'YYYY-MM-DD HH24:MI:SS') AS "time",
                c.name,
                c.email,
                oh.city
            FROM order_header AS oh
            LEFT JOIN customer AS c ON c.customer_id = oh.customer_id
            LEFT JOIN order_content AS oc ON oc.order_header_id = oh.order_header_id
            LEFT JOIN good AS g ON g.good_id = oc.good_id
        `).then(res => res.rows)
}

export default OrderMapper