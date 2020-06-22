<template>
  <v-app>
    <v-content>
      <Header />
      <transition>
        <v-container>
          <transition name="slide" mode="out-in">
            <router-view />
          </transition>
        </v-container>
      </transition>
    </v-content>
  </v-app>
</template>

<script>
import Header from "@/components/templates/Header";
export default {
  name: "App",
  data: () => ({}),
  components: {
    Header
  }
};
</script>

<style scoped>
@keyframes slide-in {
  from {
    transform: translateY(-30px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes slide-out {
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(-30px);
    opacity: 0;
  }
}

.slide-enter-active {
  animation: slide-in 0.3s ease;
}

.slide-leave-active {
  animation: slide-out 0.3s ease;
}
</style>
