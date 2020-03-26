import "./index.scss"
import Renderer from "./utility/render/Renderer"
import Application from "./components/application/Application"
import OrderManager from "./models/OrderManager"
import {Event} from "./controller/Event"

Event.enableDebug()

document.body.appendChild(Renderer.render(Application()))

OrderManager.getInstance().initialize().then()