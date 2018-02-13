import Vuex from 'vuex'

const Store = () => {
  return new Vuex.Store({
    state: {
    },
    getters: {
      API () {
        return 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2Fwwwid'
      }
    },
    mutations: {
    },
    actions: {
        async nuxtServerInit ({commit}, {app, store, route, params, query}) {
        if (process.server) {
            switch (route.name) {
                case 'index':
                await app.$axios.$get(store.getters.API)
                    .then((res) => {
                        console.log(res.data)
                    })
                    .catch(e => {
                    console.log('E: ServerInit - ' + e.message)
                    })
                break
                default:
                break
            }
        }
        }
    }
  })
}

export default Store
