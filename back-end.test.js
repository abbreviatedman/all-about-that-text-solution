const {
  biggify,
  nasafy,
  reversify,
  titleify,
  crazify,
} = require('./back-end.js')


describe('biggify', () => {
  it(`takes in a number and adds 9000 to it`, () => {
    expect(biggify(-100)).toBe(8900);
    expect(biggify(100)).toBe(9100);
  })
})

describe('nasafy', () => {
  it(`returns an array of numbers from the given number down to 1, followed by the string 'Blast off!'`, () => {
    expect(nasafy(3)).toEqual([3, 2, 1, 'Blast off!']);
    expect(nasafy(5)).toEqual([5, 4, 3, 2, 1, 'Blast off!']);
  })

  it(`still blasts off if the number is below 1`, () => {
    expect(nasafy(0)).toEqual(['Blast off!'])
    expect(nasafy(-1000)).toEqual(['Blast off!'])
  })
})

describe('reversify', () => {
  it(`returns the given string reversed`, () => {
    expect(reversify('hello')).toBe('olleh')
    expect(reversify('colin jaffe')).toBe('effaj niloc')
    expect(reversify('How are you today?')).toBe('?yadot uoy era woH')
  })
});

describe('titleify', () => {
  it(`returns the given string with the first letter and the first letter after every space capitalized`, () => {
    expect(titleify('hi there')).toBe('Hi There')
    expect(titleify('how are your feels today?')).toBe('How Are Your Feels Today?')
  })

  it(`handles previously uppercased words`, () => {
    expect(titleify('what even IS this??')).toBe('What Even Is This??');
    expect(titleify(`it's the BEST is what it is!`)).toBe(`It's The Best Is What It Is!`)
  })
});

describe('crazify', () => {
  it(`uppercases every even-numbered letter of the given string`, () => {
    expect(crazify('mesuara')).toBe('mEsUaRa')
    expect(crazify('kaleziq')).toBe('kAlEzIq')
  })
  
  it(`handles previously uppercased letters`, () => {
    expect(crazify('MESUARA')).toBe('mEsUaRa')
    expect(crazify('KALEZIQ')).toBe('kAlEzIq')
  })

  it(`doesn't count a space as a letter for counting purposes`, () => {
    expect(crazify('Messi is the best')).toBe('mEsSi Is ThE bEsT')
  })
});