import "./GoodContainer.scss"
import Config from "../../render/Config"
import Events from "../../controller/Events"
import ElementUtil from "../../render/ElementUtil"
import GoodItem from "../good_item/GoodItem"

const GoodContainer = (): Config => ({
    class: "GoodContainer",
    children: [
        {
            class: "header",
            children: [
                {
                    text: "Name"
                },
                {
                    text: "Cost"
                },
                {
                    text: "Number"
                }
            ]
        },
        {
            class: "content",
            onRender: element => {
                Events.order.model.ORDER_LOADED.subscribe(order => {
                    ElementUtil.clear(element)
                    ElementUtil.createChildren(element, ...order.goods.map(good => GoodItem(good)))
                })
            }
        }
    ]
})

export default GoodContainer