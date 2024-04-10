const salutation = require('./salutation')

describe('Test for salutation', () => {
  test('Should return Hello, Caio', () => {
    const helloCaio = salutation.sayHello('Caio')
    expect(helloCaio).toBe('Hello, Caio')
    expect(helloCaio).toContain('Caio')
    expect([1,2,3,4,5]).toHaveLength(5)
  })
})