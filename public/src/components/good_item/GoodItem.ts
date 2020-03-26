import "./GoodItem.scss"
import Good from "../../../../src/components/good/Good"
import Config from "../../utility/render/Config"

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