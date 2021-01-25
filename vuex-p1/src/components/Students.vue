<template>
  <div>
    <h1>Students - Total is {{ studentCount }}</h1>
    <ul>
      <li v-for="(student, index) in students" :key="student.id">
        {{ student.name }} | <i>{{ student.games.length }} games he plays</i>
        <button @click="addTeamMember({ type: 'A', index })" :disabled="student.selected">
          Team A
        </button>
        <button @click="addTeamMember({ type: 'B', index })" :disabled="student.selected">
          Team B
        </button>
      </li>
    </ul>
    <hr />
    <TeamComponent type="A">Team A</TeamComponent>
    <hr />
    <TeamComponent type="B">Team B</TeamComponent>
    <hr />
    <InfoComponent />
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";
import TeamComponent from "./TeamComponent";
import InfoComponent from "./InfoComponent";
export default {
  components: { TeamComponent, InfoComponent },
  methods: {
    ...mapActions(["addTeamMember"]),
    /* addTeamMember(type, index) {
      this.$store.dispatch("addTeamMember", { type, index });
    }, */
  },
  computed: {
    ...mapState(["students"]),
    /* students() {
      return this.$store.state.students;
    }, */
    ...mapGetters(["studentCount"]),
  },
  created() {
    this.$store.dispatch("getStudents");
  },
};
</script>
