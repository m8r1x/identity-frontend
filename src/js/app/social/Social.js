import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const Social = ({ social }) => {
  const sites = ['twitter', 'github', 'linkedin']
  const content = social.fetched ? 
    sites.map(site => 
      <li key={site}>
        <a href={social.social[site]} className={'fa-'+site}/>
      </li>
    ) : 
    sites.map(site =>
      <li key={site} className={'fa-'+site}><Link to="/404"/></li>
    )

  return (
    <footer>
      <ul className="icons">
        {content}
      </ul>
    </footer>
  )
}

Social.propTypes = {
  social: PropTypes.object.isRequired
}

export default Social