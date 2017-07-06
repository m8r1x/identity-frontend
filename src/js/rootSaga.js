import watchFetchSocial from './app/social/SocialSaga'
import watchFetchUser from './app/user/UserSaga'

export default function* saga() {
  yield [ 
    watchFetchUser(),
    watchFetchSocial()
  ]
}