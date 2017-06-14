/**
 * Created by Damon on 2017/5/30.
 */
const LOGIN       = 'LOGIN',
      LOGOUT      = 'LOGOUT',
      SETAPPTITLE = 'SET_APP_TITLE'
/* ============================
 action
 =============================== */
export const login = () => ({type: LOGIN})
export const logout = () => ({type: LOGOUT})

// 设置appbar title
export const setAppTitle = (title) => ({
  type: SETAPPTITLE,
  title
})



/* =============================
 reducer
 ============================== */
const getLoginState = () => {
  if (window.localStorage) {
    if (localStorage.getItem('Token')) {
      return true
    } else {
      return false
    }
  } else {
    return false
  }
}

const initState = {
  appTitle: 'TOFUN',
  isLogin: getLoginState()
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

    case SETAPPTITLE:
      return {
        ...state,
        appTitle: action.title
      }
    default:
      return state
  }
}
