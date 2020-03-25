import express = require("express");
import OrderMapper from "./OrderMapper"

const OrderController ={
    route: (): express.Router => {
        const router = express.Router()

        router.get("", async (req, res) => {
            try {
                const orders = await OrderMapper.getAll()

                res.json(orders)
            } catch (e) {
                console.log(e)
                res.status(500).end()
            }
        })

        return router
    }
}

export default OrderController