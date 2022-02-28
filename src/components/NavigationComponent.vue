<template>
  <ion-footer>
    <ion-toolbar>
      <div class="mainNavigation">
        <nav>
          <router-link to="/children/alert">Alert</router-link>
          <router-link to="/children" replace>Home</router-link>
        </nav>
      </div>
    </ion-toolbar>
  </ion-footer>
</template>

<script>
import {defineComponent} from "vue";
import {IonFooter, IonToolbar} from "@ionic/vue";

export default defineComponent({
  name: "ParentsNavigation",
  components: {
    IonFooter,
    IonToolbar
  }
});
</script>

<style>
nav {
  display: flex;
  justify-content: space-around;
}
</style>
