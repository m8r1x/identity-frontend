import React from 'react'
import createReactClass from 'create-react-class'
import TestUtils from 'react-dom/test-utils'

import User from './User'

describe('User', () => {
  let instance, h1, p
  const userProps = {
    fetched: false
  }

  let Wrapper = createReactClass({
    render: function() {
      return <User user={userProps} />
    }
  })
  
  describe('renders', () => {
    beforeEach(() => {
      instance = TestUtils.renderIntoDocument(
        <Wrapper />
      )
      h1 = TestUtils.findRenderedDOMComponentWithTag(instance, 'h1')
      p = TestUtils.findRenderedDOMComponentWithTag(instance, 'p')
    })

    test('"x doe" as default name', () => {
      expect(h1.innerHTML).toBe('x doe')
    })

    test('"unknown" as default career', () => {
      expect(p.innerHTML).toBe('unknown')
    })
  })
})