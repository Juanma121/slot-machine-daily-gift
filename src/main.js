console.log('Iniciado')

import { gifts } from "./data/gifts.js"
import { Reel } from "./models/Reel.js"
import { SlotMachine } from "./models/SlotMachine.js"
import { HistoryService } from "./services/HistoryService.js"
import { DomBindings } from "./ui/DomBindings.js"
import { UiController } from "./ui/UiController.js"

function startApp(){
  // 1. Services
  const historyService = new HistoryService('slots-history')

  // 2. Model
  const reel = new Reel(gifts)
  const slotMachine = new SlotMachine(reel, historyService)

  // 3. UI
  const domBindings = new DomBindings({
    reelElementId: 'slot-reel',
    resultElementId: 'slot-result',
    leverButtonId: 'slot-lever',
  })

  const uiController = new UiController(domBindings, slotMachine)

  // 4. Iniciar UI

  uiController.init()
}

startApp()
