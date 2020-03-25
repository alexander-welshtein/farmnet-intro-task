export class Event<T> {
    private static debugged: boolean

    private readonly handlers: ((data ?: T) => void)[]


    constructor(private name: string) {
        this.handlers = []
    }


    public static enableDebug() {
        this.debugged = true
    }

    public static disableDebug() {
        this.debugged = false
    }

    public static isDebug(): boolean {
        return this.debugged
    }


    public notify(data ?: T) {
        if (Event.debugged) {
            console.groupCollapsed(this.name)

            console.info(data)
            console.info(this.handlers)

            console.groupEnd()
        }

        for (let handler of this.handlers) {
            handler(data)
        }
    }

    public subscribe(handler: ((data ?: T) => void)) {
        this.handlers.push(handler)
    }
}