export default class OrderProvider {
    private static instance: OrderProvider

    private constructor() {}


    public static getInstance(): OrderProvider {
        return OrderProvider.instance || new OrderProvider()
    }


    

}