import express = require("express");

const application = express()

application.use(express.static("public/dist"))

application.listen(9000, () => {
    console.info("Server starting")
})