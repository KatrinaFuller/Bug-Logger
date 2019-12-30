<template>
  <div class="home container-fluid">
    <addBugModal />
    <button class="btn m-1" data-toggle="modal" data-target="#add-bug-modal">Add Keep</button>
  </div>
</template>

<script>
// @ is an alias to /src
import addBugModal from "../components/addBugModal";

export default {
  name: "home",
  components: { addBugModal }
};
</script>
