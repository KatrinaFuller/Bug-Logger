<template>
  <div class="bug">
    <tr>
      <th scope="row">{{bugProp.title}}</th>
      <td>{{bugProp.reportedBy}}</td>
      <td>{{bugProp.status}}</td>
      <td>{{bugProp.closedDate}}</td>
    </tr>
  </div>
</template>


<script>
export default {
  name: "bug",
  props: ["bugProp"],
  data() {
    return {};
  },
  computed: {},
  methods: {},
  components: {}
};
</script>


<style scoped>
</style>