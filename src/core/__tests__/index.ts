import { getReferenceTitle, getEmptyValues } from '../index'

describe('getReferenceTitle', () => {
  it('should get the correct title', () => {
    const entry = {
      authorName: 'Carlos Santana',
      createdAt: '2020-09-18T22:51:03-07:00',
      id: 'a0c38fdc-0732-4a1a-b2f3-9430fd9c810b',
      modelName: 'Author',
      status: 'Draft'
    }

    const title = getReferenceTitle(entry)

    expect(title).toBe('Carlos Santana')
  })

  it('should get Unknown title', () => {
    const entry = {
      createdAt: '2020-09-18T22:51:03-07:00',
      id: 'a0c38fdc-0732-4a1a-b2f3-9430fd9c810b',
      modelName: 'Author',
      status: 'Draft'
    }

    const title = getReferenceTitle(entry)

    expect(title).toBe('Unknown')
  })
})

describe('#getEmptyValues', () => {
  it('should get all empty values', () => {
    const values = {
      firstName: '     ',
      lastName: 'foo',
      age: 20,
      email: ''
    }

    const expectedValues = {
      firstName: true,
      email: true
    }

    const emptyValues = getEmptyValues(values)

    expect(emptyValues).toEqual(expectedValues)
  })

  it('should get false if there is not empty values', () => {
    const values = {
      firstName: 'baz',
      lastName: 'foo',
      age: 20,
      email: 'foo@baz.com'
    }

    const emptyValues = getEmptyValues(values)

    expect(emptyValues).toBe(false)
  })

  it('should get just required empty values', () => {
    const values = {
      firstName: '',
      lastName: '',
      age: 20,
      email: ''
    }

    const emptyValues = getEmptyValues(values, ['firstName', 'email'])

    expect(emptyValues).toEqual({
      firstName: true,
      email: true
    })
  })
})
