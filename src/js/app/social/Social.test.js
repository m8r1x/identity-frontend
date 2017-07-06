import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import TestUtils from 'react-dom/test-utils'
import Social from './Social'

describe('Social', () => {
  let instance, a
  const socialProps = {
    fetched: false
  }
  
  describe('renders', () => {
    beforeEach(() => {
      instance = TestUtils.renderIntoDocument(
        <MemoryRouter>
          <Social social={socialProps} />
        </MemoryRouter>
      )
      a = TestUtils.scryRenderedDOMComponentsWithTag(instance, 'a')
    })

    test('3 default link tags', () => {
      expect(a.length).toBe(3)
    })

    test('links to 404', () => {
      a.forEach(link => expect(link.getAttribute('href')).toBe('/404'))
    })
  })
})