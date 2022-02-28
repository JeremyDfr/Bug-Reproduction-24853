<template>
  <ion-page>
    <ion-content>
      <ion-router-outlet></ion-router-outlet>
    </ion-content>
    <Navigation/>
  </ion-page>
</template>

<script>
import {IonPage, IonContent, IonRouterOutlet} from "@ionic/vue";
import Navigation from "@/components/NavigationComponent.vue";

export default  {
  name: 'ChildrenLayout',
  components: {
    IonPage,
    IonContent,
    IonRouterOutlet,
    Navigation
  }
}
</script>