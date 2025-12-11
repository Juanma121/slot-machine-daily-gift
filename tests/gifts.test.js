import { gifts } from "../src/data/gifts";

describe('gifts dataset', () => {
  test('no empty', () => {
    expect(gifts.length).toBeGreaterThan(0)
  })

  test('all data has icon and description', () => {
    gifts.forEach(g => expect(g.icon !== null && g.description !== null))
  })
})
