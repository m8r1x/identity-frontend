import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const Button = ({ text, link }) => (
  <ul className="actions">
    <li><Link to={link} className="button">{text}</Link></li>
  </ul>
)

export default Button

Button.propTypes = {
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
}