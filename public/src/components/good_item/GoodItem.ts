import "./GoodItem.scss"
import Good from "../../../../src/components/good/Good"
import Config from "../../utility/render/Config"

/**
 * Good item view.
 * @param good - Good data
 */
const GoodItem = (good: Good): Config => ({
    class: "GoodItem",
    children: [
        {
            text: good.name
        },
        {
            text: good.cost
        },
        {
            text: String(good.number)
        }
    ]
})

export default GoodItem