<template>
  <div class="modal-bg" @click.self="$emit('closeModal')">
    <div class="modal-fg">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'modal'
  }
</script>
