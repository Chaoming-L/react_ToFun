/**
 * Created by Damon on 2017/5/30.
 */
const LOGIN  = 'LOGIN',
      LOGOUT = 'LOGOUT'

export const login = () => ({type: LOGIN})
export const logout = () => ({type: LOGOUT})

const initState = {
  appTitle: 'TOFUN',
  isLogin: false
}
export default function appBar (state = initState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isLogin: true
      }

    case LOGOUT:
      return {
        ...state,
        isLogin: false
      }

    default:
      return state
  }
}
