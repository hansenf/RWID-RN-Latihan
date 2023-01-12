const min = require('./min')

test('min sukses!', () => {
    expect(min(1, 2)).toBe(-1)
})