<template>
    <div class="admin">
        <v-subheader class="d-flex justify-space-between aling-center">
            <h3>Panel de Administracion</h3>
            <!-- <v-btn color="success" class="rounded-lg"> Pedidos </v-btn> -->
        </v-subheader>
        <v-row>
            <v-col lg="7" cols="12">
                <v-alert dense text type="success">
                    <strong>Ingreso Autorizado:</strong> Buen Dia Leonardo
                </v-alert>
                
                <v-row>
                    <v-col lg="6" cols="12" v-for="(item,i) in movimientos" :key="i">
                        <v-card elevation="2" class="rounded-lg">
                            <v-card-text class="d-flex justify-space-between align-center">
                                <div >
                                    <strong>{{item.titulo}}</strong><br>
                                    <small>Dia de ayer</small>
                                </div>

                                <v-avatar :color=item.color size="60">
                                    <span class="white--text">{{item.numero}}</span>
                                </v-avatar>


                            </v-card-text>

                        </v-card>

                    </v-col>
                    
                </v-row>
                

            </v-col>
            <v-col lg="5" cols="12">
                        <v-card>
                            <v-card-title>Movimientos</v-card-title>
                            <v-timeline
        align-top
        dense
      >
        <v-timeline-item
          color="pink"
          small
        >
          <v-row class="pt-1">
            
            <v-col>
              <strong>New Icon</strong>
              <div class="text-caption">
                Mobile App
              </div>
            </v-col>
          </v-row>
        </v-timeline-item>

        <v-timeline-item
          color="teal lighten-3"
          small
        >
          <v-row class="pt-1">
            <!-- <v-col cols="3">
              <strong>3-4pm</strong>
            </v-col> -->
            <v-col>
              <strong>Design Stand Up</strong>
              <div class="text-caption mb-2">
                Hangouts
              </div>
             
            </v-col>
          </v-row>
        </v-timeline-item>

        <v-timeline-item
          color="pink"
          small
        >
          <v-row class="pt-1">
           
            <v-col>
              <strong>Lunch break</strong>
            </v-col>
          </v-row>
        </v-timeline-item>

        <v-timeline-item
          color="teal lighten-3"
          small
        >
          <v-row class="pt-1">
           
            <v-col>
              <strong>Finish Home Screen</strong>
              <div class="text-caption">
                Web App
              </div>
            </v-col>
          </v-row>
        </v-timeline-item>
      </v-timeline>
                            
                        </v-card>

                    </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <v-card>
                    
    <v-card-title>
      
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Buscar"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="desserts"
      :search="search"
    ></v-data-table>
  </v-card>

            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
    name: "Administracion",
    data(){
        return{
            // movimientos:[
            //     {titulo:"Ventas Incompletas",color:"red",numero:"23"},
            //     {titulo:"Ventas Realizadas",color:"brown lighten-2",numero:"15"},
            //     {titulo:"Pedidos en cola",color:"green lighten-2",numero:"23"},
            //     {titulo:"Clientes por visitar",color:"blue lighten-1",numero:"8"}
            // ],
            movimientos:[
                {titulo:"Usuarios",color:"red",numero:"23"},
                {titulo:"En Linea",color:"brown lighten-2",numero:"15"},
                {titulo:"Guardia",color:"green lighten-2",numero:"23"},
                {titulo:"Franco Servicio",color:"blue lighten-1",numero:"8"}
            ],
            search: '',
            headers: [
          {
            text: 'Dessert (100g serving)',
            align: 'start',
            sortable: false,
            value: 'name',
          },
          { text: 'Calories', value: 'calories' },
          { text: 'Fat (g)', value: 'fat' },
          { text: 'Carbs (g)', value: 'carbs' },
          { text: 'Protein (g)', value: 'protein' },
          { text: 'Iron (%)', value: 'iron' },
        ],
        desserts: [
          {
            name: 'Frozen Yogurt',
            calories: 159,
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
            iron: '1%',
          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
            fat: 9.0,
            carbs: 37,
            protein: 4.3,
            iron: '1%',
          },
          {
            name: 'Eclair',
            calories: 262,
            fat: 16.0,
            carbs: 23,
            protein: 6.0,
            iron: '7%',
          },
          {
            name: 'Cupcake',
            calories: 305,
            fat: 3.7,
            carbs: 67,
            protein: 4.3,
            iron: '8%',
          },
          {
            name: 'Gingerbread',
            calories: 356,
            fat: 16.0,
            carbs: 49,
            protein: 3.9,
            iron: '16%',
          },
          {
            name: 'Jelly bean',
            calories: 375,
            fat: 0.0,
            carbs: 94,
            protein: 0.0,
            iron: '0%',
          },
          {
            name: 'Lollipop',
            calories: 392,
            fat: 0.2,
            carbs: 98,
            protein: 0,
            iron: '2%',
          },
          {
            name: 'Honeycomb',
            calories: 408,
            fat: 3.2,
            carbs: 87,
            protein: 6.5,
            iron: '45%',
          },
          {
            name: 'Donut',
            calories: 452,
            fat: 25.0,
            carbs: 51,
            protein: 4.9,
            iron: '22%',
          },
          {
            name: 'KitKat',
            calories: 518,
            fat: 26.0,
            carbs: 65,
            protein: 7,
            iron: '6%',
          },
        ],
        }
    }
};
</script>

<style>

</style>
