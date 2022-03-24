import {  searchCharacter,filterAlfa } from '../src/data.js';

const objChacact = [
  {
    "name": "Taeko Okajima",
  },

  {
    "name": "Mr. Okajima",
  },

  {
    "name": "Grandmother Okajima",
  }
]
describe('test searchCharacter', () =>{
  it('is a function', () =>{
    expect(typeof searchCharacter).toBe('function')
  })

  it('returns searchCharacter', () => {
    expect(searchCharacter(objChacact, "Taeko Okajima")).toEqual([
      {
        "name": "Taeko Okajima",
      }
    ]);
  });
});

describe('test filteAz', () =>{
  it('is a function', () =>{
    expect(typeof filterAlfa).toBe('function')
  })

  it('returns filterAz', () => {
    expect(filterAlfa(objChacact,"a-z")).toEqual([
      {
        "name": "Grandmother Okajima",
      },

      {
        "name": "Mr. Okajima",
      },

      {"name": "Taeko Okajima",
      }
    ]);
  });
});

describe('test filterZa', () =>{
  it('is a function', () =>{
    expect(typeof filterAlfa).toBe('function')
  })

  it('returns filterZa', () => {
    expect(filterAlfa(objChacact,"z-a")).toEqual([
      {
        "name": "Taeko Okajima",
      },

      {
        "name": "Mr. Okajima",
      },

      {
        "name": "Grandmother Okajima",
      }
    ]);
  });
});
