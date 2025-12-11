import { SlotMachine } from '../src/models/SlotMachine.js'
import { Reel } from '../src/models/Reel.js'

class MockHistoryService {
  constructor() {
    this.used = []
     this.resetCalled = false
  }

  addUsedGift(icon) {
    this.used.push(icon)
  }

  getUsedGifts() {
    return this.used
  }

  resetUsedGifts() {
    this.used = []
    this.resetCalled = true
  }
}

describe('SlotMachine', () => {
  test('if there is no symbols return null', () => {
    const symbols = []
    const reel = new Reel(symbols)
    const history = new MockHistoryService()
    const sm = new SlotMachine(reel, history)

    const result = sm.spin()
    expect(result).toEqual(null)
  })

  test('if symbols are all used reset', () => {
    const symbols = [{ label: 'Gift A', icon: 'A' }]
    const reel = new Reel(symbols)
    const history = new MockHistoryService()
    const sm = new SlotMachine(reel, history)

    sm.spin()
    sm.spin()
    expect(history.resetCalled).toBe(true)
  })

  test('uses reel to generate result and store in history', () => {
    const symbols = [{ label: 'Gift A', icon: 'A' }]
    const reel = new Reel(symbols)
    const history = new MockHistoryService()
    const sm = new SlotMachine(reel, history)

    const result = sm.spin();

    expect(result).toEqual({ label: 'Gift A', icon: 'A' })
    expect(history.getUsedGifts()).toContain('A')
  });

  test('do not repeat icon until there is no more left', () => {
    const symbols = [
      { label: 'Gift A', icon: 'A' },
      { label: 'Gift B', icon: 'B' },
    ];
    const reel = new Reel(symbols)
    const history = new MockHistoryService()
    const sm = new SlotMachine(reel, history)

    const first = sm.spin()
    const second = sm.spin()

    expect(first.icon).not.toBe(second.icon)
    expect(history.getUsedGifts().sort()).toEqual(['A', 'B'].sort())
  });
});
