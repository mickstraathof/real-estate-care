<template>
    <RightBubble />
    <div class="content">
        <main>
            <v-container>
                <v-row dense>
                    <v-col cols="12">
                        <v-card>
                            <v-card-title>
                                <h3>Instellingen</h3>
                            </v-card-title>
                            <v-card-text>
                                <v-sheet width="300" class="mx-auto">
                                    <v-form fast-fail @submit.prevent>
                                        <v-text-field
                                            label="Naam"
                                            v-model="name"
                                        ></v-text-field>
                                        <v-file-input
                                            name="avatar"
                                            accept="image/*"
                                            variant="solo"
                                            label="Upload een nieuwe Avatar"
                                            prepend-icon=""
                                        ></v-file-input>
                                        <v-text-field
                                            label="Verander Wachtwoord"
                                            type="input"
                                            hint="Vul een nieuw wachtwoord in"
                                            v-model="password"
                                        ></v-text-field>
                                        <v-switch
                                            label="Gebruike donkere modus"
                                            color="info"
                                            v-model="darkMode"
                                        ></v-switch>
                                        <v-switch
                                            label="Meldingen tonen"
                                            color="info"
                                            v-model="allowNotifications"
                                        ></v-switch>
                                        <v-switch
                                            label="Geluid toestaan"
                                            color="info"
                                            v-model="allowSound"
                                        ></v-switch>
                                    </v-form>
                                </v-sheet>
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </main>
        
    </div>
    <LeftBubble />
</template>


<script>
import RightBubble from '@/components/RightBubble.vue';
import LeftBubble from '@/components/LeftBubble.vue';
export default{
    components: {
        RightBubble,
        LeftBubble
    },
    computed:{
        name: {
            get(){
                return this.$store.state.name
            },
            set(newValue){
                this.$store.dispatch('setName', newValue)
            }
        },
        password: {
            get(){
                return this.$store.state.password
            },
            set(newValue){
                this.$store.dispatch('setPassword', newValue)
            }
        },
        darkMode: {
            get(){
                return this.$store.state.darkMode
            },
            set(newValue){
                this.$store.dispatch('setDarkMode', newValue)
            }
        },
        allowNotifications: {
            get(){
                return this.$store.state.allowNotifications
            },
            set(newValue){
                this.$store.dispatch('setAllowNotifications', newValue)
            }
        },
        allowSound: {
            get(){
                return this.$store.state.allowSound
            },
            set(newValue){
                this.$store.dispatch('setAllowSound', newValue)
            }
        }
    }
}
</script>


<style scoped>
      .content{
    width: 100%;
    height: 100%;
    padding-top: 4em;
    padding-bottom: 4em;
    z-index: 1;
  }

  form{
    padding-top: 1em;
  }
</style>