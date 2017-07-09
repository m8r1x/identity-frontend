import React from 'react'
import PropTypes from 'prop-types'

import Image from './Image'

const User = ({ user }) => {
  let name = 'x doe'
  let career = 'unknown'

  if (user.fetched) {
    name = user.user.name
    career = user.user.career
  }

  return (
    <header>
      <Image image="avatar.jpg" />
      <h1>{name}</h1>
      <p>{career}</p>
    </header>
  )
}

User.propTypes = {
  user: PropTypes.object.isRequired
}

export default User