import Vuex from 'vuex'
const NodeCache = require( "node-cache" )
const myCache = new NodeCache()

const Store = () => {
  return new Vuex.Store({
    state: {
        dataInit: null,
        activeContent: null,
        contentLoad: 3,
        isMobile: null,
        scroll: {
          scrolled: false,
          y: 0
        }
    },
    mutations: {
        loadDataInit (state, data) {
            state.dataInit = data
        },
    },
    actions: {
        nuxtServerInit ({state, commit}, {app, isDev, req, redirect}) {
            if (process.server) {
                if (!state.datainit) {
                    myCache.get( "dataWWWID", function( err, value ){
                        if( !err ){
                            let slug
                            let i
                            if(value === undefined){
                                app.$axios.$get('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2Fwwwid')
                                    .then((res) => {
                                        myCache.set( "dataWWWID", res)
                                        for (i = 0; i < res.items.length; i++) {
                                            slug = res.items[i].title.toLowerCase().trim().replace(/[^0-9a-zA-Z]/g, '-')
                                            res.items[i].desc = ' ...'
                                            res.items[i].slug = slug
                                        }
                                        commit('loadDataInit', res)
                                    })
                                    .catch(e => {
                                        console.log('E: ServerInit - ' + e.message)
                                    })
                            } else {
                                for (i = 0; i < value.items.length; i++) {
                                    slug = value.items[i].title.toLowerCase().trim().replace(/[^0-9a-zA-Z]/g, '-')
                                    value.items[i].desc = ' ...'
                                    value.items[i].slug = slug
                                }
                                commit('loadDataInit', value)
                            }
                        }
                    })
                }
            }
        }
    }
  })
}

export default Store
