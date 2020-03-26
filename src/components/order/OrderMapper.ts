import Order from "./Order"
import DatabaseProvider from "../../systems/DatabaseProvider"

/**
 * Mapping for orders.
 */
const OrderMapper = {
    getAll: (): Promise<Order[]> => DatabaseProvider.globalQuery(`
            SELECT
                oh.order_header_id AS "order_id",
                sum(g.cost * oc.number) AS "sum",
                to_char(oh.time, 'YYYY-MM-DD HH24:MI:SS') AS "time",
                c.name,
                c.email,
                oh.city
            FROM order_header AS oh
            LEFT JOIN customer AS c USING(customer_id)
            LEFT JOIN order_content AS oc USING(order_header_id)
            LEFT JOIN good AS g USING(good_id)
            GROUP BY oh.order_header_id, c.name, c.email
        `).then(res => res.rows),

    get: (id: string): Promise<Order> => DatabaseProvider.globalQuery(`
        SELECT
            oh.order_header_id AS "order_id",
            sum(g.cost * oc.number) AS "sum",
            to_char(oh.time, 'YYYY-MM-DD HH24:MI:SS') AS "time",
            c.name,
            c.email,
            oh.city,
            json_agg(json_build_object('name', g.name, 'cost', g.cost, 'number', oc.number)) AS "goods"
        FROM order_header AS oh
        LEFT JOIN customer AS c USING(customer_id)
        LEFT JOIN order_content AS oc USING(order_header_id)
        LEFT JOIN good AS g USING(good_id)
        WHERE oh.order_header_id = $1
        GROUP BY oh.order_header_id, c.name, c.email
    `, [id]).then(res => res.rows[0])
}

export default OrderMapper