import { Reel } from '../src/models/Reel.js';

describe('Reel', () => {
  test('always return a symbol from the array', () => {
    const symbols = ['A', 'B', 'C'];
    const reel = new Reel(symbols);

    const result = reel.spin();

    expect(symbols).toContain(result);
  });

  test('spin never return undefined if array has elements', () => {
    const reel = new Reel(['X']);
    expect(reel.spin()).toBe('X');
  });
});
