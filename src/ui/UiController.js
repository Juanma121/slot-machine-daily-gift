export class UiController {
  constructor(domBindings, slotMachine) {
    this.dom = domBindings
    this.slotMachine = slotMachine
  }

  spinWithAnimation() {
    if (!this.dom.leverButton || !this.dom.reelElement) return

    this.dom.reelElement.classList.add('spinning')
    this.dom.leverButton.disabled = true

    setTimeout(() => {
      const result = this.slotMachine.spin();
      this.dom.resultElement.textContent = result.icon ?? '🚫'
      this.dom.priceDescription.textContent = result.description ?? 'Algo se rompió'

      this.dom.reelElement.classList.remove('spinning')
      this.dom.leverButton.disabled = false
    }, 500)
  }


  init() {
    this.dom.leverButton.addEventListener('click', () => {
      this.spinWithAnimation()
    });
  }
}
