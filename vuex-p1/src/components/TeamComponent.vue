<template>
  <div>
    <h1>Team {{ type }} - Total is {{ memberCount }}</h1>
    <ul>
      <li v-for="(member, index) in team" :key="member.id">
        {{ member.name }}
        <button @click="removeTeamMember({ type, index, member })">X</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  props: ["type"],
  methods: {
    ...mapActions(["removeTeamMember"]),
    /* removeTeamMember(type, index, member) {
      this.$store.dispatch("removeTeamMember", { type, index, member });
    }, */
  },
  computed: {
    team() {
      return this.type === "A" ? this.$store.state.teamA : this.$store.state.teamB;
    },
    memberCount() {
      return this.type === "A"
        ? this.$store.state.teamA.length
        : this.$store.state.teamB.length;
    },
  },
};
</script>
