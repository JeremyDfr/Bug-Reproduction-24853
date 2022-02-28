<template>
  <ion-page>
    <ion-content>
      <h1>Alert</h1>
    </ion-content>
  </ion-page>
</template>

<script>
import {defineComponent} from "vue";
import {IonPage, IonContent} from '@ionic/vue';

export default defineComponent({
  name: 'ChildrenAlert',
  components: {
    IonContent,
    IonPage,
  },
})
</script>