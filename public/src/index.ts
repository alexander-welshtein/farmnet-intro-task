import "./index.scss"
import Renderer from "./utility/render/Renderer"
import Application from "./components/application/Application"
import OrderManager from "./models/OrderManager"
import {Event} from "./controller/Event"

// Enable log for events iterations
Event.enableDebug()

// Render root component
document.body.appendChild(Renderer.render(Application()))

// Load order data (simple comment for this task)
OrderManager.getInstance().initialize().then()