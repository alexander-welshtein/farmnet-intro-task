/**
 * Defines the main functionality of interaction with the server.
 */
export default class HttpProvider {
    static get(url: string): Promise<Response> {
        return fetch(url, {
            method: "GET"
        })
    }

    static put(url: string, content?: any): Promise<Response> {
        return fetch(url, {
            method: "PUT",
            body: content,
            headers: {
                "Content-Type": "application/json"
            }
        })
    }

    static post(url: string, content?: any): Promise<Response> {
        return fetch(url, {
            method: "POST",
            body: content,
            headers: {
                "Content-Type": "application/json"
            }
        })
    }

    static delete(url: string): Promise<Response> {
        return fetch(url, {
            method: "DELETE"
        })
    }
}