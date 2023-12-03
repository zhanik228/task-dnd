<template>
  <div ref="thisCard" class="card" style="width: 18rem;" draggable @dragstart="handleDragStart">
    <img :src="card.picture.large"
         class="card-img-top" alt="Chicago Skyscrapers"/>
    <div class="card-body">
      <h5 class="card-title">
        <router-link :to="`profile/${card.email}`">
          {{ card.name.title }} {{ card.name.first }} {{ card.name.last }}
        </router-link>
      </h5>
      <p class="card-text">
        {{ card.location.country }}, {{ card.location.city }}
      </p>
    </div>
    <ul class="list-group list-group-light list-group-small">
      <li class="list-group-item px-4">Number: {{ card.phone }}</li>
      <li class="list-group-item px-4">Dapibus ac facilisis in</li>
      <li class="list-group-item px-4">Vestibulum at eros</li>
    </ul>
    <div class="card-body">
      <a href="#" class="card-link">Card link</a>
      <a href="#" class="card-link">Another link</a>
    </div>
  </div>
</template>

<script>

import DropZone from '@/view/DropZone';

export default {
  props: {
    card: {
      required: false,
    },
  },
  methods: {
    handleDragStart(event) {
      event.dataTransfer.setData('text/plain', this.card.email);
    },
  },
  mounted() {
    this.$refs.thisCard.dataset.id = this.card.email;
    const topDropzone = DropZone.createDropZone();
    this.$refs.thisCard.prepend(topDropzone);
    const bottomDropzone = DropZone.createDropZone();
    this.$refs.thisCard.appendChild(bottomDropzone);
  },
};
</script>
