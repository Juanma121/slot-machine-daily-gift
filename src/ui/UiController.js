export class UiController {
  constructor(domBindings, slotMachine) {
    this.dom = domBindings
    this.slotMachine = slotMachine
  }

  init() {
    this.dom.leverButton.addEventListener('click', ()=> {
      const result = this.slotMachine.spin()

      if (!result) {
        this.dom.resultElement.textContent = 'No quedan detalles disponibles 😅';
        return;
      }

      this.dom.resultElement.textContent = result.icon;
    })
  }
}
