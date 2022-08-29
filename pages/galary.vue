<template>
<v-main>
    <section class="restaurantinfo" >

 <v-card-title>Gallery</v-card-title>
        <v-row>
            <v-col v-for="img in images" :key="img"  >
                <v-img :src="`${img}`" height="300" width="500" @click="showImage(img)" cover class="bg-grey-lighten-2" >
                    <template v-slot:placeholder>
                        <v-row class="fill-height ma-0" align="center" justify="center">
                            <v-progress-circular indeterminate color="grey-lighten-5"></v-progress-circular>
                        </v-row>
                    </template>
                </v-img>
            </v-col>
        </v-row>
       

    </section>
     <v-dialog v-model="dialog"  max-width="800">
      <v-card>
        <v-img :src="`${activeImge}`" cover class="bg-grey-lighten-2"></v-img>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1"  @click="dialog = false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>    
    </v-main>
    <!-- <section v-else class="restaurantinfo">
        <AppDialog />
    </section> -->
</template>
<script>
import { mapState } from 'vuex';
import AppDialog from '@/components/AppDialog.vue'
export default {
    components: {
        AppDialog
    },
    data() {
        return {
            dialog: false,
            protocol: window.location.protocol,
            activeImge:""
        }
    },
    computed: {
        ...mapState(["images"]),
    },
    methods: {
        showImage(img) {
            this.dialog = true
            this.activeImge = img
        }
    }
}
</script>
<style lang="">
    
</style>