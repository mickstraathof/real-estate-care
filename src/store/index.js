import { createStore } from 'vuex'

export default createStore({
    state: {
        assignedReports: [
            {
                "id": 1,
                "adress": "Prins Hendrikplein",
                "houseNumber" : 92,
                "city" : 'Den Haag',
                "zipCode" : "2518JA",
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
        ]
    },
    getters: {

    },
    mutations: {

    },
    actions: {

    }
})