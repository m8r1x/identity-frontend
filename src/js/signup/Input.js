import React from 'react'
import PropTypes from 'prop-types'

const Input = ({ type, id }) => (
  <div className="field">
    <input 
      type={type} 
      name={id} 
      id={id} 
      placeholder={id} 
    />
  </div>
)

Input.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
}

export default Input