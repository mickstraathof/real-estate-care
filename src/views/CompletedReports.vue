<template>
    <RightBubble />
    <div class="content">
        <v-container>
            <v-row dense>
                <v-col cols="12" v-for="report in reports" :report="report" :key="report.id">
                    <v-card>
                        <v-card-title>{{ report.adress + ' ' + report.houseNumber + ', ' + report.city }}</v-card-title>
                        <v-card-text>Rapportage afgesloten op {{ report.date }}</v-card-text>
                        <v-chip v-if="report.damage.directAction || report.deferredMaintenance.directAction" class="ma-2" color="red" text-color="white">
                            Vereist acute actie!
                        </v-chip>
                        <v-card-actions>
                            <v-btn variant="outlined">Bekijk Rapportage</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
    <LeftBubble />
</template>


<script>
//import components
import RightBubble from '@/components/RightBubble.vue';
import LeftBubble from '@/components/LeftBubble.vue';

//import services
import ReportService from '@/services/ReportService';

    export default{
    components: {
        RightBubble,
        LeftBubble,
    },
    data(){
        return{
            reports: null,
        }
    },
    created() {
        //Fetch the reports from ReportService
        ReportService.getPage("/reports")
            .then(response => {
            this.reports = response.data;
            //sort reports by date
            this.reports.sort((a, b) => {
                if (a.date < b.date) {
                    return -1;
                }
                if (a.date > b.date) {
                    return 1;
                }
                return 0;
            });
        //When error occurs, log to console
        }).catch(error => {
            console.log(error);
        });
    },
}
</script>


<style scoped>

.content{
    width: 100%;
    height: 100%;
    padding-top: 6em;
    padding-bottom: 6em;
    z-index: 1;
}

button{
    color: rgb(0, 180, 162);
}
    
</style>