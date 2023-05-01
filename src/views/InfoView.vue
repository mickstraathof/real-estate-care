<template>
    <RightBubble />
    <div class="content">
        <v-container>
            <h2>Kennisbank</h2>
            <v-row dense>
                <v-col cols="12" v-for="doc in documents" :doc="doc" :key="doc.id">
                    <v-card>
                        <v-card-title>
                            {{ doc.name }}
                        </v-card-title>
                        <v-card-text>
                            {{ doc.description }}
                        </v-card-text>
                        <v-card-actions>
                            <v-btn :href="'./' + doc.reference" target="_blank" >Open PDF-bestand</v-btn>
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
import InfoDocsService from '@/services/InfoDocsService';
export default{

    components: {
        RightBubble,
        LeftBubble,
    },
    computed: {
        infoDocs: {
            get(){
                return this.$store.state.infoDocs
            }
        }
    },
    data(){
        return{
            documents: null,
        }
    },
    created(){
        InfoDocsService.getPage("/infoDocs")
            .then(response => {
                this.documents = response.data;
            }).catch(error => {
                console.log(error);
            })
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
</style>