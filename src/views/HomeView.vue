<template>
  <div class="home bg-primary">
    <div class="container">
      <kanban-board></kanban-board>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import KanbanBoard from '@/components/kanban/KanbanBoard.vue';

export default {
  name: 'HomeView',
  components: { KanbanBoard },
  mounted() {
    // eslint-disable-next-line
    // new Kanban(
    //   document.querySelector('.kanban'),
    // );
  },
};
</script>
