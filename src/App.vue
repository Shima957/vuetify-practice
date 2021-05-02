<template>
 <v-app>
   <v-app-bar app dense>
     <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
     <v-app-bar-title class="title">Page Title</v-app-bar-title>
   </v-app-bar>

   <v-navigation-drawer
    v-model="drawer"
    temporary
   >
   <v-list-item>
     <v-list-item-content>
       <v-list-item-title class="title">
         Application
       </v-list-item-title>

     </v-list-item-content>
   </v-list-item>

   <v-divider></v-divider>

    <v-list>
      <v-list-item-group>
       <v-list-item v-for="(item, index) in items" :key="index">

         <v-list-item-icon>
           <v-icon>{{item.icon}}</v-icon>
         </v-list-item-icon>
         <v-list-item-content>
           <v-list-item-title>{{item.title}}</v-list-item-title>
         </v-list-item-content>

       </v-list-item>
      </v-list-item-group>
    </v-list>
   </v-navigation-drawer>
 </v-app>
</template>

<script>

export default {
  name: 'App',


  data() {
    return {
      drawer: false,
        items: [
          {title: 'Home', icon: 'mdi-home'},
          {title: 'About', icon: 'mdi-account'}
        ],
   };
  }
}
</script>
