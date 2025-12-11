import { HistoryService } from '../src/services/HistoryService.js'

describe('HistoryService', () => {
  beforeAll(() => {
    global.localStorage = {
      store: {},
      getItem(key) {
        return this.store[key] || null
      },
      setItem(key, value) {
        this.store[key] = String(value)
      },
      removeItem(key) {
        delete this.store[key]
      },
      clear() {
        this.store = {}
      },
    }
  })

  beforeEach(() => {
    let store = {}

    global.localStorage = {
      getItem: (key) => store[key] || null,
      setItem: (key, value) => (store[key] = value),
      removeItem: (key) => delete store[key],
      clear: () => (store = {}),
    }
  })


  test('store and retrive data succesfully', () => {
    const history = new HistoryService('test-key')
    history.addUsedGift('Gift')

    const stored = history.getUsedGifts()

    expect(stored).toContain('Gift')
  });

  test('return empty array if there is no data', () => {
    const history = new HistoryService('test-key')

    expect(history.getUsedGifts()).toEqual([])
  })
})
