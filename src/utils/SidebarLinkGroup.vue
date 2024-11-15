<template>
  <li class="mb-1">
    <slot :handleClick="handleClick" :expanded="expanded" />
  </li>
</template>
<script>
import { ref } from 'vue'

export default {
  name: 'SidebarLinkGroup',
  props: ['activeCondition'],
  setup(props) {
    const expanded = ref(props.activeCondition)

    const handleClick = () => {
      expanded.value = !expanded.value
    }

    return {
      expanded,
      handleClick,
    }
  },
}
</script>