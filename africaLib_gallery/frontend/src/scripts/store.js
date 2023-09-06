// import { createApp } from 'vue'
import { createStore } from 'vuex'

const store = createStore({
    state () {
        return {
            account:{
                id: 0,

            }
        }
    },
    mutations: {
        setAccount(state, payload){
            state.account.id = payload;
        }
    }
})

export default store;
// main.js에 있는 내용 이므로 주석처리
// const app = createApp({ /* your root component */ })
//
// // Install the store instance as a plugin
// app.use(store)