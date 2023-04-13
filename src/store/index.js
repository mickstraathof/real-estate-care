import { createStore } from 'vuex'

export default createStore({
    state: {
        name: "John Doe",
        password: "secret123",
        darkMode: false,
        allowNotifications: true,
        allowSound: true,
    },
    getters: {

    },
    mutations: {
        //change the state of name to the name entered in form
        setName(state, newValue){
            state.name = newValue
        },
        setPassword(state, newValue){
            state.password = newValue
        },
        setDarkMode(state, newValue){
            state.darkMode = newValue
        },
        setAllowNotifications(state, newValue){
            state.allowNotifications = newValue
        },
        setAllowSound(state, newValue){
            state.allowSound = newValue
        }
    },
    actions: {
        //call mutation to change state of name
        setName({ commit }, newValue){
            commit('setName', newValue)
        },
        setPassword({ commit }, newValue){
            commit('setPassword', newValue)
        },
        setDarkMode({ commit }, newValue){
             commit('setDarkMode', newValue)
        },
        setAllowNotifications({ commit }, newValue){
            commit('setAllowNotifications', newValue)
        },
        setAllowSound({ commit }, newValue){
            commit('setAllowSound', newValue)
        }
    }
})