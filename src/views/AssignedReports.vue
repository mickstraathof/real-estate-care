<template>
    <RightBubble />
    <div class="content">
        <v-container>
            <v-row dense>
                <v-col cols="12" v-for="report in reports" :report="report" :key="report.id">
                    <v-card>
                        <v-card-title>{{ report.adress + ' ' + report.houseNumber + ', ' + report.city }}</v-card-title>
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

    export default{
        components: {
            RightBubble,
            LeftBubble
        },
        computed: {
            reports: {
                get(){
                    return this.$store.state.assignedReports
                }
            }
        }
    }
</script>


<style>
.content{
    width: 100%;
    height: 100%;
    padding-top: 6em;
    padding-bottom: 4em;
    z-index: 1;
    }
</style>