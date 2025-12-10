export class DomBindings {
  constructor({ reelElementId, resultElementId, leverButtonId }){
    this.reelElement = document.getElementById(reelElementId);
    this.resultElement = document.getElementById(resultElementId);
    this.leverButton = document.getElementById(leverButtonId);
  }
}
