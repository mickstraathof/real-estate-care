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
                                        ></v-text-field>
                                        <v-switch
                                            label="Gebruike donkere modus"
                                            color="info"
                                        ></v-switch>
                                        <v-switch
                                            label="Meldingen tonen"
                                            color="info"
                                        ></v-switch>
                                        <v-switch
                                            label="Geluid toestaan"
                                            color="info"
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