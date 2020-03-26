import "./GoodContainer.scss"
import Config from "../../utility/render/Config"
import Events from "../../controller/Events"
import ElementUtil from "../../utility/render/ElementUtil"
import GoodItem from "../good_item/GoodItem"
import AnimationMagic from "../../utility/AnimationMagic"

/**
 * Good list view.
 */
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

                    AnimationMagic.restartAnimation(element, "GoodContainer-refresh-animated")
                })
            }
        }
    ]
})

export default GoodContainer