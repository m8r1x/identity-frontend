import { connect } from 'react-redux'
import { withLifecycleActions } from 'react-redux-lifecycle'

import { fetchUser } from '../user/UserActions'
import { fetchSocial } from '../social/SocialActions'

import Card from './Card'

const mapStateToProps = state => ({
  user: state.user,
  social: state.social
})

const CardContainer = connect(mapStateToProps)(
  withLifecycleActions({
    componentDidMount: [fetchUser, fetchSocial]
  })(Card))

export default CardContainer