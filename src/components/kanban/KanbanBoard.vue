<template>
  <div class="row kanban py-2">
      <kanban-column
        :id="column.id"
        :title="column.title"
        v-for="column in columns"
        :key="column.id"
      />
  </div>
</template>

<script>
import KanbanApi from '@/api/KanbanApi';
import KanbanColumn from '@/components/kanban/KanbanColumn.vue';

export default {
  components: { KanbanColumn },
  data() {
    return {
      columns: [
        {
          id: 1,
          title: 'Profile',
        },
        {
          id: 2,
          title: 'Profile',
        },
        {
          id: 3,
          title: 'Profile',
        },
      ],
    };
  },
  async mounted() {
    // console.log(KanbanApi.getItem('MY 97 57 36 C'));
    setInterval(async () => {
      const items = await KanbanApi.getItems(1);
      if (!items.length) {
        console.log(KanbanApi.insertItem(1));
      }
    }, 1000);
  },
};
</script>
