import { createStore } from 'vuex'

export default createStore({
    state: {
        name: "John Doe",
        password: "secret123",
        darkMode: false,
        allowNotifications: true,
        allowSound: true,
        assignedReports: [
            {
                "id": 1,
                "adress": "Prins Hendrikplein",
                "houseNumber" : 92,
                "city" : 'Den Haag',
                "zipCode" : "2518JA",
                "date" : null,
                "damage" : {
                    "applies": false,
                    "location" : null,
                    "newDamage" : null,
                    "damageType" : null,
                    "directAction" : null,
                    "description" : null
                },
                "deferredMaintenance" : {
                    "applies": false,
                    "location" : null,
                    "maintenanceType" : null,
                    "directAction" : null,
                    "costs" : null
                },
                "technicalInstallations" : {
                    "applies": false,
                    "location" : null,
                    "installationType" : null,
                    "reportedFailures" : null,
                    "testProcedure" : null,
                    "approved" : null,
                    "comments" : null
                },
                "modifications" : {
                    "applies": false,
                    "documentedModifications" : null,
                    "location" : null,
                    "performedBy" : null,
                    "modification" : null,
                    "action" : null,
                    "comments" : null
                }
            },

            {
                "id": 2,
                "adress" : "Jacob Catsstraat",
                "houseNumber" : 199,
                "city" : "Terneuzen",
                "zipCode" : "4532BZ",
                "date" : null,
                "damage" : {
                    "location" : null,
                    "newDamage" : null,
                    "damageType" : null,
                    "directAction" : null,
                    "description" : null
                },
                "deferredMaintenance" : {
                    "location" : null,
                    "maintenanceType" : null,
                    "directAction" : null,
                    "costs" : null
                },
                "technicalInstallations" : {
                    "location" : null,
                    "installationType" : null,
                    "reportedFailures" : null,
                    "testProcedure" : null,
                    "approved" : null,
                    "comments" : null
                },
                "modifications" : {
                    "documentedModifications" : null,
                    "location" : null,
                    "performedBy" : null,
                    "modification" : null,
                    "action" : null,
                    "comments" : null
                }
            },

            {
                "id": 3,
                "adress" : "Emmaweg",
                "houseNumber" : 129,
                "city" : "Maarssen",
                "zipCode" : "3603AL",
                "date" : null,
                "damage" : {
                    "location" : null,
                    "newDamage" : null,
                    "damageType" : null,
                    "directAction" : null,
                    "description" : null
                },
                "deferredMaintenance" : {
                    "location" : null,
                    "maintenanceType" : null,
                    "directAction" : null,
                    "costs" : null
                },
                "technicalInstallations" : {
                    "location" : null,
                    "installationType" : null,
                    "reportedFailures" : null,
                    "testProcedure" : null,
                    "approved" : null,
                    "comments" : null
                },
                "modifications" : {
                    "documentedModifications" : null,
                    "location" : null,
                    "performedBy" : null,
                    "modification" : null,
                    "action" : null,
                    "comments" : null
                }
            }
        ],
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