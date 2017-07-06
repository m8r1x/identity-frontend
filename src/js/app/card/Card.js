import React from 'react'
import PropTypes from 'prop-types'

import User from '../user/User'
import Social from '../social/Social'

const Card = ({ user, social }) => (
  <section id="main">
    <User user={user}/>
    <Social social={social}/>
  </section>
)

Card.propTypes = {
  user: PropTypes.object.isRequired,
  social: PropTypes.object.isRequired
}

export default Card