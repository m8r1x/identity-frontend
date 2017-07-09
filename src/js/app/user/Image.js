import React from 'react'
import PropTypes from 'prop-types'

const Image = ({ image }) => (
  <span className="avatar">
    <img src={'/assets/images/'+image} alt="" />
  </span>
)

export default Image

Image.propTypes = {
  image: PropTypes.string.isRequired
}