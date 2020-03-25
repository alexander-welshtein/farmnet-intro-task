
import {Pool, PoolClient, PoolConfig, QueryConfig, QueryResult} from "pg"

export default class DatabaseProvider {
    private static pool: Pool

    public static connectionDebug = false
    public static queryDebug = false

    private static globalClient: PoolClient;

    static initialize(config: PoolConfig) {
        this.pool = new Pool(config)

        this.pool.on("connect", () => {
            if (this.connectionDebug) {
                console.log("Client connected")
                this.printConnectionInfo()
            }
        })

        this.pool.on("remove", () => {
            if (this.connectionDebug) {
                console.log("Client disconnected")
                this.printConnectionInfo()
            }
        })

        this.pool.on("error", (err) => {
            if (this.connectionDebug) {
                console.error(err)
                this.printConnectionInfo()
            }
        })

        console.info("Database connection initialized")
    }

    private static printConnectionInfo() {
        console.info("%d, %d, %d, %d", this.pool.getMaxListeners(), this.pool.totalCount, this.pool.waitingCount, this.pool.idleCount)
    }

    public static async initializeGlobalClient() {
        this.globalClient = await this.pool.connect()
        console.info("Global client initialized")
    }

    public static query(client: PoolClient, query: string | QueryConfig, values?: any[]): Promise<QueryResult> {
        if (this.queryDebug) {
            console.info(query)
            console.info(values)
        }

        return client.query(query, values).catch(reason => {
            console.error(reason.message)
            throw reason
        })
    }

    public static globalQuery(query: string | QueryConfig, values?: any[]): Promise<QueryResult> {
        return this.query(this.globalClient, query, values)
    }

    public static connect(): Promise<PoolClient> {
        return this.pool.connect()
    }

    public static disconnect(client: PoolClient) {
        client.release()
    }
}