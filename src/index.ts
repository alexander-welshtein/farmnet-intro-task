import * as express from "express"
import DatabaseProvider from "./systems/DatabaseProvider"
import LoggingMiddleware from "./middlewares/LogginMiddleware"
import OrderController from "./components/order/OrderController"

// Quick initialization of database connection
DatabaseProvider.initialize({
    host: "localhost",
    port: 5432,
    database: "farmnet_intro_task",
    user: "postgres",
    password: "5115"
})

// Initialization of global client for working with a database
DatabaseProvider.initializeGlobalClient().then(() => {
    const application = express()

    // Static files serving
    application.use(express.static("dist/public"))

    application.use(LoggingMiddleware)

    // Add order routing
    application.use("/order", OrderController.route())

    application.listen(9000, () => {
        console.info("Server starting")
    })
})

