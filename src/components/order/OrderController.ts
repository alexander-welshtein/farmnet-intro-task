import express = require("express")
import OrderMapper from "./OrderMapper"

const OrderController ={
    route: (): express.Router => {
        const router = express.Router()

        router.get("", async (req, res) => {
            try {
                res.json(await OrderMapper.getAll())
            } catch (e) {
                console.log(e)
                res.status(500).end()
            }
        })

        router.get("/:id", async (req, res) => {
            try {
                res.json(await OrderMapper.get(req.params.id))
            } catch (e) {
                console.log(e)
                res.status(500).end()
            }
        })

        return router
    }
}

export default OrderController