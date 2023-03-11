<template>
  <div class="content">

    <RightBubble />

    <main>
      <v-container>
        <v-row dense>
          <v-col cols="12">
            <v-card>
              <v-card-title><font-awesome-icon icon="fa-solid fa-inbox" /> Toegewezen Rapportages</v-card-title>
              <v-card-text>Bekijk hier de rapportages die aan u zijn toegewezen</v-card-text>
              <v-card-actions>
                <router-link to="/assigned-reports">
                  <v-btn>Ga</v-btn>
                </router-link>
              </v-card-actions>
            </v-card>
          </v-col>

          <v-col cols="12">
            <v-card>
              <v-card-title><font-awesome-icon icon="fa-solid fa-file-circle-check" /> Uitgevoerde Rapportages</v-card-title>
              <v-card-text>
                Bekijk hier de rapportages die reeds zijn uitgevoerd<br />
                <v-divider></v-divider>
                <ul>
                  <li v-for="report in reports" :report="report" :key="report.id">
                    <span class="report-title">
                      {{ report.adress + ' ' + report.houseNumber + ', ' + report.city + ' - ' + report.date}}
                      <v-chip v-if="report.damage.directAction || report.deferredMaintenance.directAction" class="ma-2" color="red" text-color="white">
                        Vereist acute actie!
                      </v-chip>
                    </span>
                    {{  }}
                    <v-divider></v-divider>
                  </li>
                </ul>
              </v-card-text>
              <v-card-actions>
                <router-link to="/completed-reports">
                  <v-btn>Inzien</v-btn>
                  <v-btn>Aanpassen</v-btn>
                </router-link>
              </v-card-actions>
            </v-card>
          </v-col>

          <v-col cols="12">
            <v-card>
              <v-card-title><font-awesome-icon icon="fa-solid fa-info" /> Kennisbank</v-card-title>
              <v-card-text>Vind hier alle belangrijke documenten en procedures terug </v-card-text>
              <v-card-actions>
                <v-btn>Ga</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>

          <v-col cols="12">
            <v-card>
              <v-card-title><font-awesome-icon icon="fa-solid fa-gears" /> Instellingen</v-card-title>
              <v-card-text>Pas hier uw instellingen aan</v-card-text>
              <v-card-actions>
                <v-btn>Ga</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>

        </v-row>
      </v-container>
    </main>

    <LeftBubble />
  </div>
</template>


<script>
import RightBubble from "@/components/RightBubble.vue";
import ReportService from "@/services/ReportService";
import LeftBubble from "@/components/LeftBubble.vue";

  export default {
    name: "Dashboard-component",
    components: {
      RightBubble,
      LeftBubble,
    },
    data() {
        return {
            reports: null
        };
    },
    created() {
        //Haar de reports op uit de ReportService
        ReportService.getPage("/reports")
            .then(response => {
            this.reports = response.data;
            //sorteer alle reports op datum
            this.reports.sort((a, b) => {
                if (a.date < b.date) {
                    return -1;
                }
                if (a.date > b.date) {
                    return 1;
                }
                return 0;
            });
        }).catch(error => {
            console.log(error);
        });
    },
}
</script>


<style>
  .content{
    width: 100%;
    height: 100%;
    padding-top: 4em;
    padding-bottom: 4em;
    z-index: 1;
  }

  main{
    margin-top: 10%;
    margin-bottom: 10%;
  }

  ul{
    list-style: none;
  }

  ul li{
    padding-top: 2em;
  }

  .report-title{
    font-size: 1.2em;
    margin-bottom: .3em;
  }
</style>