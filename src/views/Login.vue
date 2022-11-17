<template>
    <v-layout>

        <v-row>
            <v-col md="7" class="d-flex justify-center align-center" v-if="this.$vuetify.breakpoint.smAndUp" style="background:#f4f5fa; height: 100vh;">
                <div class="contenedor-img">
                    <img src="../assets/login.png" alt="">
                </div>
            </v-col>
            <v-col cols="12" md="5" class="d-flex justify-center align-center">

                <v-card class="mx-auto v-card--flat cardLogin" style="max-width:500px">
                    <v-card-text>
                        <h5 class="text-h5 font-weight-semibold mb-1"> Bienvenidos 👋🏻 </h5>
                        <p class="mb-0"> Por favor para continuar inicie sesion </p>
                    </v-card-text>
                    <v-img class="white--text align-end logo"  height="120px"
                        src="../assets/Presentacionblanco.png" style="object-fit:cover">
                        
                        
                    </v-img>
                    <v-card-text>
                        <v-form>
                <v-card-text>
                  <v-text-field
                    v-model="email"
                    :rules="nameRules"
                    :counter="10"
                    label="Usuario"
                    prepend-inner-icon="mdi-account"
                    required
                  ></v-text-field>

                  <v-text-field
                    v-model="password"
                    :type="verContraseña ? 'text' : 'password'"
                    :rules="ReglasContraseña"
                    :counter="10"
                    label="Contraseña"
                    prepend-inner-icon="mdi-key"
                    :append-icon="verContraseña ? 'mdi-eye' : 'mdi-eye-off'"
                    @click:append="verContraseña = !verContraseña"
                    required
                  ></v-text-field>
                </v-card-text>

                <v-card-actions class="justify-center">
                  <v-btn color="primary"  block @click="signin()" ><span>Ingresar</span> </v-btn>
                </v-card-actions>
              </v-form>
                    </v-card-text>



                </v-card>



            </v-col>
        </v-row>

    </v-layout>
</template>

<script>
export default {
    data() {
    return {
      verContraseña: false,
      password: "",
      email: "",
      nameRules: [
        (v) => !!v || "Ingresar Usuario",
        //(v) => v.length <= 10 || "El usuario debe contener minimo 10",
        // (v) =>  /(\d)/.test(v) || "debe tener un numero"
      ],
      ReglasContraseña: [
        (v) => !!v || "Ingresar contraseña",
        (v) => v.length <= 10 || "La contraseña debe contener minimo 10",
        // (v) => /([A-Z])/.test(v)  || "Debe contener una mayuscula",
      ],
            
        }
    }
};
</script>

<style  scoped>
.contenedor-img {
    max-width: 768px;
}

img {
    width: 100%;
}
@media  (max-width:600px) {
    .logo{
        width: 320px;
        height: 85px !important;

    }
    .cardLogin{
      margin-top: 30px;
    }
}
</style>

