import Vuex from 'vuex'

const Store = () => {
  return new Vuex.Store({
    state: {
        dataInit: null,
        activeContent: null,
        contentLoad: 2,
        isMobile: null,
        scroll: {
          scrolled: false,
          y: 0
        }
    },
    mutations: {
        loadDataInit (state, data) {
        },
    },
    actions: {
        async nuxtServerInit ({state, commit}, {app, isDev, req, redirect}) {
            if (process.server) {
                const hostParts = (req.headers.host || '').replace('.org', '').split('.')
                console.log(req.connection.encrypted)
                // if (hostParts.length === 2) {
                //     if (hostParts[0] === 'www') return redirect(301, 'https://nuxtjs.org' + req.url)
                //     commit('setLocale', hostParts[0])
                // }
                if (!state.datainit) {
                    await app.$axios.$get('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2Fwwwid')
                        .then((res) => {
                            let slug
                            let i
                            for (i = 0; i < res.items.length; i++) {
                                slug = res.items[i].title.toLowerCase().trim().replace(/[^0-9a-zA-Z]/g, '-')
                                res.items[i].desc = ' ...'
                                res.items[i].slug = slug
                            }
                            state.dataInit = res
                        })
                        .catch(e => {
                            console.log('E: ServerInit - ' + e.message)
                        })
                }
            }
        }
    }
  })
}

export default Store
