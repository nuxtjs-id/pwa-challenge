import Vuex from 'vuex'

const Store = () => {
  return new Vuex.Store({
    state: {
        dataInit: null,
        activeContent: null
    },
    getters: {
      API () {
        return 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2Fwwwid'
      }
    },
    mutations: {
        loadDataInit (state, data) {
          state.dataInit = data
        },
    },
    actions: {
        async nuxtServerInit ({commit}, {app, store}) {
            if (process.server) {
                await app.$axios.$get(store.getters.API)
                    .then((res) => {
                        commit('loadDataInit', res)
                    })
                    .catch(e => {
                        console.log('E: ServerInit - ' + e.message)
                    })
            }
        }
    }
  })
}

export default Store
