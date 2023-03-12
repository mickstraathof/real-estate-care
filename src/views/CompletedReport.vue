<template>
    <RightBubble />
    <div class="content">
        <v-container>
            <v-row dense>
                <v-col cols="12">
                    <v-card>
                        <v-card-title>
                            <span class="v-card-title">
                                {{ currentReport.adress + ' ' + currentReport.houseNumber + ', ' + currentReport.zipCode + ', ' + currentReport.city }}
                            </span>
                            <p class="smalltext"></p>
                        </v-card-title>
                        <v-card-text>
                            Inspectie uitgevoerd op {{ currentReport.date }}
                            <v-divider></v-divider>
                            <h3>Schade</h3>
                                <v-sheet width="300" class="mx-auto">
                                    <v-form fast-fail @submit.prevent v-if="currentReport.damage">
                                        <v-text-field
                                            v-model="currentReport.damage.location"
                                            label="Locatie"
                                        ></v-text-field>
                                        <v-switch
                                            label="Nieuwe schade?"
                                            color="info"
                                            v-model="currentReport.damage.newDamage"
                                        ></v-switch>
                                            
                                        <v-text-field
                                            v-model="currentReport.damage.damageType"
                                            label="Soort schade"
                                        ></v-text-field>
                                        <v-switch
                                            label="Directe actie?"
                                            color="info"
                                            v-model="currentReport.damage.directAction"
                                        ></v-switch>
                                        <v-alert
                                            class="mb-6"
                                            v-if="currentReport.damage.directAction"
                                            color="warning"
                                            title="Directe actie!"
                                            text="Voor deze schade moet direct actie ondernomen worden. Op de kennisbank kunt u het juiste protocol terugvinden"
                                        ></v-alert>
                                        <v-text-field
                                            v-model="currentReport.damage.description"
                                            label="beschrijving"
                                        ></v-text-field>
                                    </v-form>
                                    <v-divider></v-divider>
                                    <h3>Achterstallig onderhoud</h3>
                                    <v-form fast-fail @submit.prevent v-if="currentReport.deferredMaintenance">
                                        <v-text-field
                                            v-model="currentReport.deferredMaintenance.location"
                                            label="Locatie"
                                        ></v-text-field>
                                    </v-form>
                            </v-sheet>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
    <LeftBubble />
</template>


<script>
    //import services
    import ReportService from '@/services/ReportService';

    //import components
    import LeftBubble from '@/components/LeftBubble.vue';
    import RightBubble from '@/components/RightBubble.vue';
    export default{
        components: {
            LeftBubble,
            RightBubble,
        },
        created(){
            //get report with corresponding id from the url
            ReportService.getPage('/reports').then(res => {
                const data = res.data;
                const id = this.$route.params.id;
                const report = data.filter((obj)=>{
                    return obj.id === parseInt(id);
                }).pop();
                console.log(report);
                //assign the selected report to the report variable
                this.currentReport = report;
                console.log(this.currentReport.damage);
            }).catch(error => {
                console.log(error);
            }); 
        },
        data(){
            return{
                currentReport: "null",
            }
        },
        methods:{
            getLocation(){
                return JSON.stringify(this.currentReport.damage.location);
            }
            
        }
    }
</script>


<style scoped>
    .content{
    width: 100%;
    height: 100%;
    padding-top: 5em;
    padding-bottom: 4em;
    z-index: 1;
    }

    .v-card-title{
        font-size: 16px;
        font-weight: bold;
    }

    .smalltext{
        font-size: 14px;
    }

    h3{
        margin-top: 1em;
        margin-bottom: 1em;
    }
</style>