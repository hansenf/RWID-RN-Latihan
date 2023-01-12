const sum = require('./sum')

test('sum sukses!', () => {
    expect(sum(1, 2)).toBe(3)
})