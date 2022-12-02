import {useDispatch, useSelector} from 'react-redux'
import {onChecking, onLogout, onLogin} from '../store/auth'

export const useAuthStore = () => {
  const dispatch = useDispatch()
  const {status, user, errorMessage} = useSelector((state) => state.auth)

  const checkAuthToken = async () => {
    const token = localStorage.getItem('token')

    if (!token || token.length === 0) return dispatch(onLogout())
    try {
      const res = await fetch(`${process.env.REACT_APP_BACKEND_API_URL}/auth`, {
        headers: {'x-token': token},
      })
      const data = await (await res).json()

      if (data.user) {
        localStorage.setItem('token', data.newToken)
        dispatch(onLogin(data.user))
      } else if (!data.user) {
        localStorage.setItem('token', '')
        dispatch(onLogout())
      }
    } catch (error) {
      localStorage.setItem('token', '')
      dispatch(onLogout())
    }
  }

  const registerUser = async (userData, setLoading) => {
    dispatch(onChecking())

    try {
      const res = await fetch(`${process.env.REACT_APP_BACKEND_API_URL}/users`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({...userData, role: 'USER_ROLE'}),
      })

      if (res.status === 400) {
        alert('Ya existe un usuario con esas credenciales')
        setLoading(false)
      }

      const data = await res.json()

      if (data.user) {
        dispatch(onLogin(data.user))
        localStorage.setItem('token', data.token)
      }
    } catch (error) {
      dispatch(onLogout())
    }
  }

  const loginUser = async (userData, setLoading) => {
    dispatch(onChecking())

    try {
      const res = await fetch(`${process.env.REACT_APP_BACKEND_API_URL}/auth/login`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(userData),
      })

      if (res.status === 400) {
        alert('Usuario o contraseña incorrectos')
        setLoading(false)
      }

      const data = await res.json()

      if (data.user) {
        dispatch(onLogin(data.user))
        localStorage.setItem('token', data.token)
      } else if (data.msg === 'Invalid credentials'.toLowerCase()) {
        alert('Las credenciales no coinciden')
      }
    } catch (error) {
      dispatch(onLogout())
    }
  }

  const logout = () => {
    localStorage.setItem('token', '')
    dispatch(onLogout())
  }

  return {
    status,
    user,
    errorMessage,

    // METHODS
    checkAuthToken,
    registerUser,
    loginUser,
    logout,
  }
}
