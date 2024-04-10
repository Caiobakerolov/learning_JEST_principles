const calc = require('./calculator')

describe('Test for calculator', () => {
  test('sum 2 and 2 should result in 4', () => {
    const mySum = calc.sum(2, 2)  
    expect(mySum).toBe(4)  
  })  
  test('multiplication 3 and 3 should result in 9', () => {
    const myMultiplication = calc.multiplication(3, 3)  
    expect(myMultiplication).toBe(9)
  })
  test('division 6 and 3 should result in 2', () => {
    const myDivision = calc.division(6, 3)
    expect(myDivision).toBe(2)
  })
})

