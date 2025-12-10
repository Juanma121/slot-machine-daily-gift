export class HistoryService {
  constructor(key = "slots-history") {
    this.key = key
  }

  getUsedGifts() {
    const raw = localStorage.getItem(this.key)
    if (!raw) {
      return []
    }

    try {
      return JSON.parse(raw)
    } catch {
      return []
    }
  }

  addUsedGift(gift) {
    const current = this.getUsedGifts()
    if (!current.includes(gift.icon)) {
      current.push(gift.icon)
      localStorage.setItem(this.key, JSON.stringify(current))
    }
  }

  resetUsedGifts() {
    localStorage.removeItem(this.key)
  }
}
