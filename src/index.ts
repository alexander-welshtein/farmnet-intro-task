import "./index.scss"
import Renderer from "./render/Renderer"
import Application from "./components/application/Application"
import OrderManager from "./models/OrderManager"

document.body.appendChild(Renderer.render(Application()))

new OrderManager().initialize()