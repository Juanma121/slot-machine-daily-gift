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

  addUsedGift(icon) {
    const current = this.getUsedGifts();

    if (typeof icon !== 'string' || !icon) {
      return;
    }

    if (!current.includes(icon)) {
      current.push(icon);
      localStorage.setItem(this.key, JSON.stringify(current));
    }
  }

  resetUsedGifts() {
    localStorage.removeItem(this.key)
  }
}
