import http from '../utils/axios'

export const login = async (credentials) => {
  const response = await http('/auth/login/', {
    method: 'POST',
    data: credentials,
  })

  if (response.status === 200) {
    return response
  }

  throw new Error('Login failed')
}
