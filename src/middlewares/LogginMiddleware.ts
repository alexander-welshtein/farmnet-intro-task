import * as express from "express"

/**
 * Simple logging middleware
 */
const LoggingMiddleware = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.info(new Date().toLocaleString() + " " + req.method + " " + req.url)
    if (req.body) {
        console.log(req.body)
    }
    next()
}

export default LoggingMiddleware