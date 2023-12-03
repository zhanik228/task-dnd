<template>
  <div ref="column" class="col kanban-column">
    <h2 class="text-light text-start">{{ title }}</h2>
    <div class="kanban-items" v-for="item in items" :key="item.id">
      <kanban-card :card="item.content" />
      <div class="kanban-dropzone"></div>
    </div>
  </div>
</template>

<script>
import KanbanCard from '@/components/kanban/KanbanCard.vue';
import KanbanApi from '@/api/KanbanApi';
import DropZone from '@/view/DropZone';

export default {
  data() {
    return {
      items: [],
    };
  },
  components: { KanbanCard },
  props: {
    title: {
      required: false,
    },
    id: {
      required: false,
    },
  },
  async mounted() {
    this.$refs.column.dataset.id = this.id;
    setInterval(async () => {
      this.items = await KanbanApi.getItems(this.id);
    }, 1000);
    const topDropzone = DropZone.createDropZone();
    this.$refs.column.prepend(topDropzone);
    const bottomDropzone = DropZone.createDropZone();
    this.$refs.column.appendChild(bottomDropzone);
  },
};
</script>
