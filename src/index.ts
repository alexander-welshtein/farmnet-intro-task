import express = require("express");
import DatabaseProvider from "./systems/DatabaseProvider"
import LoggingMiddleware from "./middlewares/LogginMiddleware"
import OrderController from "./components/order/OrderController"

DatabaseProvider.initialize({
    host: "localhost",
    port: 5432,
    database: "farmnet_intro_task",
    user: "postgres",
    password: "5115"
})

DatabaseProvider.initializeGlobalClient().then(() => {
    const application = express()

    application.use(express.static("public/dist"))
    application.use(LoggingMiddleware)

    application.use("/order", OrderController.route())

    application.listen(9000, () => {
        console.info("Server starting")
    })
})

