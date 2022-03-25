export const state = () => ({
  token: null,
  user: null,
  isLoggedIn: false,
  isAdmin: false
})

export const mutations = {
  setToken(state, token) {
    state.token = token
    if (token) state.isLoggedIn = true
    else state.isLoggedIn = false
  },
  setUser(state, user) {
    state.user = user
  },
  setIsAdmin(state, user) {
    state.isAdmin = user
  },
}

export const actions = {
  setToken({ commit }, token) {
    commit('setToken', token)
  },
  setUser({ commit }, user) {
    commit('setUser', user)
  },
  setIsAdmin({ commit }, user) {
    commit('setIsAdmin', user)
  }
}

export const getters = {
  isLoggedIn(state){ return state.isLoggedIn}
}
