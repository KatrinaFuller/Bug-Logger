<template>
  <div id="add-bug-modal" class="modal" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Add Bug</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="addBug()">
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                id="title"
                placeholder="Enter title"
                v-model="newBug.title"
                required
              />
            </div>
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                id="description"
                placeholder="Enter description"
                v-model="newBug.description"
              />
            </div>
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                id="reportedBy"
                placeholder="Enter your name"
                v-model="newBug.reportedBy"
              />
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "add-bug-modal",
  data() {
    return {
      newBug: {}
    };
  },
  computed: {},
  methods: {
    addBug() {
      this.$store.dispatch("addBug", this.newBug);
      $(".close").click();
    }
  },
  components: {}
};
</script>


<style scoped>
</style>