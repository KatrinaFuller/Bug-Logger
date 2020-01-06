<template>
  <div class="home container-fluid">
    <addBugModal />
    <button class="btn m-1" data-toggle="modal" data-target="#add-bug-modal">Add Bug</button>

    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">Title</th>
          <th scope="col">Reported By</th>
          <th scope="col">Status</th>
          <th scope="col">Last Modified</th>
        </tr>
      </thead>
      <tbody>
        <!-- <tr> -->
        <bug v-for="bug in bugs" :key="bug.id" :bugProp="bug" />
        <!-- </tr> -->
      </tbody>
    </table>

    <!-- <bug v-for="bug in bugs" :key="bug.id" :bugProp="bug" /> -->
  </div>
</template>

<script>
// @ is an alias to /src
import addBugModal from "../components/addBugModal";
import bug from "../components/bug";

export default {
  name: "home",
  computed: {
    bugs() {
      return this.$store.state.bugs;
    }
  },
  mounted() {
    this.$store.dispatch("getBugs");
  },
  components: { addBugModal, bug }
};
</script>
