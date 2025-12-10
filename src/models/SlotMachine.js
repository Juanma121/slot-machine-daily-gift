export class SlotMachine {
  constructor(reel, historyService) {
    this.reel = reel
    this.historyService = historyService
  }

  spin(){
    const allSymbols = this.reel.getAllSymbols()

    if (!allSymbols || allSymbols.length === 0) {
      return null
    }

    let used = this.historyService.getUsedGifts()
    if (used.length >= allSymbols.length) {
      this.historyService.resetUsedGifts()
      used = []
    }

    const MAX_NUMBER_OF_SPINS = 100
    let result = null
    let spins = 0

    while (result === null && spins < MAX_NUMBER_OF_SPINS) {
      const candidate = this.reel.spin()
      spins +=1

      if (candidate && !used.includes(candidate.icon)) {
        result = candidate
      }
    }

    if (result === null) {
      this.historyService.resetUsedGifts()
      used = []

      const fallback = this.reel.spin()
      if (!fallback) {
        return null
      }
      result = fallback
    }

    this.historyService.addUsedGift(result)
    return result
  }
}
