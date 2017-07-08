import React from 'react'
import PropTypes from 'prop-types'

const User = ({ user }) => {
  let name = 'x doe'
  let career = 'unknown'

  if (user.fetched) {
    name = user.user.name
    career = user.user.career
  }

  return (
    <header>
      <span className="avatar">
        <img src="/assets/images/avatar.jpg" alt="" />
      </span>
      <h1>{name}</h1>
      <p>{career}</p>
    </header>
  )
}

User.propTypes = {
  user: PropTypes.object.isRequired
}

export default User