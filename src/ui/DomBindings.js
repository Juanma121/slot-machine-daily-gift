export class DomBindings {
  constructor({ reelElementId, resultElementId, leverButtonId, descriptionPriceId }){
    this.reelElement = document.getElementById(reelElementId);
    this.resultElement = document.getElementById(resultElementId);
    this.leverButton = document.getElementById(leverButtonId);
    this.priceDescription = document.getElementById(descriptionPriceId)
  }
}
