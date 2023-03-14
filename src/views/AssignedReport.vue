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
                            <v-switch
                                label="Is van toepassing"
                                v-model="currentReport.damage.applies"
                                color="info"
                            ></v-switch>
                                <v-sheet width="300" class="mx-auto">
                                    <v-form fast-fail @submit.prevent v-if="currentReport.damage && currentReport.damage.applies">
                                        <v-text-field
                                            v-model="currentReport.damage.location"
                                            label="Locatie"
                                        ></v-text-field>
                                        <v-switch
                                            label="Nieuwe schade?"
                                            color="info"
                                            v-model="currentReport.damage.newDamage"
                                        ></v-switch>
                                        <v-select
                                            label="Soort schade"
                                            :items="['Moedwillig', 'Slijtage', 'Geweld', 'Normaal gebruik', 'Calamiteit', 'Anders']"
                                            v-model="currentReport.damage.damageType"
                                        ></v-select>
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
                                    <v-switch 
                                        label="Is van toepassing"
                                        color="info"
                                        v-model="currentReport.deferredMaintenance.applies"
                                    ></v-switch>
                                    <v-form fast-fail @submit.prevent v-if="currentReport.deferredMaintenance && currentReport.deferredMaintenance.applies">
                                        <v-text-field
                                            v-model="currentReport.deferredMaintenance.location"
                                            label="Locatie"
                                        ></v-text-field>
                                        <v-select
                                            label="Soort onderhoud"
                                            :items="['Schilderwerk', 'Houtrot', 'Elektra', 'Leidingwerk', 'Beglazing']"
                                            v-model="currentReport.deferredMaintenance.maintenanceType"
                                        ></v-select>
                                        <v-switch
                                            label="Directe actie?"
                                            color="info"
                                            v-model="currentReport.deferredMaintenance.directAction"    
                                        ></v-switch>
                                        <v-alert
                                            class="mb-6"
                                            v-if="currentReport.deferredMaintenance.directAction"
                                            color="warning"
                                            title="Directe actie!"
                                            text="Voor dit type onderhoud moet direct actie ondernomen worden. Op de kennisbank kunt u het juiste protocol terugvinden"
                                        ></v-alert>
                                        <v-select
                                            label="Kostenindicatie"
                                            :items="['€0-500', '€500-1500', '€1500+']"
                                            v-model="currentReport.deferredMaintenance.costs"
                                        ></v-select>
                                    </v-form>
                                    <v-divider></v-divider>
                                    <h3>Technische Installaties</h3>
                                    <v-switch
                                        label="Is van toepassing"
                                        color="info"
                                        v-model="currentReport.technicalInstallations.applies"
                                    ></v-switch>
                                    <v-form fast-fail @submit.prevent v-if="currentReport.deferredMaintenance && currentReport.technicalInstallations.applies">
                                        <v-text-field
                                            v-model="currentReport.technicalInstallations.location"
                                            label="Locatie"
                                        ></v-text-field>
                                        <v-select
                                            label="Soort installatie"
                                            :items="['Koeling', 'Verwarming', 'Luchtverversing', 'Elektra', 'Beveiliging']"
                                            v-model="currentReport.technicalInstallations.installationType"
                                        ></v-select>
                                        <v-text-field
                                            label="Gemelde storingen"
                                            v-model="currentReport.technicalInstallations.reportedFailures"
                                        ></v-text-field>
                                        <v-btn>
                                            Testprocedure (PDF)
                                        </v-btn>
                                        <v-switch
                                            label="Goedgekeurd"
                                            color="info"
                                            v-model="currentReport.technicalInstallations.approved"
                                        ></v-switch>
                                        <v-alert
                                            class="mb-6"
                                            v-if="currentReport.technicalInstallations.approved"
                                            color="success"
                                            title="Goedgekeurd!"
                                            text="De technische installatie is goedgekeurd aan de hand van de uitgevoerde testprocedure"
                                        ></v-alert>
                                        <v-text-field
                                            label="Opmerkingen"
                                            v-model="currentReport.technicalInstallations.comments"
                                        ></v-text-field>
                                    </v-form>
                                    <v-divider></v-divider>
                                    <h3>Modificaties</h3>
                                    <v-switch
                                        label="Is van toepassing"
                                        color="info"
                                        v-model="currentReport.modifications.applies"
                                    ></v-switch>
                                    <v-form fast-fail @submit.prevent v-if="currentReport.deferredMaintenance && currentReport.modifications.applies">
                                        <v-btn class="mb-6">
                                            Bestaande situatie (PDF)
                                        </v-btn>
                                        <v-text-field
                                            label="locatie"
                                            v-model="currentReport.modifications.location"
                                        ></v-text-field>
                                        <v-select
                                            label="Uitgevoerd door"
                                            :items="['Huurder', 'Aannemer', 'Onbekend']"
                                            v-model="currentReport.modifications.performedBy"
                                        ></v-select>
                                        <v-text-field
                                            label="Beschrijving modificatie"
                                            v-model="currentReport.modifications.modification"
                                        ></v-text-field>
                                        <v-select
                                            label="Te ondernemen actie"
                                            :items="['Accepteren', 'Laten keuren', 'Laten verwijderen', 'Laten aanpassen en keuren']"
                                            v-model="currentReport.modifications.action"
                                        ></v-select>
                                        <v-text-field
                                            label="Opmerkingen"
                                            v-model="currentReport.modifications.comments"
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
    //import components
    import RightBubble from '@/components/RightBubble.vue';
    import LeftBubble from '@/components/LeftBubble.vue';

    export default{
        components: {
            RightBubble,
            LeftBubble,
        },
        created(){
            //get report with corresponding id from the url
            const data = this.$store.state.assignedReports;
            const id = this.$route.params.id;
            const report = data.filter((obj)=>{
                    return obj.id === parseInt(id);
            }).pop();
            //assign the selected report to the report variable
            this.currentReport = report;
        },
    }
</script>


<style scoped>
    .content{
    width: 100%;
    height: 100%;
    padding-top: 6em;
    padding-bottom: 4em;
    z-index: 1;
    }

    h3{
        margin-top: 1em;
        margin-bottom: 1em;
    }
</style>