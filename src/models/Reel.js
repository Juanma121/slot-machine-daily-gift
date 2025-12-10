import { gifts } from "../data/gifts.js"
export class Reel {
  constructor(symbols = gifts) {
    this.symbols = symbols
  }

  getAllSymbols() {
    return this.symbols
  }

  spin(){
    if (!this.symbols.length){
      return null
    }

    const index = Math.floor(Math.random() * this.symbols.length)
    return this.symbols[index]
  }
}
