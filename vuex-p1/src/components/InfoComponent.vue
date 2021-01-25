<template>
  <div>
    <h1>Match Details</h1>
    <h5 v-if="teamACount > 2">{{ matchDate }}</h5>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  computed: {
    ...mapState({ matchDate: (state) => state.info.matchDate }),
    ...mapGetters("info", ["teamACount"]),
  },
};
</script>
